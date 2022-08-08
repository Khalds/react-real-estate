import styles from "./MailForm.module.css";

const MailForm = () => {
  return (
    <div className={styles.main}>
      <div className={styles.empty_container}></div>
      <div className={styles.mail_form_container}>
        <h2>Send us a message today</h2>
        <div className={styles.name_container}>
          <label>Name</label>
          <input placeholder="Name"></input>
        </div>
        <div className={styles.email_container}>
          <label>Email</label>
          <input placeholder="Email"></input>
        </div>
        <div className={styles.message_container}>
          <label>Message</label>
          <textarea placeholder="Message" className=""></textarea>
        </div>
        <button>Send Email</button>
      </div>
      <div className={styles.text_container}>
        <p>CONTACT</p>
        <h1>Get in touch with us to plan your next transaction</h1>
        <p>
          Our experts and developers would love to contribute their expertise
          and insights and help you today. Contact us to help you plan your next
          transaction, either buying or selling a home.
        </p>
        <button>Contact us</button>
      </div>
    </div>
  );
};

export default MailForm;
