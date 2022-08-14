import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { GrFacebookOption, GrPinterest, GrTwitter } from "react-icons/gr";
import styles from "./iconModal.module.css"

const IconModal = () => {
    return (
        <>
            <a className={styles.social} href="https://ru-ru.facebook.com" target="_blank" rel="noopener">
                <GrFacebookOption />
            </a>
            <a className={styles.social} href="https://twitter.com " target="_blank" rel="noopener">
                <GrTwitter />
            </a>
            <a className={styles.social} href="https://ru.pinterest.com" target="_blank" rel="noopener">
                <GrPinterest />
            </a>
            <a className={styles.social} href="https://www.whatsapp.com" target="_blank" rel="noopener">
                <FaWhatsapp />
            </a>
            <a className={styles.social} href="https://mail.ru" target="_blank" rel="noopener">
                <AiOutlineMail />
            </a> 
        </>
    );
};

export default IconModal;