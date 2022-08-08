import styles from "./notWorkingIcon.module.css";

const NotWorkingIcon = () => {
    return (
        <div>
            <div className={styles.detal}>
              <div className={styles.detal_icon}>
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <a href="tel:(305) 555-4555">(305) 555-4555</a>
            </div>
            <div className={styles.detal}>
              <div className={styles.detal_icon}>
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <a href="mailto:michael@website.net">michael@website.net</a>
            </div>
            <div className={styles.detal}>
              <div className={styles.detal_icon}>
                <ion-icon name="logo-skype"></ion-icon>
              </div>
              <div className={styles.detal_icon_skype}>michaela.roja</div>
            </div>
            <div>
              <div className={styles.detal}>
                <div className={styles.detal_icon}>
                  <ion-icon name="desktop-outline"></ion-icon>
                </div>
                <a href="http://website.net" target="_blank" rel="noreferrer">
                  website.net
                </a>
              </div>
            </div>
        </div>
    );
};

export default NotWorkingIcon;