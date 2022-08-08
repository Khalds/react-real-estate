import React from "react";
import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.description_content}>
      <h4 className={styles.title}>Description</h4>
      <p className={styles.text}>
        This property is mostly wooded and sits high on a hilltop overlooking
        the Mohawk River Valley. Located right in the heart of Upstate NYs Amish
        farm Country, this land is certified organic making it extremely rare!
        Good road frontage on a paved county road with utilities make it an
        amazing setting for your dream country getaway! If you like views, you
        must see this property!
      </p>
    </div>
  );
};

export default Description;
