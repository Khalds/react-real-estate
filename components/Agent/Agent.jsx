import styles from "./agent.module.css";
import BackToTopButton from "./BackToTopButton";
import CardApartment from "./CardApartment/CardApartment";
import Contact from "./Contact/Contact";
import InformativeMe from "./InformativeMe/InformativeMe";
import PersonalData from "./PersonalData/PersonalData";
import Profile from "./Profile/Profile";
import Reviews from "./Reviews/Reviews";
import Listings from "./Listings/Listings"
import { useState } from "react";


const Realtor = () => {
  const realtors = useSelector((state) => state.realtor)
  const [categoryId, setCategoryId] = useState(0);
  // const dispatch = useDispatch();
  // const apartments = useSelector((state) => state.apartmentReducer.apartments);

  // useEffect(() => {
  //   dispatch(getApartments())
  // },[dispatch])
  
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
            <Listings />
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
