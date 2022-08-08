import React from "react";
import styles from "./PhotoGallery.module.css";

const PhotoGallery = () => {
  return (
    <div className={styles.gallery_block}>
      <div className={styles.big_image}></div>
      <div className={styles.four_images}>
        <div className={styles.small_image1}></div>
        <div className={styles.small_image2}></div>
        <div className={styles.small_image3}></div>
        <div className={styles.small_image4}></div>
      </div>
    </div>
  );
};

export default PhotoGallery;
