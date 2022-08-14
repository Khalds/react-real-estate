import styles from "./buttonContact.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const ButtonContact = ({ phone, scrollToSection, contact }) => {
  return (
    <div className={styles.сontact_wrapper}>
      <button
        onClick={() => scrollToSection(contact)}
        className={styles.button_email}
      >
        <a href="#show_contact">Send Email </a>
      </button>
      <button className={styles.button_call}>
        <div className={styles.call_icon}>
          <a href="tel:(305) 555-4555">
            <FaPhone />
            <span className={styles.call}> Call {phone}</span>
          </a>
        </div>
      </button>
      <button className={styles.button_whatsApp}>
        <div className={styles.whatsApp_icon}>
          <FaWhatsapp />
          <a href="https://api.whatsapp.com/send?phone=(305)%20555-4555&amp;text=Hello%20I'm%20interested%20in%20one%20of%20your%20listings.">
            WhatsApp
          </a>
        </div>
      </button>
    </div>
  );
};

export default ButtonContact;
