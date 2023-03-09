import React, { useEffect } from 'react';
import { addMinutes, format } from 'date-fns';
import { connect } from 'react-redux';
import s7Logo from '../../assets/s7-logo.svg';
import classes from './tickets.module.scss';
const Tickets = ({ ticketsData, loadTickets }) => {
  console.log(ticketsData);
  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  const ticketList = ticketsData.map(({ id, price, segments }) => {
    const transplants = (stops) => {
      const count = stops.length;
      return count === 0 ? 'Без пересадок' : count === 1 ? '1 пересадка' : `${count} пересадки`;
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
    return (
      <li key={id} className={classes.ticket}>
        <div className={classes['ticket__header']}>
          <span className={classes['ticket__price']}>{price}</span>
          <div className={classes['ticket__logo']}>
            <img src={s7Logo} alt="logo" />
          </div>
        </div>
        <div className={classes['ticket__flight']}>
          <div className={classes['info-list']}>
            <div className={classes.info}>
              <span className={classes['info__title']}>{`${segments[0].origin} - ${segments[0].destination}`}</span>
              <span className={classes['info__value']}>{dateTransform(segments[0].date, segments[0].duration)}</span>
            </div>
            <div className={classes.info}>
              <span className={classes['info__title']}>{`${segments[1].origin} - ${segments[1].destination}`}</span>
              <span className={classes['info__value']}>{dateTransform(segments[1].date, segments[1].duration)}</span>
            </div>
          </div>
          <div className={classes['info-list']}>
            <div className={classes.info}>
              <span className={classes['info__title']}>В пути</span>
              <span className={classes['info__value']}>{durationTransform(segments[0].duration)}</span>
            </div>
            <div className={classes.info}>
              <span className={classes['info__title']}>В пути</span>
              <span className={classes['info__value']}>{durationTransform(segments[1].duration)}</span>
            </div>
          </div>
          <div className={classes['info-list']}>
            <div className={classes.info}>
              <span className={classes['info__title']}>{transplants(segments[0].stops)}</span>
              <span className={classes['info__value']}>{segments[0].stops.join(', ')}</span>
            </div>
            <div className={classes.info}>
              <span className={classes['info__title']}>{transplants(segments[0].stops)}</span>
              <span className={classes['info__value']}>{segments[0].stops.join(', ')}</span>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <React.Fragment>
      <ul className={classes['tickets-list']}>{ticketList}</ul>
      <button className={classes['more-tickets']}>Показать еще 5 билетов!</button>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ticketsData: state.ticketsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTickets: async () => {
      const responseId = await fetch('https://aviasales-test-api.kata.academy/search');
      const bodyId = await responseId.json();
      const searchId = bodyId.searchId;
      const responseTickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
      const bodyTickets = await responseTickets.json();
      const ticketsArr = bodyTickets.tickets;
      dispatch({ type: 'loadTickets', ticketsData: ticketsArr });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
