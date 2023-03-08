import React from 'react';
import s7Logo from '../../assets/s7-logo.svg';
import classes from './tickets.module.scss';
const Tickets = () => {
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

export default Tickets;
