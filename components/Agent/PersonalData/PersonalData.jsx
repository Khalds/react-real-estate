import styles from "./personalData.module.css";

const PersonalData = () => {
  return (
    <div className={styles.personal_data_wrapper}>
      <h4>Contact Me</h4>
      <div className={styles.personal_contact_wrapper}>
        <input
          name="contact_name"
          type="text"
          placeholder="Your Name"
          aria-required="true"
        />
        <input
          type="text"
          name="email"
          aria-required="true"
          placeholder="Your Email"
        />
        <input type="text" name="phone" placeholder="Your Phone" />
      </div>
      <textarea
        name="comment"
        className={styles.agent_comment}
        cols="45"
        rows="8"
        aria-required="true"
      ></textarea>
      <div className={styles.consent_wrapper}>
        <label className={styles.agreement} for="checkbox">
          <input type="checkbox" role="checkbox" aria-checked="false" />
        </label>
        <label className={styles.label}>I consent to the GDPR Terms</label>
      </div>
      <div>
        <button className={styles.agent_submit}>Send Email</button>
      </div>
    </div>
  );
};

export default PersonalData;
