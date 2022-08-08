import styles from "./SearchContent.module.css";
import { AiOutlineSearch } from "react-icons/ai"

const SearchContent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text_container}>
        <h1>Find your next Home in Las Vegas</h1>
        <span>
          Through our proprietary platform, WpResidence is changing how agents
          and clients navigate the process of finding or selling a home.
        </span>
      </div>
      <div className={styles.img_container}></div>
      <div className={styles.search_container}>
        <div className={styles.location_container}>
          <h3>Location</h3>
          <input type="text" placeholder="Enter an address, state, city, area or zip code
" />
        </div>
        <div className={styles.type_container}>
          <h3>Type</h3>
          <input placeholder="Property type"/>
        </div>
        <div className={styles.category_container}>
          <h3>Category</h3>
          <input placeholder="Property category"/>
        </div>

        <button><AiOutlineSearch /> Search</button>
      </div>
    </div>
  );
};

export default SearchContent;
