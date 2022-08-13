import React from "react"
import { useState } from "react"
import styles from "./PhotoGallery.module.css"
import Modal from "./Modal"


const PhotoGallery = ({ apartment }) => {
  
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className={styles.gallery_block}>
      <div className={styles.big_image} onClick={() => setOpenModal(true)}>
        <img src={apartment.image[0]} alt="" />
      </div>
      <div className={styles.four_images}>
        <div className={styles.small_image} onClick={() => setOpenModal(true)}>
          <img src={apartment.image[1]} alt="" />
        </div>
        <div className={styles.small_image} onClick={() => setOpenModal(true)}>
          <img src={apartment.image[2]} alt="" />
        </div>
        <div className={styles.small_image} onClick={() => setOpenModal(true)}>
          <img src={apartment.image[3]} alt="" />
        </div>
        <div className={styles.small_image} onClick={() => setOpenModal(true)}>
          <img src={apartment.image[4]} alt="" />
        </div>
      </div>
      {openModal && <Modal apartment={apartment}  setOpenModal={setOpenModal} />}

    </div>
  )
}

export default PhotoGallery
