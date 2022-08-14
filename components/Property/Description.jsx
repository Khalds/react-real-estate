import React from "react";
import styles from "./Description.module.css";

const Description = ({apartment}) => {
  return (
    <div className={styles.description_content}>
      <h4 className={styles.title}>Description</h4>
      <p className={styles.text}>
        {apartment.description}
      </p>
    </div>
  );
};

export default Description;
