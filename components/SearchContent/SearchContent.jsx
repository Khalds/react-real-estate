import styles from "./SearchContent.module.css";

const SearchContent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text_container}>
        <div className={styles.sa}>
          <h1>Find your next Home in Las Vegas</h1>
          <p>
            Through our proprietary platform, WpResidence is changing how agents
            and clients navigate the process of finding or selling a home.
          </p>
        </div>
      </div>
      <div className={styles.img_container}></div>
    </div>
  );
};

export default SearchContent;
