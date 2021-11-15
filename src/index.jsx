import { StrictMode as ReactStrictMode } from "react";
import { render as ReactDOMRender } from "react-dom";
import { Provider } from "react-redux";
import AppSnackbarProvider from "./App/AppSnackbarProvider";
import App from "./App/App";
import store from "@appReduxStore";

ReactDOMRender(
  <ReactStrictMode>
    <Provider store={store}>
      <AppSnackbarProvider>
        <App />
      </AppSnackbarProvider>
    </Provider>
  </ReactStrictMode>,
  document.getElementById("root")
);
