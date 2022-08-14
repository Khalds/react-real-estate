import ButtonContact from "../ButtonContact/ButtonContact";
import styles from "./contact.module.css";

const Contact = ({
  exper,
  officeHours,
  officeAdress,
  phone,
  scrollToSection,
  contact,
}) => {
  return (
    <div className={styles.сontact_wrapper}>
      <ButtonContact
        contact={contact}
        scrollToSection={scrollToSection}
        phone={phone}
      />
      <div className={styles.сontact_text}>
        <div className={styles.text_block}>
          <span className={styles.custom_label}>Experience </span>
          <span className={styles.custom_value}>{exper} </span>
        </div>
        <div className={styles.text_block}>
          <span className={styles.custom_label}>Realtor Awards </span>
          <span className={styles.custom_value}>
            Best Realtor in Madrid from 2006-2021{" "}
          </span>
        </div>
        <div className={styles.text_block}>
          <span className={styles.custom_label}>Office Hours </span>
          <span className={styles.custom_value}>{officeHours} </span>
        </div>
        <div className={styles.text_block}>
          <span className={styles.custom_label}>MLS Number </span>
          <span className={styles.custom_value}>
            12345 MYID - Until 12/12/2025{" "}
          </span>
        </div>
        <div className={styles.text_block}>
          <span className={styles.custom_label}>Languages Spoken </span>
          <span className={styles.custom_value}>
            Russian, Chechen, English{" "}
          </span>
        </div>
        <div className={styles.text_block}>
          <span className={styles.custom_label}>Office Address </span>
          <span className={styles.custom_value}>{officeAdress} </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
