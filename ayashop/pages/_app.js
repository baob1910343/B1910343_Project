import React from "react";
// import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "../store";
import Head from "next/head";

let persistor = persistStore(store);
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AyaShop</title>
        <meta
          name="description"
          content="AyaShop cửa hàng cá cảnh mua sắm trực tuyến đáp ứng mọi nhu cầu của bạn."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />{" "}
        </PersistGate>
      </Provider>
    </>
  );
}
export default MyApp;
