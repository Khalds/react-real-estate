import React from "react";
import ImageSlider from "./ImageSlider";
import styles from "./Modal.module.css";
import GrClose from "react-icons/gr";

const Modal = ({setOpenModal, apartment}) => {

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal_container}>
      <button className={styles.close_btn} onClick={() => setOpenModal(false)}>&times;</button>
        <ImageSlider apartment={apartment} />
      </div>
    </div>
  );
};

export default Modal;
