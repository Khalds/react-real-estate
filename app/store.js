import { configureStore } from "@reduxjs/toolkit";
import { apartmentSlice } from "../features/apartmentSlice";

export const store = configureStore({
  reducer: apartmentSlice,
});
