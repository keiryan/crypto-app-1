import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./services/reducer/rootReducer";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
reportWebVitals();
