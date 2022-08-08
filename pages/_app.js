import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import { store } from "../app/store";
import { Provider } from "react-redux";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );

}

export default MyApp;
