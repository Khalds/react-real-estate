import { configureStore } from "@reduxjs/toolkit";
import  apartmentSlice  from "../features/apartmentSlice";
import  realtorSlice  from "../features/realtor";
import authSlice from "../features/authSlice/authSlice"

export const store = configureStore({
  reducer: {
    apartmentReducer: apartmentSlice,
    realtorReducer: realtorSlice,
    auth: authSlice,
  }
});
