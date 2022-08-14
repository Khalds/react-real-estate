import styles from "./socialIcons.module.css";
import { GrFacebookOption } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import { GrPinterest } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";

const SocialIcons = () => {
  return (
    <div className={styles.social_icons}>
      <a className={styles.social} href="https://ru-ru.facebook.com" target="_blank" rel="noopener">
        <GrFacebookOption />
      </a>
      <a className={styles.social} href="https://twitter.com " target="_blank" rel="noopener">
        <GrTwitter />
      </a>
      <a className={styles.social} href="https://www.linkedin.com" target="_blank" rel="noopener">
        <ImLinkedin />
      </a>
      <a className={styles.social} href="https://ru.pinterest.com" target="_blank" rel="noopener">
        <GrPinterest />
      </a>
      <a className={styles.social} href="https://www.instagram.com" target="_blank" rel="noopener">
        <GrInstagram />
      </a>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
};

export default SocialIcons;
