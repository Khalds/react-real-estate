import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "../../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
