
import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/authSlice/authSlice"
import { apartmentSlice } from "../features/apartmentSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    apartmentReducer: apartmentSlice,
  },
})
