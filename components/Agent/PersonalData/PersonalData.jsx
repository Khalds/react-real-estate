import styles from "./personalData.module.css";
import emailjs from "@emailjs/browser";
import React, { useEffect, Component, useRef } from "react";

const PersonalData = () => {
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
    <div className={styles.personal_data_wrapper}>
      <h4>Contact Me</h4>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.personal_contact_wrapper}>
          <input
            name="user_name"
            type="text"
            placeholder="Your Name"
            aria-required="true"
          />
          <input
            name="user_email"
            type="text"
            aria-required="true"
            placeholder="Your Email"
          />
          <input type="text" name="phone" placeholder="Your Phone" />
        </div>
        <textarea
          name="message"
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
          <button className={styles.agent_submit} type="submit" value="Send">
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
