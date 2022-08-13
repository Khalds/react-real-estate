import React from 'react';
import styles from "./Overview.module.css"
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { BsHouse } from "react-icons/bs";
import { BsCalendar4 } from "react-icons/bs";

const Overview = ({apartment}) => {
    return (
        <div className={styles.overview_block}>
        <h4 className={styles.title}>Overview</h4>
        <div className={styles.content}>
          <div className={styles.updated_on}>
            <div className={styles.text}>Updated on:</div>
            <div className={styles.date}>March 29, 2022</div>
          </div>
          <div className={styles.icon_and_text}>
            <div className={styles.icon}>
              <MdOutlineBedroomParent size={20} />
            </div>
            <div>{apartment.bedroom} Bedrooms</div>
          </div>
          <div className={styles.icon_and_text}>
            <div className={styles.icon}>
              <GiBathtub size={20} />
            </div>
            <div>{apartment.bathroom} Bathrooms</div>
          </div>
          <div className={styles.icon_and_text}>
            <div className={styles.icon}>
              <FaCar size={20} />
            </div>
            <div>{apartment.garage} Garages</div>
          </div>
          <div className={styles.icon_and_text}>
            <div className={styles.icon}>
              <BsHouse size={20} />
            </div>
            <div>
              {apartment.size} ft
              <sup>2</sup>
            </div>
          </div>
          <div className={styles.icon_and_text}>
            <div className={styles.icon}>
              <BsCalendar4 size={20} />
            </div>
            <div>Year Built: {apartment.yearOfBuilt}</div>
          </div>
        </div>
      </div>
    );
};

export default Overview;