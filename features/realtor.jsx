import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  realtors: [],
};

export const getRealtors = createAsyncThunk(
  "get/realtors",
  async (thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/realtors");
      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const realtorSlice = createSlice({
  name: "realtors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRealtors.fulfilled, (state, action) => {
      state.realtors = action.payload;
    });
  },
});

export default realtorSlice.reducer;
