import SearchMap from "../components/Map/SearchMap"
import styles from "../components/Map/SearchMap.module.css"

const map = () => {
  return (
    <div className={styles.map_whrapper}>
    <SearchMap />
    </div>
  );
};

export default map;
