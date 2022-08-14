import styles from "./PopularAreas.module.css";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import VisibilitySensor from 'react-visibility-sensor';

const PopularAreas = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return ( 
    <div className={styles.main} data-aos="fade-right" 
    data-aos-duration="3000" >
      <div className={styles.text_areas_container}>
        <div className={styles.text}>
          <p>POPULAR AREAS</p>
          <h1>Explore most popular areas</h1>
        </div>
        <div className={styles.areas}>
          <div className={styles.img_container}>
            <img
              src="https://wikiway.com/upload/iblock/087/Groznyy-Siti-5.jpg"
              alt="photo"
            ></img>
            <h4 className={styles.city}>Grozny</h4>
            <p className={styles.listing}>4 listings</p>
          </div>
          <div className={styles.img_container}>
            <img
              src="http://s3.fotokto.ru/photo/full/595/5951164.jpg"
              alt="photo"
            ></img>
            <h4 className={styles.city}>Argun</h4>
            <p className={styles.listing}>3 listings</p>
          </div>
          <div className={styles.img_container}>
            <img
              src="https://core-pht-proxy.maps.yandex.ru/v1/photos/download?photo_id=PSNpKzmAHNDrU0i6R-VamQ&image_size=XL"
              alt="photo"
              className={styles.image_gudermes}
            ></img>
            <h4 className={styles.city}>Gudermes</h4>
            <p className={styles.listing}>2 listings</p>
          </div>
        </div>
      </div>
      <div className={styles.company_result}>
        <div className={styles.info_container}>
          <div className={styles.counter}>
            <CountUp end={10}  redraw={true} >
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
            
            </CountUp>
            К
          </div>
          <div>ACTIVE LISTINGS</div>
        </div>
        <div className={styles.info_container}>
          <div className={styles.counter}>
          <CountUp end={9}  redraw={true} >
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
            
            </CountUp>
            К
          </div>
          <div>SOLD LISTINGS</div>
        </div>
        <div className={styles.info_container}>
          <div className={styles.counter}>
          <CountUp end={9}  redraw={true} >
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
            
            </CountUp>
            К
          </div>
          <div>
            CLIENTS <br /> WE'VE SERVED
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularAreas;
