import "./App.scss";
import logo from "../src/assets/logo.svg";
import s7Logo from "../src/assets/s7-logo.svg";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
        <div className="main">
          <div className="sidebar">
            <h3>Количество пересадок</h3>
            <form>
              <label>
                <input type="checkbox" className="input visuable-hidden" />
                <span className="checker"></span>
                Все
              </label>
              <label>
                <input type="checkbox" className="input visuable-hidden" />
                <span className="checker"></span>
                Без пересадок
              </label>
              <label>
                <input type="checkbox" className="input visuable-hidden" />
                <span className="checker"></span>1 пересадка
              </label>
              <label>
                <input type="checkbox" className="input visuable-hidden" />
                <span className="checker"></span>2 пересадки
              </label>
              <label>
                <input type="checkbox" className="input visuable-hidden" />
                <span className="checker"></span>3 пересадки
              </label>
            </form>
          </div>
          <ul className="filter-list">
            <li>
              <button className="filter-item">Самый дешевый</button>
            </li>
            <li>
              <button className="filter-item">Самый быстрый</button>
            </li>
            <li>
              <button className="filter-item">Оптимальный</button>
            </li>
          </ul>
          <ul className="tickets-list">
            <li className="ticket">
              <div className="ticket__header">
                <span className="ticket__price">13 400</span>
                <div className="ticket__logo">
                  <img src={s7Logo} alt="logo" />
                </div>
              </div>
              <div className="ticket__flight">
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">MOW – HKT</span>
                    <span className="info__value">10:45 – 08:00</span>
                  </div>
                  <div className="info">
                    <span className="info__title">MOW – HKT</span>
                    <span className="info__value">11:20 – 00:50</span>
                  </div>
                </div>
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">В пути</span>
                    <span className="info__value">21ч 15м</span>
                  </div>
                  <div className="info">
                    <span className="info__title">В пути</span>
                    <span className="info__value">13ч 30м</span>
                  </div>
                </div>
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">2 пересадки</span>
                    <span className="info__value">HKG, JNB</span>
                  </div>
                  <div className="info">
                    <span className="info__title">1 пересадка</span>
                    <span className="info__value">HKG</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="ticket">
              <div className="ticket__header">
                <span className="ticket__price">13 400</span>
                <div className="ticket__logo">
                  <img src={s7Logo} alt="logo" />
                </div>
              </div>
              <div className="ticket__flight">
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">MOW – HKT</span>
                    <span className="info__value">10:45 – 08:00</span>
                  </div>
                  <div className="info">
                    <span className="info__title">MOW – HKT</span>
                    <span className="info__value">11:20 – 00:50</span>
                  </div>
                </div>
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">В пути</span>
                    <span className="info__value">21ч 15м</span>
                  </div>
                  <div className="info">
                    <span className="info__title">В пути</span>
                    <span className="info__value">13ч 30м</span>
                  </div>
                </div>
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">2 пересадки</span>
                    <span className="info__value">HKG, JNB</span>
                  </div>
                  <div className="info">
                    <span className="info__title">1 пересадка</span>
                    <span className="info__value">HKG</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="ticket">
              <div className="ticket__header">
                <span className="ticket__price">13 400</span>
                <div className="ticket__logo">
                  <img src={s7Logo} alt="logo" />
                </div>
              </div>
              <div className="ticket__flight">
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">MOW – HKT</span>
                    <span className="info__value">10:45 – 08:00</span>
                  </div>
                  <div className="info">
                    <span className="info__title">MOW – HKT</span>
                    <span className="info__value">11:20 – 00:50</span>
                  </div>
                </div>
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">В пути</span>
                    <span className="info__value">21ч 15м</span>
                  </div>
                  <div className="info">
                    <span className="info__title">В пути</span>
                    <span className="info__value">13ч 30м</span>
                  </div>
                </div>
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">2 пересадки</span>
                    <span className="info__value">HKG, JNB</span>
                  </div>
                  <div className="info">
                    <span className="info__title">1 пересадка</span>
                    <span className="info__value">HKG</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="ticket">
              <div className="ticket__header">
                <span className="ticket__price">13 400</span>
                <div className="ticket__logo">
                  <img src={s7Logo} alt="logo" />
                </div>
              </div>
              <div className="ticket__flight">
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">MOW – HKT</span>
                    <span className="info__value">10:45 – 08:00</span>
                  </div>
                  <div className="info">
                    <span className="info__title">MOW – HKT</span>
                    <span className="info__value">11:20 – 00:50</span>
                  </div>
                </div>
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">В пути</span>
                    <span className="info__value">21ч 15м</span>
                  </div>
                  <div className="info">
                    <span className="info__title">В пути</span>
                    <span className="info__value">13ч 30м</span>
                  </div>
                </div>
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">2 пересадки</span>
                    <span className="info__value">HKG, JNB</span>
                  </div>
                  <div className="info">
                    <span className="info__title">1 пересадка</span>
                    <span className="info__value">HKG</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="ticket">
              <div className="ticket__header">
                <span className="ticket__price">13 400</span>
                <div className="ticket__logo">
                  <img src={s7Logo} alt="logo" />
                </div>
              </div>
              <div className="ticket__flight">
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">MOW – HKT</span>
                    <span className="info__value">10:45 – 08:00</span>
                  </div>
                  <div className="info">
                    <span className="info__title">MOW – HKT</span>
                    <span className="info__value">11:20 – 00:50</span>
                  </div>
                </div>
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">В пути</span>
                    <span className="info__value">21ч 15м</span>
                  </div>
                  <div className="info">
                    <span className="info__title">В пути</span>
                    <span className="info__value">13ч 30м</span>
                  </div>
                </div>
                <div className="info-list">
                  <div className="info">
                    <span className="info__title">2 пересадки</span>
                    <span className="info__value">HKG, JNB</span>
                  </div>
                  <div className="info">
                    <span className="info__title">1 пересадка</span>
                    <span className="info__value">HKG</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <button className="more-tickets">Показать еще 5 билетов!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
