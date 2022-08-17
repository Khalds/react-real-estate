import styles from "./MailForm.module.css";
import Link from "next/link";
import React, { useEffect, Component, useRef } from "react";

import emailjs from "@emailjs/browser";

const MailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ltrwn16",
        "template_uigmfng",
        form.current,
        "N9-yjO28VSgymSKue"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={styles.main}>
      <div className={styles.empty_container}></div>
      <div className={styles.mail_form_container}>
        <h2>Send us a message today</h2>
        <form className={styles.name_container} ref={form} onSubmit={sendEmail}>
          <label className={styles.textInput}>Name</label>
          <input type="text" name="user_name" />

          <div className={styles.email_container}>
            <label className={styles.textInput}>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className={styles.message_container}>
            <label className={styles.textInput}>Message</label>
            <textarea className={styles.form} name="message" />
          </div>
          <div>
            <button type="submit" value="Send">
              Send Email
            </button>
          </div>
        </form>
      </div>
      <div className={styles.text_container}>
        <p>CONTACT</p>
        <h1>Get in touch with us to plan your next transaction</h1>
        <p>
          Our experts and developers would love to contribute their expertise
          and insights and help you today. Contact us to help you plan your next
          transaction, either buying or selling a home.
        </p>
        <Link href={"/contact"}>
          <button>Contact us</button>
        </Link>
      </div>
    </div>
  );
};

export default MailForm;

{
  /* <div className={styles.sentMail}>
  <div className={styles.email}>
    <div className={styles.center}>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <label className={styles.textInput}>Name</label>
        <input type="text" name="user_name" />
        <br />
        <label className={styles.textInput}>Email</label>
        <input type="email" name="user_email" />
        <br />

        <label className={styles.textInput}>Message</label>
        <textarea className={styles.form} name="message" />
        <input className={styles.button} type="submit" value="Send" />
      </form>
    </div>
  </div>
</div>; */
}
