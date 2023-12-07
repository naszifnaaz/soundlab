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
export const fetchUsers = createAsyncThunk("admin/fetchUsers", () => {
  return axios.get(`${BASE_URL}/all`).then((res) => res.data);
});

const adminSlice = createSlice({
  name: "admin",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.users = [];
      state.loading = true;
      state.error = action.error.message;
    });
  },
});

export default adminSlice.reducer;
