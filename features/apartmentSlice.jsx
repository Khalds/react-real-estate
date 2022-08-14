import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  apartments: [],
  apartment: null,
  loading: false,
  user: null
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


export const getApartmentById = createAsyncThunk(
  "get/apartmentById", 
  async (apartment_id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:5000/apartment/${apartment_id}`)
      return res.json()
    } catch (error) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const addReviewForApartment = createAsyncThunk(
  "add/review",
  async ({ apartment_id, review, advantages, disadvantages, user }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      
      const res = await fetch(
        `http://localhost:5000/apartment/review/${apartment_id}`,
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
)




export const apartmentSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApartments.fulfilled, (state, action) => {
        state.apartments = action.payload;
        state.loading = false;
        state.user = localStorage.getItem("userId");
      })
      .addCase(getApartments.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getApartments.rejected, (state, action) => {
        state.loading = false
      })
      .addCase(addReviewForApartment.fulfilled, (state,action) => {
        state.apartment = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(addReviewForApartment.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(addReviewForApartment.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(getApartmentById.fulfilled, (state, action) => {
        state.apartment = action.payload
      })
  },
});

export default apartmentSlice.reducer;
