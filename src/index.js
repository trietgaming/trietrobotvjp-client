import { StrictMode as ReactStrictMode } from "react";
import { render as ReactDOMRender } from "react-dom";
import { Provider } from "react-redux";
import App from "./App/App";
import store from './App/store';

ReactDOMRender(
  <ReactStrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </ReactStrictMode>,
  document.getElementById("root")
);
