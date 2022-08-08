import ButtonContact from "../ButtonContact/ButtonContact";
import styles from "./contact.module.css"

const Contact = () => {
    return (
        <div className={styles.сontact_wrapper}>
          <ButtonContact />
          <div className={styles.сontact_text}>
            <div className={styles.text_block}>
              <span className={styles.custom_label}>Experience </span>
              <span className={styles.custom_value}>
                18 years as Expert Realtor at Madrid Realty{" "}
              </span>
            </div>
            <div className={styles.text_block}>
              <span className={styles.custom_label}>Realtor Awards </span>
              <span className={styles.custom_value}>
                Best Realtor in Madrid from 2000-2018{" "}
              </span>
            </div>
            <div className={styles.text_block}>
              <span className={styles.custom_label}>Office Hours </span>
              <span className={styles.custom_value}>
                9 AM - 5 PM, Monday - Saturday{" "}
              </span>
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
                French, Spanish, English{" "}
              </span>
            </div>
            <div className={styles.text_block}>
              <span className={styles.custom_label}>Office Address </span>
              <span className={styles.custom_value}>
                Calle de Toledo, 28005 Madrid, Spain{" "}
              </span>
            </div>
          </div>
        </div>
    );
};

export default Contact;