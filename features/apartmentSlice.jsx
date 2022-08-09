import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  apartments: [],
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
    builder.addCase(getApartments.fulfilled, (state, action) => {
      state.apartments = action.payload;
    });
  },
});

export default apartmentSlice.reducer;
