import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  products: [],
  orders: [],
  error: "",
  auth: false,
};

const BASE_URL = "http://localhost:4040/user";

// Generates pending, fulfilled and rejected action types
export const fetchAllUsers = createAsyncThunk("admin/fetchUsers", () => {
  return axios.get(`${BASE_URL}/all`).then((res) => res.data);
});

const adminSlice = createSlice({
  name: "admin",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.users = action.payload.users;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.users = [];
      state.loading = true;
      state.error = action.error.message;
    });
  },
});

export default adminSlice.reducer;
