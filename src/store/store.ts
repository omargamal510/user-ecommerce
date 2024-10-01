import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
// Import the reducer from the slice

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
