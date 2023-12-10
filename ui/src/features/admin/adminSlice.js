import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  products: [],
  orders: [],
  error: "",
  auth: false,
  totalPages: 1,
  totalDocuments: 1,
};

const BASE_URL = "http://localhost:4040/user";

// Generates pending, fulfilled and rejected action types
export const fetchAllUsers = createAsyncThunk("admin/fetchUsers", (page) => {
  return axios
    .get(`${BASE_URL}/all?page=${page}&perPage=25`)
    .then((res) => res.data);
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
      state.totalDocuments = action.payload.totalDocuments;
      state.totalPages = action.payload.totalPages;
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
