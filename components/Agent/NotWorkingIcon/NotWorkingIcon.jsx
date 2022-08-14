import styles from "./notWorkingIcon.module.css";
import { FaPhone } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { FiMonitor } from "react-icons/fi"
import { FaSkype } from "react-icons/fa"

const NotWorkingIcon = ({phon, email}) => {
    return (
        <div>
            <div className={styles.detal}>
              <div className={styles.detal_icon}>
                <FaPhone />
              </div>
              <a href={`tel:${phon}`}>{phon}</a>
            </div>
            <div className={styles.detal}>
              <div className={styles.detal_icon}>
                <AiOutlineMail />
              </div>
              <a href="mailto:michael@website.net">{email}</a>
            </div>
            <div className={styles.detal}>
              <div className={styles.detal_icon}>
                <FiMonitor />
              </div>
              <a href="http://website.net" target="_blank" rel="noreferrer">
                  website.net
              </a>
            </div>
            <div>
              <div className={styles.detal}>
                <div className={styles.detal_icon}>
                  <FaSkype />
                </div>
                <div className={styles.detal_icon_skype}>wpr.sky</div>
              </div>
            </div>
        </div>
    );
};

export default NotWorkingIcon;