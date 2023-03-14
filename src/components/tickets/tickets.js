import React, { useEffect } from "react";
import { connect } from "react-redux";
import classes from "./tickets.module.scss";
import { loadTickets } from "../../actions";
import { Spin, Alert } from "antd";

const Tickets = ({
  renderTickets,
  loadTickets,
  loader,
  onMoreTicketseClick,
  emptyList,
}) => {
  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  const ticketList = renderTickets.map(
    ({
      id,
      priceRender,
      logoUrl,
      flight,
      flightBack,
      time,
      timeBack,
      durationRender,
      durationRenderBack,
      stopsCountRender,
      stopsList,
      stopsCountRenderBack,
      stopsListBack,
    }) => {
      return (
        <li key={id} className={classes.ticket}>
          <div className={classes["ticket__header"]}>
            <span className={classes["ticket__price"]}>{priceRender}</span>
            <div className={classes["ticket__logo"]}>
              <img src={logoUrl} alt="logo" />
            </div>
          </div>
          <div className={classes["ticket__flight"]}>
            <div className={classes["info-list"]}>
              <div className={classes.info}>
                <span className={classes["info__title"]}>{flight}</span>
                <span className={classes["info__value"]}>{time}</span>
              </div>
              <div className={classes.info}>
                <span className={classes["info__title"]}>{flightBack}</span>
                <span className={classes["info__value"]}>{timeBack}</span>
              </div>
            </div>
            <div className={classes["info-list"]}>
              <div className={classes.info}>
                <span className={classes["info__title"]}>В пути</span>
                <span className={classes["info__value"]}>{durationRender}</span>
              </div>
              <div className={classes.info}>
                <span className={classes["info__title"]}>В пути</span>
                <span className={classes["info__value"]}>
                  {durationRenderBack}
                </span>
              </div>
            </div>
            <div className={classes["info-list"]}>
              <div className={classes.info}>
                <span className={classes["info__title"]}>
                  {stopsCountRender}
                </span>
                <span className={classes["info__value"]}>{stopsList}</span>
              </div>
              <div className={classes.info}>
                <span className={classes["info__title"]}>
                  {stopsCountRenderBack}
                </span>
                <span className={classes["info__value"]}>{stopsListBack}</span>
              </div>
            </div>
          </div>
        </li>
      );
    }
  );
  const btn = renderTickets.length ? (
    <button onClick={onMoreTicketseClick} className={classes["more-tickets"]}>
      Показать еще 5 билетов!
    </button>
  ) : null;
  const alert = emptyList ? (
    <Alert
      message="Рейсов, подходящих под заданные фильтры, не найдено"
      type="info"
      showIcon
    />
  ) : null;

  return (
    <React.Fragment>
      <Spin spinning={loader} />
      {alert}
      <ul className={classes["tickets-list"]}>{ticketList}</ul>
      {btn}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    renderTickets: state.renderTickets,
    loader: state.loader,
    emptyList: state.emptyList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTickets: loadTickets(dispatch),
    onMoreTicketseClick: () => dispatch({ type: "SHOW_MORE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
