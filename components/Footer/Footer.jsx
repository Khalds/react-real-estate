import styles from "./Footer.module.css";
import { FaBuilding } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.about_us}>
        <h4>About us</h4>
        <p>
          WpResidence is committed to delivering a high level of expertise,
          customer service, and attention to detail to the marketing and sales
          of luxury real estate, and rental properties.
        </p>
      </div>
      <div className={styles.contact}>
        <h4>Contact</h4>
        <ul>
          <li>
            <FaBuilding />
            <span>10845 Griffith Peak Dr, Las Vegas, NV 89135</span>
          </li>
          <li>
            <FaPhone />
            <span>+1 800-555-6789</span>
          </li>
          <li>
            <AiFillPrinter />
            <span>+1 800-555-6744</span>
          </li>
          <li>
            <BsFillEnvelopeFill />
            <span>office@realestate.com</span>
          </li>
        </ul>
      </div>
      <div className={styles.social_networks}>
        <h4>Our social networks</h4>
        <ul>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTelegram />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
