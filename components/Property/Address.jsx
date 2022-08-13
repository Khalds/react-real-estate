import React from "react";
import useCollapse from "react-collapsed";

import styles from "./Address.module.css";

const Address = ({apartment}) => {
  const config = {
    duration: 300,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className={styles.address_content}>
      <div className={styles.header} {...getToggleProps()}>
        {isExpanded ? (
          <div className={styles.title_click}>
            <h4 className={styles.title}>Address</h4>
            <p className={styles.open_close_click}>Close</p>
          </div>
        ) : (
          <div className={styles.title_click}>
            <h4 className={styles.title}>Address</h4>
            <p className={styles.open_close_click}>Open</p>
          </div>
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className={styles.content}>

          <div className={styles.content_text}>
            <div className={styles.content_left}>
              <p>
                <strong>Address: </strong>8367 W Flamingo Rd suite 101
              </p>
              <p>
                <strong>Area: </strong>Downtown
              </p>
              <p>
                <strong>Zip: </strong> NV 89147
              </p>
            </div>
            <div className={styles.content_right}>
              <p>
                <strong>City: </strong>{apartment.city}
              </p>
              <p>
                <strong>State: </strong>Chechen Republic
              </p>
              <p>
                <strong>Country: </strong>Russia
              </p>
            </div>
          </div>

          <div className={styles.google_maps}>Open in Google Maps</div>
        </div>
      </div>
    </div>
  );
};

export default Address;
