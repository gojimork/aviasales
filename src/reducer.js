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

  tickets: [
    {
      price: 24260,
      carrier: 'W6',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-11-07T19:21:46.655Z',
          duration: 554,
          stops: [],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2024-03-02T21:50:38.062Z',
          duration: 841,
          stops: ['DXB'],
        },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const { type } = action;
  const { transfers } = newState;

  if (type === 'loadTickets') {
    newState.tickets = action.ticketsData;
    console.log(newState.tickets);
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
