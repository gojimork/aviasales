import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './tickets.module.scss';
const Tickets = ({ ticketsData, loadTickets }) => {
  console.log(ticketsData);
  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  const ticketList = ticketsData.map(
    ({
      id,
      priceRender,
      logoUrl,
      flight,
      flightBack,
      time,
      timeBack,
      duration,
      durationBack,
      stopsCountRender,
      stopsList,
      stopsCountRenderBack,
      stopsListBack,
    }) => {
      return (
        <li key={id} className={classes.ticket}>
          <div className={classes['ticket__header']}>
            <span className={classes['ticket__price']}>{priceRender}</span>
            <div className={classes['ticket__logo']}>
              <img src={logoUrl} alt="logo" />
            </div>
          </div>
          <div className={classes['ticket__flight']}>
            <div className={classes['info-list']}>
              <div className={classes.info}>
                <span className={classes['info__title']}>{flight}</span>
                <span className={classes['info__value']}>{time}</span>
              </div>
              <div className={classes.info}>
                <span className={classes['info__title']}>{flightBack}</span>
                <span className={classes['info__value']}>{timeBack}</span>
              </div>
            </div>
            <div className={classes['info-list']}>
              <div className={classes.info}>
                <span className={classes['info__title']}>В пути</span>
                <span className={classes['info__value']}>{duration}</span>
              </div>
              <div className={classes.info}>
                <span className={classes['info__title']}>В пути</span>
                <span className={classes['info__value']}>{durationBack}</span>
              </div>
            </div>
            <div className={classes['info-list']}>
              <div className={classes.info}>
                <span className={classes['info__title']}>{stopsCountRender}</span>
                <span className={classes['info__value']}>{stopsList}</span>
              </div>
              <div className={classes.info}>
                <span className={classes['info__title']}>{stopsCountRenderBack}</span>
                <span className={classes['info__value']}>{stopsListBack}</span>
              </div>
            </div>
          </div>
        </li>
      );
    }
  );

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
