import { render } from "react-dom";
import { Provider } from "react-redux";
import AppSnackbarProvider from "./App/AppSnackbarProvider";
import App from "./App/App";
import store from "./App/store";

render(
  <Provider store={store}>
    <AppSnackbarProvider>
      <App />
    </AppSnackbarProvider>
  </Provider>,
  document.getElementById("root") || document.body
);
