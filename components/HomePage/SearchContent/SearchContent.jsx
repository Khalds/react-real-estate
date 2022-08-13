import styles from "./SearchContent.module.css"
import { AiOutlineSearch } from "react-icons/ai"

const SearchContent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text_container}>
        <h1>Find your next Home in Chechnya</h1>
        <span>
          Through our proprietary platform, WpResidence is changing how agents
          and clients navigate the process of finding or selling a home.
        </span>
      </div>
      <div className={styles.img_container}></div>
      <div className={styles.search_container}>
        <div className={styles.location_type_category_container}>
          <h3>LOCATION</h3>
          <input type="text" placeholder="Enter an address, state, city, area or zip code" />
        </div>
        <div className={styles.location_type_category_container}>
          <h3>TYPE</h3>
          <input placeholder="Property type"/>
        </div>
        <div className={styles.location_type_category_container}>
          <h3>CATEGORY</h3>
          <input placeholder="Property category"/>
        </div>

        <button><AiOutlineSearch className={styles.aiOutlineSearch}/> Search</button>
      </div>
    </div>
  )
}

export default SearchContent
