import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        {router.route === "/map" ? null : <Footer />}
      </div>
    </div>
  );
};

export default Layout;
