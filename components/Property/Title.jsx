import React from "react";
import styles from "./Title.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Title = ({apartment}) => {
  return (
    <div className={styles.title_block}>
      <div className={styles.title_and_price}>
        <h1 className={styles.title}>{apartment.name}</h1>
        <div className={styles.price}>{apartment.price} $</div>
      </div>
      <div className={styles.adress_and_favorite}>
        <div className={styles.adress}>
          <FaMapMarkerAlt />
          <div>{apartment.location}</div>
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
