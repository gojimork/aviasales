import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = configureStore({
  reducer,
  devTools: true,
  middleware: [thunk],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
