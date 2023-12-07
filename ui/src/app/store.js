import { configureStore } from "@reduxjs/toolkit";
import AdminReducer from "../features/admin/adminSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    admin: AdminReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});
