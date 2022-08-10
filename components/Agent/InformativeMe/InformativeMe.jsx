import Link from "next/link";
import styles from "./informativeMe.module.css"

const InformativeMe = () => {
  return (
    <div className={styles.informative_wrapper}>
      <div className={styles.specialties}>
        <h4>Specialties &amp; Service Areas</h4>
        <Link href="">
          <a>Comunidad de Madrid</a>
        </Link>
        <Link href="">
          <a>Madrid</a>
        </Link>
        <Link href="">
          <a>Malasaña</a>
        </Link>
        <Link href="">
          <a>Residential</a>
        </Link>
        <Link href="">
          <a>Commercial</a>
        </Link>
      </div>
      <div className={styles.informative_about_me_wrapper}>
        <h4>About Me </h4>
        <p>
          Michaela’s sociability, independent spirit, and incredible customer
          service set him apart as a top agent in the New York real estate
          market. He works with a range of clients – national and international,
          as well as investors and local residents.
        </p>
        <p>
          Whether a client is in the market for a single-family home or a luxury
          penthouse, Michael is there to help out. Between his time in the
          hospitality and real estate industries, he knows what good service is
          all about.
        </p>
      </div>
    </div>
  );
};

export default InformativeMe;
