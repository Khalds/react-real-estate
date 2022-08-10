import styles from "./socialIcons.module.css";

const SocialIcons = () => {
  return (
    <div className={styles.social_icons}>
      <a className={styles.social} href="#" target="_blank" rel="noopener">
        <ion-icon name="logo-facebook"></ion-icon>
      </a>
      <a className={styles.social} href="#" target="_blank" rel="noopener">
        <ion-icon name="logo-twitter"></ion-icon>
      </a>
      <a className={styles.social} href="#" target="_blank" rel="noopener">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>
      <a className={styles.social} href="#" target="_blank" rel="noopener">
        <ion-icon name="logo-pinterest"></ion-icon>
      </a>
      <a className={styles.social} href="#" target="_blank" rel="noopener">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default SocialIcons;
