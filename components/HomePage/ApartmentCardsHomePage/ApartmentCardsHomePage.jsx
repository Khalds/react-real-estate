import styles from "./ApartmentCardsHomePage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { TbLayoutBoard } from "react-icons/tb";
import {
  BsCameraFill,
  BsCameraVideoFill,
  BsFillShareFill,
  BsGeoAltFill,
} from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { getApartments } from "../../../features/apartmentSlice";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import IconModal from "../../Agent/IconModal/IconModal";
import { ImArrowDown } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import ModalCompanent from "./ModalCompanent";

const ApartmentCardsHomePage = () => {
  const dispatch = useDispatch();
  const apartments = useSelector((state) => state.apartmentReducer.apartments);

  const [limit, setLimit] = useState(6);

  const handleShow = () => {
    setLimit((limit += 6));
  };

  const handleHide = () => {
    if (limit > 0) {
      setLimit(6);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    dispatch(getApartments());
  }, [dispatch]);


  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <p>RECENT PROPERTIES</p>
          <h2>Explore the latest properties available</h2>
        </div>
        <div className={styles.cards_container}>
          {apartments.map((apartment, index) => {
            if (index + 1 <= limit) {
              const city = apartment.location.substring(30, 38);
              const street = apartment.location.substring(38, 55);
              return (
                <>
                  <div className={styles.card} data-aos="fade-left">
                    <div className={styles.tag_wrapper}>
                      <div className={styles.featured_wrapper}>Featured</div>
                      <div className={styles.rentals}>{apartment.status}</div>
                    </div>
                    <Link href={`/property/${apartment._id}`}>
                      <div className={styles.img_container}>
                        <img src={apartment.image[0]} alt="apartment photo" />
                      </div>
                    </Link>
                    <div className={styles.icon_details_wrapper}>
                      <div className={styles.details_wrapper}>
                        <BsGeoAltFill className={styles.goLocation} />
                        <Link href={`/map`}>
                          <b>{city}</b>
                        </Link>
                        <Link href={`/map`}>
                          <b>{street}</b>
                        </Link>
                      </div>
                      <div className={styles.icon_details}>
                        <BsCameraVideoFill className={styles.cameraVideo} />
                        <BsCameraFill className={styles.cameraFill} />
                        <span className={styles.number}>5</span>
                      </div>
                    </div>
                    <div className={styles.info_container}>
                      <h3>{apartment.name} </h3>
                      <h4>{apartment.price} $</h4>
                      <p>{apartment.description.slice(0, 110) + "..."}</p>
                      <div className={styles.icons}>
                        <span>
                          <MdOutlineBedroomParent /> {apartment.bedroom}
                        </span>
                        <span>
                          <BiBath /> {apartment.bathroom}
                        </span>
                        <span>
                          <TbLayoutBoard /> {apartment.size} ft<sup>2</sup>
                        </span>
                      </div>
                    </div>
                    <div className={styles.agentInfo_canteiner}>
                      <div className={styles.agent_photo_name}>
                        <img src={apartment.realtor.image} alt="agent_photo" />
                        <span>{apartment.realtor.name}</span>
                      </div>
                      <div className={styles.agent_icons}>
                        <ModalCompanent />
                        <span>
                          <FaHeart className={styles.passive_heart} />
                        </span>
                        <span>
                          <FiPlus />
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
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
    </>
  );
};

export default ApartmentCardsHomePage;
