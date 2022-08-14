import authSlice from "../features/authSlice/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import apartmentSlice from "../features/apartmentSlice";
import realtorSlice from "../features/realtor";
import bookingSlice from "../features/bookingSlice"

export const store = configureStore({
  reducer: {
    apartmentReducer: apartmentSlice,
    realtorReducer: realtorSlice,
    auth: authSlice,
    bookingReducer: bookingSlice,
  },
});
