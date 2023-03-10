import { v4 as uuidv4 } from 'uuid';
import { addMinutes, format } from 'date-fns';

const initialState = {
  transfers: {
    all: false,
    withoutTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
  priorities: {
    cheapest: true,
    quickest: false,
    optimal: false,
  },

  ticketsData: [],
};

const ticketsDataTransform = (ticketsData) => {
  const formatPrice = (price) => {
    const str = String(price);
    const s = str.length;
    const chars = str.split('');
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
      const spaceOrNothing = (s - i) % 3 === 0 ? ' ' : '';
      return spaceOrNothing + char + acc;
    }, '');

    return `${strWithSpaces[0] === ' ' ? strWithSpaces.slice(1) : strWithSpaces} Р`;
  };
  const durationTransform = (duration) => {
    const hours = Math.floor(duration / 60);
    const min = duration % 60;
    return `${hours}ч ${min}м`;
  };
  const dateTransform = (date, duration) => {
    const departureDate = new Date(date);
    const departureTime = format(departureDate, 'HH:mm');
    const arrivalDate = addMinutes(new Date(date), duration);
    const arrivalTime = format(arrivalDate, 'HH:mm');
    return `${departureTime} - ${arrivalTime}`;
  };
  const transplants = (stops) => {
    const count = stops.length;
    return count === 0 ? 'Без пересадок' : count === 1 ? '1 пересадка' : `${count} пересадки`;
  };
  const newTicketsData = ticketsData.map((ticket) => {
    const { segments, ...newTicket } = ticket;
    return newTicket;
  });
  newTicketsData.forEach((ticket, index) => {
    const { segments } = ticketsData[index];
    const id = uuidv4();
    ticket.id = id;
    ticket.priceRender = formatPrice(ticketsData[index].price);
    ticket.logoUrl = `https://pics.avs.io/99/36/${ticketsData[index].carrier}.png`;
    ticket.flight = segments[0].origin + ' - ' + segments[0].destination;
    ticket.flightBack = segments[1].origin + ' - ' + segments[1].destination;
    ticket.time = dateTransform(segments[0].date, segments[0].duration);
    ticket.timeBack = dateTransform(segments[1].date, segments[1].duration);
    ticket.duration = durationTransform(segments[0].duration);
    ticket.durationBack = durationTransform(segments[1].duration);
    ticket.stopsCount = segments[0].stops.length;
    ticket.stopsCountRender = transplants(segments[0].stops);
    ticket.stopsList = segments[0].stops.join(', ');
    ticket.stopsCountBack = segments[1].stops.length;
    ticket.stopsCountRenderBack = transplants(segments[1].stops);
    ticket.stopsListBack = segments[1].stops.join(', ');
  });

  return newTicketsData;
};

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const { type } = action;
  const { transfers } = newState;

  if (type === 'loadTickets') {
    newState.ticketsData = [...newState.ticketsData, ...ticketsDataTransform(action.ticketsData)];
    return newState;
  }

  const checkAllBox = () => {
    const { withoutTransfers, oneTransfer, twoTransfers, threeTransfers } = transfers;
    if (withoutTransfers && oneTransfer && twoTransfers && threeTransfers) {
      transfers.all = true;
    }
  };

  if (type === 'all' && transfers.all === false) {
    for (let key in newState.transfers) transfers[key] = true;
    return newState;
  } else if (type === 'all' && transfers.all === true) {
    for (let key in newState.transfers) transfers[key] = false;
    return newState;
  }

  if (type === 'withoutTransfers') {
    transfers.withoutTransfers = !transfers.withoutTransfers;
    if (transfers.all) transfers.all = false;
    checkAllBox();
    return newState;
  }

  if (type === 'oneTransfer') {
    transfers.oneTransfer = !transfers.oneTransfer;
    if (transfers.all) transfers.all = false;
    checkAllBox();
    return newState;
  }

  if (type === 'twoTransfers') {
    transfers.twoTransfers = !transfers.twoTransfers;
    if (transfers.all) transfers.all = false;
    checkAllBox();
    return newState;
  }

  if (type === 'threeTransfers') {
    transfers.threeTransfers = !transfers.threeTransfers;
    if (transfers.all) transfers.all = false;
    checkAllBox();
    return newState;
  }
  return state;
};

export default reducer;
