import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import { store } from "../app/store";
import { Provider } from "react-redux";
import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <Provider store={store}>
      <Layout>
        {loading ? <LoadingScreen /> : <Component {...pageProps} />}
      </Layout>
    </Provider>
  );

}

export default MyApp;
