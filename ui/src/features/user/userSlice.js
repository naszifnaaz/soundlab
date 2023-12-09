import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  isLoggedIn: false,
  user: {},
  token: "",
  role: "",
  cart: [],
  loading: false,
  isLoggedIn: false,
};

const LOGIN_URL = "http://localhost:4040/login";
const REGISTER_URL = "http://localhost:4040/register";

export const userRegister = createAsyncThunk("user/register", (user) => {
  return axios.post(REGISTER_URL, {
    fullname: user.fullname,
    username: user.fullname,
    email: user.email,
    password: user.password,
    role: "user",
  });
});

export const userLogin = createAsyncThunk("user/login", (user) => {
  return axios.post(LOGIN_URL, user);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
      state.email = action.payload.data.email;
      state.role = action.payload.data.role;
      state.token = action.payload.data.token;
      state.error = "";
      state.isLoggedIn = true;
      toast.success("Account created!");
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      toast.error(action.error.message);
    });
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
      state.email = action.payload.data.email;
      state.role = action.payload.data.role;
      state.token = action.payload.data.token;
      state.error = "";
      state.isLoggedIn = true;
      toast.success("Login Successful!");
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      toast.error(action.error.message);
    });
  },
});

export default userSlice.reducer;
