import Link from "next/link";
import React from "react";
import useCollapse from "react-collapsed";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Showing.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postBookings } from "../../features/bookingSlice";

const Showing = ({ apartment }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const error = useSelector((state) => state.bookingReducer.error)
  let user_id;

  const dispatch = useDispatch();
  if (typeof window !== "undefined") {
    user_id = localStorage.getItem("userId");
  }

  const handleSend = (time, apartment, realtor, user) => {
    dispatch(postBookings({ time, apartment, realtor, user }));
  };

  const config = {
    duration: 300,
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className={styles.showing_block}>
      <div className={styles.agent}>
        <Link href={`/agents/${apartment.realtor._id}`}>
          <div className={styles.agent_photo}>
            <img src={apartment.realtor.image} alt="" />
          </div>
        </Link>
        <div className={styles.agent_info}>
          <Link href={`/agents/${apartment.realtor._id}`}>
            <h4 className={styles.agent_name}>{apartment.realtor.name}</h4>
          </Link>
          <div className={styles.agent_position}>selling agent</div>
        </div>
      </div>
      {error && <div className={styles.error}>Авторизуйтесь,чтобы забронировать просмотр квартиры</div>}
      <div className={styles.schedule_showing}>
        <div className={styles.header} {...getToggleProps()}>
          <div className={styles.schedule_showing_btn}>Schedule a showing?</div>
        </div>
        <div {...getCollapseProps()}>
          <div className={styles.input_select_wrapper}>
            <DatePicker
              className={styles.input_day}
              placeholderText="Day"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy HH:mm"
              timeFormat="HH:mm"
              minDate={new Date()}
              showTimeSelect
              timeIntervals={30}
            />
            <button
              onClick={() =>
                handleSend(
                  selectedDate,
                  apartment._id,
                  apartment.realtor._id,
                  user_id
                )
              }
              className={styles.date_btn}
            >
              Save the date
            </button>
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
