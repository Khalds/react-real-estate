import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "./informativeMe.module.css";

const InformativeMe = ( {description} ) => {
  const realtors = useSelector((state) => state.realtorReducer.realtors);


  const  start =  description.substring(0, 660)
  const sequel = description.substring(660, 1000)

  return (
    <div className={styles.informative_wrapper}>
      <div className={styles.specialties}>
        <h4>Specialties &amp; Service Areas</h4>
        <Link href="/agents">
          <a>Сommunity from Russia</a>
        </Link>
          <a>Grozny</a>
        <Link href="/map">
          <a>Chechen Republic</a>
        </Link>
        <a>Residential</a>
        <a>Commercial</a>
      </div>
      <div className={styles.informative_about_me_wrapper}>
        <h4>About Me </h4>
        <p>
          {
            start
          }
        </p>
        <p>
          {
            sequel
          }
        </p>
      </div>
    </div>
  );
};

export default InformativeMe;
