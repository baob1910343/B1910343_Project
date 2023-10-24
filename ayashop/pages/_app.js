import React from "react";
// import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "../store";
let persistor = persistStore(store);
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />{" "}
      </PersistGate>
    </Provider>
  );
}
export default MyApp;
