import React from "react";
import useCollapse from "react-collapsed";
import styles from "./Showing.module.css";

const Showing = ({apartment}) => {
  const config = {
    duration: 300,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className={styles.showing_block}>
      <div className={styles.agent}>
        <div className={styles.agent_photo}>
          <img src={apartment.realtor.image} alt="" />
        </div>
        <div className={styles.agent_info}>
          <h4 className={styles.agent_name}>{apartment.realtor.name}</h4>
          <div className={styles.agent_position}>selling agent</div>
        </div>
      </div>
      <div className={styles.schedule_showing}>
        <div className={styles.header} {...getToggleProps()}>
          <div className={styles.schedule_showing_btn}>Schedule a showing?</div>
        </div>
        <div {...getCollapseProps()}>
          <div className={styles.input_select_wrapper}>
            <input
              className={styles.input_day}
              name="schedule_day"
              type="text"
              placeholder="Day"
            />
            <select className={styles.select_hour} name="schedule_hour">
              <option value="0">Time</option>
              <option value="8:00">8:00</option>
              <option value="8:30">8:30</option>
              <option value="9:00">9:00</option>
              <option value="9:30">9:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.input_fields}>
        <input
          className={styles.input_contact}
          type="text"
          placeholder="Your Name"
        />
        <input
          className={styles.input_contact}
          type="text"
          placeholder="Your Email"
        />
        <input
          className={styles.input_contact}
          type="text"
          placeholder="Your Phone"
        />
        <textarea
          className={styles.input_contact}
          cols="16"
          rows="8"
          placeholder="I'm interested in [ Gorgeous Studio for Rent ] "
        ></textarea>
      </div>
      <div className={styles.contact_buttons}>
        <div className={styles.email_btn}>Send Email</div>
        <div className={styles.btn}>Call</div>
        <div className={styles.btn}>WhatsApp</div>
      </div>
    </div>
  );
};

export default Showing;
