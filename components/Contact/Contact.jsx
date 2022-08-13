import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Contact.module.css";
import { BsFacebook } from "react-icons/Bs";
import { IoLogoWhatsapp } from "react-icons/Io";
import { AiFillInstagram } from "react-icons/Ai";
import { AiFillGooglePlusCircle } from "react-icons/Ai";
import { FaRedditAlien } from "react-icons/Fa";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoAndHeader}>
          <div className={styles.header}>Real Estate Agency</div>
          <img
            src="https://lasvegas.wpresidence.net/wp-content/uploads/2022/03/las-vegas.png"
            alt="icon"
            className={styles.logo}
          />
        </div>

        <div className={styles.adress}>
          10845 Griffin Peter Dr, Quahog, NV 89135
        </div>
        <div className={styles.icons}>
          <BsFacebook className={styles.social} />
          <IoLogoWhatsapp className={styles.social} />
          <AiFillInstagram className={styles.social} />
          <AiFillGooglePlusCircle className={styles.social} />
          <FaRedditAlien className={styles.social} />
        </div>

        <div className={styles.phone}>
          <p>Phone:8-(800)-555-35-35</p>
          <p>Mobie:8-(305)-555-45-55</p>
          <p>Email:realestate@inc.com</p>
          <p>Skype:realestate</p>
        </div>
        <div className={styles.information}>
          Whether you’re looking for property for sale in New York area or
          property for rent, WP Residence makes searching easy. Use our unique
          geolocation mapping feature to root-out your ideal villa, townhouse or
          apartment and contact the owners direct. We will help you find your
          dream house in just a few seconds.We offer our clients a wealth of
          knowledge regarding all aspects of purchasing or selling a home.
          Whether it is helping you search for your dream home, discussing new
          New York real estate developments, or assisting with the sale of your
          property, we would love the opportunity to help. Please feel free to
          contact us with any questions!
        </div>
        <p></p>
        <img
          src="https://beijing.wpresidence.net/wp-content/uploads/2021/10/team2.jpg"
          className={styles.image}
        />
      </div>
      <div className={styles.email}>
        <h1>Contact Us</h1>
        <div className={styles.center}>
          <form className={styles.form}>
            <input
              className={styles.inputMail}
              maxlength="20"
              placeholder="Your Name"
            />
            <br />
            <input
              className={styles.inputMail}
              maxlength="20"
              placeholder="Your E-mail"
            />
            <br />

            <input
              className={styles.inputText}
              placeholder="Enter Text"
              required
            />

            <br />

            <button className={styles.button}>Sent Mail</button>
          </form>
        </div>
      </div>
      <div className={styles.backgraundMap}>
        <h3>
          <p className={styles.blackText}>How To Find Us</p>
        </h3>
        <p>8-(800)-555-35-35</p>
        <p>neKidala@mail.com</p>
        <p>10845 Griffin Peter Dr, Las Vegas, NV 89135</p>
        <p>Opening Hours</p>
        <p>Monday-Friday: 10:00 - 18:00</p>
        <p>Saturday: 10:00 - 14:00</p>
        <p>Sunday: Closed</p>
      </div>
      <iframe
        className={styles.map}
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=k&z=19&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};
export default Contact;
