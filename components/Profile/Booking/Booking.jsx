import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBookings } from "../../../features/bookingSlice";

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
            <div>
              <p key={booking._id}>{booking.time}</p>
              <img src={booking.apartment.image[0]} ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Booking;
