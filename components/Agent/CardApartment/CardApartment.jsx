import styles from "./cardApartment.module.css";
import { BsGeoAltFill } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsCameraFill } from "react-icons/bs";
import { BiBath } from "react-icons/bi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";


const CardApartment = () => {
  return (
    <div className={styles.listing_wrapper}>
      <div className={styles.wrapper}>

        
        <div className={styles.image_wrapper}>
          <div className={styles.tag_wrapper}>
            <div className={styles.featured_wrapper}>Featured</div>
            <div className={styles.rentals}>Rentals</div>
          </div>

          <div className={styles.photo}>
            <img
              className={styles.photo_img}
              src="https://lasvegas.wpresidence.net/wp-content/uploads/2021/09/interior-4-525x328.jpg"
              alt=""
            />
          </div>
          
          <div className={styles.icon_details_wrapper}>
            <div className={styles.details_wrapper}>
              <BsGeoAltFill className={styles.goLocation}/>
              <b>Winchester</b>
              <b>Las Vegas</b>
            </div>
            <div className={styles.icon_details}>
            <BsCameraVideoFill className={styles.cameraVideo} />
              <BsCameraFill className={styles.cameraFill} />
              <span className={styles.number}>5</span>
            </div>
          </div>
        </div>




        <div className={styles.main_content_wrapper}>
          <h4>Townhouse for Rent</h4>
          <div className={styles.listing_unit_price_wrapper}>
            100 $ <span className={styles.price_label}>/ sq. ft.</span>
          </div>
          <div className={styles.listing_details}>
            Mineral Reserves: 2008 core drilling and testing (on just 60 of the
            1,100 acres) proved 30...
          </div>
          <div className={styles.static_icons}>
            <div className={styles.bed_outline}>
              <ion-icon name="bed-outline"></ion-icon>
              <span>2</span>
            </div>
            <div className={styles.bath}>
              <BiBath />
              <span>5</span>
            </div>
            <div className={styles.arrows}>
              <BsArrowsFullscreen />
              <span>
                29,000 ft<sup>2</sup>
              </span>
            </div>
          </div>
          <div>
            <div>
              <div className={styles.photo_icon_wrapper}>
                <img
                  className={styles.photo_icon}
                  src={
                    "https://lasvegas.wpresidence.net/wp-content/uploads/2014/05/person7-21-500x328.png"
                  }
                  alt=""
                />
              </div>
              <h5> Michaela Finney</h5>
            </div>
            <div>
              <div>
                <AiOutlineShareAlt />
              </div>
              <div>
              <AiOutlineHeart />
              </div>
              <div>
              <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardApartment;
