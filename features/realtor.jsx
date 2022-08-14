import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  realtors: [],
  user: null,
  realtor: null,
  error: null,
  users: [],
  comments: []
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
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      console.log(token);
      const res = await fetch(
        `http://localhost:5000/realtors/rating/${agent_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ rate: rate, user: user }),
        }
      );

      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

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
      const token = localStorage.getItem("token");
      
      const res = await fetch(
        `http://localhost:5000/realtors/review/${agent_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            review: review,
            advantages: advantages,
            disadvantages: disadvantages,
            user: user,
          }),
        }
      );

      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRealtorById = createAsyncThunk("get/realtorById", async (agent_id,thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:5000/realtors/${agent_id}`)
  
    return res.json()
  } catch (error) {
    return thunkAPI.rejectWithValue(e.message)
  }
  })

export const realtorSlice = createSlice({
  name: "realtors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRealtors.fulfilled, (state, action) => {
        state.realtors = action.payload;
        state.user = localStorage.getItem("userId");
      })
      .addCase(putRate.fulfilled, (state, action) => {
        state.isActiveStar = true;
      })
      .addCase(putRate.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.realtor = action.payload 
      })
      .addCase(getRealtorById.fulfilled, (state, action) => {
        state.realtor = action.payload
      })
  },
});

export default realtorSlice.reducer;
