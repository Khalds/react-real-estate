import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBookings } from "../../../features/bookingSlice";
import styles from "./Booking.module.css";

const Booking = () => {
  const bookings = useSelector((state) => state.bookingReducer.bookings);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  let user_id;

  if (typeof window !== "undefined") {
    user_id = localStorage.getItem("userId");
  }

  const filteredBookings = bookings.filter((booking) => {
    return booking.user._id === user_id;
  });

  return (
    <div>
      <div>
        {filteredBookings.map((booking) => {
          return (
            <div className={styles.booking_wrapper}>
              <div className={styles.booking_content}>
                <div className={styles.element}>
                  <p>{booking.apartment.name}</p>
                </div>
                <div className={styles.element}>
                  <p>{booking.apartment.city}</p>
                </div>
                <div className={styles.element}>
                  <p>
                    {`${booking.time}`.slice(0, 10) +
                      " at " +
                      `${booking.time}`.slice(11, 16)}
                  </p>
                </div>
                <div className={styles.element}>
                  <p>{booking.realtor.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Booking;
