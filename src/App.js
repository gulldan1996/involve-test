import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store } from "./redux/createStore";
import RouterNav from "./RouterNav";

export const App = () => (
  <HashRouter>
    <Provider store={store}>
      <RouterNav />
    </Provider>
  </HashRouter>
);
