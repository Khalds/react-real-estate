import styles from "./agent.module.css";
import BackToTopButton from "./BackToTopButton";
import CardApartment from "./CardApartment/CardApartment";
import Contact from "./Contact/Contact";
import InformativeMe from "./InformativeMe/InformativeMe";
import PersonalData from "./PersonalData/PersonalData";
import Profile from "./Profile/Profile";
import Reviews from "./Reviews/Reviews";

const Realtor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main_wrapper}>
        <Profile />
        <Contact />
        <InformativeMe />
        <PersonalData />
      </div>
      <div className={styles.main_card_wrapper}>
        <div className={styles.listings_wrapper}>
          <h3>My Listings</h3>
          <div className={styles.listings}>
            <div className={styles.term_bar_item_active}>All (4)</div>
            <div className={styles.term_bar_item}>Duplexes (1)</div>
            <div className={styles.term_bar_item}>Houses (1)</div>
            <div className={styles.term_bar_item}>Villas (2)</div>
          </div>
        </div>
        <div className={styles.cards_wrapper}>
          <CardApartment />
        </div>
        <Reviews />
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Realtor;
