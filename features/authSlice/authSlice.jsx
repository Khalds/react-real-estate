//
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: [],
  signIn: false,
  signUp: false,
  error: null,
  token: null,
}

export const fetchUser = createAsyncThunk("user/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:5000/users")

    const json = await res.json()

    if (json.error) {
      return thunkAPI.rejectWithValue(json.error)
    } else {
      return thunkAPI.fulfillWithValue(json)
    }
  } catch (e) {
    return thunkAPI.rejectWithValue(e)
  }
})

export const createUser = createAsyncThunk(
  "registration/post",
  async ({ email, login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, login, password }),
      })

      const json = await res.json()

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error)
      } else {
        return thunkAPI.fulfillWithValue(json)
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const auth = createAsyncThunk(
  "login/post",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      })
      const json = await res.json()

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error)
      } else {
        localStorage.setItem("token", json.accessToken)

        return thunkAPI.fulfillWithValue(json)
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const getToken = createAsyncThunk("getToken", () => {
  localStorage.getItem("token")
})

export const removeToken = createAsyncThunk("remove", () => {
  localStorage.removeItem("token")
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeToken.fulfilled, (state) => {
        state.token = null
        state.signIn = false
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.token = localStorage.getItem("token")
        state.signIn = false
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.signUp = true
        state.users.push(action.payload)
      })
      .addCase(createUser.pending, (state, action) => {
        state.signUp = false
        state.error = null
      })
      .addCase(createUser.rejected, (state, action) => {
        state.signUp = false
        state.error = action.payload
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.signIn = true
        state.token = action.payload.token
        state.userId = action.payload.userId
        state.login = action.payload.login
      })
      .addCase(auth.pending, (state, action) => {
        state.signIn = false
        state.error = null
      })
      .addCase(auth.rejected, (state, action) => {
        state.signIn = false
        state.error = action.payload
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.users = action.payload
      })
  },
})

export default authSlice.reducer
