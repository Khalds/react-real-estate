import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  loading: false,
};

export const getBookings = createAsyncThunk(
  "get/bookings",
  async (thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/bookings");
      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postBookings = createAsyncThunk(
  "post/bookings",
  async ({ time, apartment, realtor, user }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          time: time,
          apartment: apartment,
          realtor: realtor,
          user: user,
        }),
      });

      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.loading = false;
      })
      .addCase(getBookings.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default bookingSlice.reducer;
