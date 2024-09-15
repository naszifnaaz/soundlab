import { configureStore } from "@reduxjs/toolkit";
import AdminReducer from "../features/admin/adminSlice";
import userReducer from "../features/user/userSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    admin: AdminReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});
