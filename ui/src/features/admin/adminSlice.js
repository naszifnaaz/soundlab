import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

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

const BASE_URL = "http://localhost:4040";

// Generates pending, fulfilled and rejected action types
export const fetchAllUsers = createAsyncThunk("admin/fetchUsers", (page) => {
  return axios
    .get(`${BASE_URL}/user/all?page=${page}&perPage=25`)
    .then((res) => res.data);
});

export const fetchAllProducts = createAsyncThunk(
  "admin/fetchProducts",
  (page) => {
    return axios
      .get(`${BASE_URL}/product/all?page=${page}&perPage=25`)
      .then((res) => res.data);
  }
);

export const deactivateUser = createAsyncThunk(
  "admin/deactivateUser",
  async (id) => {
    return axios.delete(`${BASE_URL}/${id}`).then((res) => res.data);
  }
);

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
    builder.addCase(deactivateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deactivateUser.fulfilled, (state) => {
      state.loading = false;
      toast.success("User deactivated!");
    });
    builder.addCase(deactivateUser.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.payload.error);
    });
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.totalDocuments = action.payload.totalDocuments;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.products = [];
      state.loading = true;
      state.error = action.error.message;
    });
  },
});

export default adminSlice.reducer;
