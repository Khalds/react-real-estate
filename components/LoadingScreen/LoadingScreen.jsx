import styles from "./LoadingScreen.module.css";
import preloader from "../../images/preloader.gif";

const LoadingScreen = () => {
  return (
    <div className={styles.preloader_container}>
      <img src={preloader.src} />
    </div>
  );
};

export default LoadingScreen;
