import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  apartments: [],
  loading: false,
};

export const getApartments = createAsyncThunk(
  "get/apartments",
  async (thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/apartment");
      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apartmentSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApartments.fulfilled, (state, action) => {
        state.apartments = action.payload;
        state.loading = false;
      })
      .addCase(getApartments.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default apartmentSlice.reducer;
