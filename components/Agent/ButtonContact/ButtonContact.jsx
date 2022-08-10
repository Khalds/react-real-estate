import styles from "./buttonContact.module.css";

const ButtonContact = () => {
  return (
    <div className={styles.сontact_wrapper}>
      <button className={styles.button_email}>
        <a href="#show_contact">Send Email </a>
      </button>
      <button className={styles.button_call}>
        <div className={styles.call_icon}>
        <a href="tel:(305) 555-4555">
          <ion-icon name="call-outline"></ion-icon>
          <span className={styles.call}> Call (305) 555-4555</span>
        </a>
        </div>
      </button>
      <button className={styles.button_whatsApp}>
        <div className={styles.whatsApp_icon}>
          <ion-icon name="logo-whatsapp"></ion-icon>
          <a href="https://api.whatsapp.com/send?phone=(305)%20555-4555&amp;text=Hello%20I'm%20interested%20in%20one%20of%20your%20listings.">
            WhatsApp
          </a>
        </div>
      </button>
    </div>
  );
};

export default ButtonContact;
