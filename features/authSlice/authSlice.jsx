//
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: [],
  signIn: false,
  signUp: false,
  error: null,
  token: null,
  user: null,
  userId: null,
  role: null
}

export const fetchUser = createAsyncThunk(
  "users/fetch",
  async (_, thunkAPI) => {
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
  }
)

export const fetchUserById = createAsyncThunk(
  "user/fetch",
  async (userId, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/user/${userId}`)

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
        localStorage.setItem("user", json.user.login)
        localStorage.setItem("userId", json.user.id)
        localStorage.setItem("role", json.user.role);
        return thunkAPI.fulfillWithValue(json)
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const addFavorite = createAsyncThunk(
  "userFavorite/patch",
  async ({ apartmentId, userId }, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const res = await fetch(
        `http://localhost:4000/users/${userId}/favorite`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            favorite: apartmentId,
          }),
        }
      )
      return res.json(res)
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const getToken = createAsyncThunk("getToken", () => {
  console.log(localStorage.getItem("user"))
  localStorage.getItem("token")
  localStorage.getItem("user")
  localStorage.getItem("userId")
})

export const removeToken = createAsyncThunk("remove", () => {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  localStorage.removeItem("userId")
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
        state.user = localStorage.getItem("user")
        state.userId = localStorage.getItem("userId")
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
        state.login = localStorage.getItem("role")
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
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.users = state.users.map((item) => {
          console.log(action.payload._id)
          if (item._id === action.payload._id) {
            return action.payload
          }
          return item
        })
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.error = action.payload
        console.log(action.payload)
      })
  },
})

export default authSlice.reducer
