import styles from "./agentListIcon.module.css";
import { GrFacebookOption } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import { GrPinterest } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";

const AgentListIcon = ({ phon, email }) => {
  return (
    <div className={styles.icon_wrapper}>
      <div className={styles.one_icon_wrapper}>
        <div className={styles.social_wrapper}>
          <a className={styles.social} href="https://ru-ru.facebook.com" target="_blank" rel="noopener">
            <GrFacebookOption />
          </a>
        </div>
        <div className={styles.social_wrapper}>
          <a className={styles.social} href="https://twitter.com " target="_blank" rel="noopener">
            <GrTwitter />
          </a>
        </div>
        <div className={styles.social_wrapper}>
          <a className={styles.social} href="https://www.linkedin.com" target="_blank" rel="noopener">
            <ImLinkedin />
          </a>
        </div>
        <div className={styles.social_wrapper}>
          <a className={styles.social} href="https://ru.pinterest.com" target="_blank" rel="noopener">
            <GrPinterest />
          </a>
        </div>
        <div className={styles.social_wrapper}>
          <a className={styles.social} href="https://www.instagram.com" target="_blank" rel="noopener">
            <GrInstagram />
          </a>
        </div>
      </div>

      <div className={styles.two_icon_wrapper}>
        <div className={styles.social_phone_wrapper}>
          <a className={styles.social} href={`tel:${phon}`} target="_blank" rel="noopener">
            <FaPhone />
          </a>
        </div>
        <div className={styles.social_wrapper}>
          <a className={styles.social} href="https://mail.ru" target="_blank" rel="noopener">
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentListIcon;
