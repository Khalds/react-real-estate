import styles from "./SearchContent.module.css";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

const SearchContent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text_container}>
        <h1>Find your next Home in Chechnya</h1>
        <span>
          Through our proprietary platform, WpResidence is changing how agents
          and clients navigate the process of finding or selling a home.
        </span>
        <div className={styles.transition_the_cardу}>
          <button className={styles.button}>
          <Link href="/map">
            <div>search apartment on the map</div>
          </Link>
            <div className={styles.bsArrowRightCircle}>
              <Link href="/map">
                <BsArrowRightCircle />
              </Link>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.img_container}></div>
    </div>
  );
};

export default SearchContent;
