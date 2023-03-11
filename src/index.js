import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import reducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

const actionSanitizer = (action) =>
  action.type === 'loadTickets' && action.ticketsData ? { ...action, ticketsData: '<<LONG_BLOB>>' } : action;

const enhancer = compose(
  applyMiddleware(reduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      actionSanitizer,
      stateSanitizer: (state) => (state.ticketsData ? { ...state, ticketsData: '<<LONG_BLOB>>' } : state),
    })
);

const store = createStore(reducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
