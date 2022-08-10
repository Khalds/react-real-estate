import React from "react";
import styles from "./Title.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Title = () => {
  return (
    <div className={styles.title_block}>
      <div className={styles.title_and_price}>
        <h1 className={styles.title}>Gorgeous Studio for Rent</h1>
        <div className={styles.price}>770.000 $</div>
      </div>
      <div className={styles.adress_and_favorite}>
        <div className={styles.adress}>
          <FaMapMarkerAlt />
          <div>8367 W Flamingo Rd suite 101, Las Vegas, Downtown</div>
        </div>
        <div className={styles.favorite}>
          <FaRegHeart />
          <div>Favorite</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
