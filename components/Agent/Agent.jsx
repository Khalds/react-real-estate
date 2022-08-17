import styles from "./agent.module.css";
import BackToTopButton from "./BackToTopButton";
import CardApartment from "./CardApartment/CardApartment";
import Contact from "./Contact/Contact";
import InformativeMe from "./InformativeMe/InformativeMe";
import PersonalData from "./PersonalData/PersonalData";
import Profile from "./Profile/Profile";
import Reviews from "./Reviews/Reviews";
import Listings from "./Listings/Listings";
import { useState } from "react";
import { getRealtorById, getRealtors } from "../../features/realtor";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Aos from "aos";
import { getApartments } from "../../features/apartmentSlice";

const Realtor = () => {
  const [limit, setLimit] = useState(12);


  // const contact = useRef(null);
  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  const handleShow = () => {
    setLimit((limit += 2));
  };

  const handleHide = () => {
    if (limit > 0) {
      setLimit(2);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const apartments = useSelector((state) => state.apartmentReducer.apartments);
  const realtors = useSelector((state) => state.realtorReducer.realtors);
  const dispatch = useDispatch();

  const [categoryId, setCategoryId] = useState("");


  const filtered = () => {
    if (categoryId === 1) {
      return (apartments = apartments.filter((i) => i.status === "Rent"));
    } else if (categoryId === 2) {
      return (apartments = apartments.filter((i) => i.status === "Sale"));
    } else {
      apartments;
    }
  };

  filtered();


  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    dispatch(getApartments());
    dispatch(getRealtors());
    dispatch(getRealtorById(id))
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_wrapper}>
        {realtors.map((item) => {
          if (id == item._id) {
            return (
              <>
                {" "}
                <Profile
                  image={item.image}
                  name={item.name}
                  rating={item.rating}

                  phon={item.phoneNumber}
                  email={item.email}
                />
                <Contact
                  exper={item.experience}
                  officeHours={item.officeHours}
                  officeAdress={item.officeAdress}
                  phone={item.phoneNumber}
                />
                <InformativeMe description={item.description} />
                <PersonalData id="personal_data" />
                 
              </>
            );
          }
        })}
      </div>
      <div className={styles.main_card_wrapper}>
        <div className={styles.listings_wrapper}>
          <h3>My Listings</h3>
          <div className={styles.listings}>
            <Listings
              value={categoryId}
              onClickCategory={(i) => setCategoryId(i)}
            />
          </div>
        </div>
        <div className={styles.cards_wrapper}>
          <div className={styles.main}>
            {apartments.map((apartment, index) => {
              if (apartment.realtor._id === id) {
                 {
                  return <CardApartment apartment={apartment} />;
                }
              }
            })}
          </div>
          <div className={styles.button_container}>
            {limit >= apartments.length ? (
              <button onClick={handleHide}>Hide listings</button>
            ) : (
              <button onClick={handleShow}>Load more listings</button>
            )}
          </div>
        </div>
     {realtors.map(realtor => {
    if(realtor._id === id) {
      return (
        <Reviews reviews={realtor.reviews} agent_id={realtor._id} key={realtor._id} />
      )
    }
 })}
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Realtor;
