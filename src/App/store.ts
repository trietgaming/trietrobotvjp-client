import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  //eslint-disable-next-line
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
const currentState = store.getState();
export type RootStateType = typeof currentState;
