import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  realtors: [],
  user: null,
  isActiveStar: false,
};

export const getRealtors = createAsyncThunk(
  "get/realtors",
  async (thunkAPI) => {
    const user = localStorage.getItem("user");

    try {
      const res = await fetch("http://localhost:5000/realtors");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const putRate = createAsyncThunk(
  "set/rating",
  async ({ rate, user, agent_id }, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:5000/realtors/rating/${agent_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rate: rate, user: user }),
        }
      );

      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  "add/review",
  async ({ agent_id, review, advantages, disadvantages, user }, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:5000/realtors/review/${agent_id}`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            review: review,
            advantages: advantages,
            disadvantages: disadvantages,
            user: user,
          }),
        }
      );

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
    builder
      .addCase(getRealtors.fulfilled, (state, action) => {
        state.realtors = action.payload;
        state.user = localStorage.getItem("user");
      })
      .addCase(putRate.fulfilled, (state, action) => {
        state.isActiveStar = true;
      });
  },
});

export default realtorSlice.reducer;
