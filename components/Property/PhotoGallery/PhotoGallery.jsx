import React from "react";
import { useState } from "react";
import styles from "./PhotoGallery.module.css";
import Modal from "./Modal";

const PhotoGallery = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.gallery_block}>
      <div className={styles.big_image} onClick={() => setOpenModal(true)}></div>
      <div className={styles.four_images}>
        <div className={styles.small_image1} onClick={() => setOpenModal(true)}></div>
        <div className={styles.small_image2} onClick={() => setOpenModal(true)}></div>
        <div className={styles.small_image3} onClick={() => setOpenModal(true)}></div>
        <div className={styles.small_image4} onClick={() => setOpenModal(true)}></div>
      </div>
      {openModal && <Modal setOpenModal = {setOpenModal} />}

    </div>
  );
};

export default PhotoGallery;
