import Link from "next/link";
import styles from "../styles/404.module.css";

function NotFound() {
  return (
    <div className={styles.error}>
      <Link href="/">
        <img
          className={styles.img}
          src="https://andreyex.ru/wp-content/uploads/2017/03/Nginx.-Perenapravlenie-oshibki-404-na-glavnuyu-stranitsu-v-WordPress.png"
          alt="photo"
        />
      </Link>
    </div>
  );
}

export default NotFound;
