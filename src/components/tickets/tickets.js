import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import s7Logo from '../../assets/s7-logo.svg';
import classes from './tickets.module.scss';
const Tickets = ({ tickets, loadTickets }) => {
  useEffect(() => {
    loadTickets();
  }, [loadTickets]);
  return (
    <React.Fragment>
      <ul className={classes['tickets-list']}>
        <li className={classes.ticket}>
          <div className={classes['ticket__header']}>
            <span className={classes['ticket__price']}>13 400</span>
            <div className={classes['ticket__logo']}>
              <img src={s7Logo} alt="logo" />
            </div>
          </div>
          <div className={classes['ticket__flight']}>
            <div className={classes['info-list']}>
              <div className={classes.info}>
                <span className={classes['info__title']}>MOW – HKT</span>
                <span className={classes['info__value']}>10:45 – 08:00</span>
              </div>
              <div className={classes.info}>
                <span className={classes['info__title']}>MOW – HKT</span>
                <span className={classes['info__value']}>11:20 – 00:50</span>
              </div>
            </div>
            <div className={classes['info-list']}>
              <div className={classes.info}>
                <span className={classes['info__title']}>В пути</span>
                <span className={classes['info__value']}>21ч 15м</span>
              </div>
              <div className={classes.info}>
                <span className={classes['info__title']}>В пути</span>
                <span className={classes['info__value']}>13ч 30м</span>
              </div>
            </div>
            <div className={classes['info-list']}>
              <div className={classes.info}>
                <span className={classes['info__title']}>2 пересадки</span>
                <span className={classes['info__value']}>HKG, JNB</span>
              </div>
              <div className={classes.info}>
                <span className={classes['info__title']}>1 пересадка</span>
                <span className={classes['info__value']}>HKG</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <button className={classes['more-tickets']}>Показать еще 5 билетов!</button>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
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
      dispatch({ type: 'loadTickets', ticketsData: bodyTickets });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
