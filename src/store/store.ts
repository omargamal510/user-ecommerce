import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
// Import the reducer from the slice

export const store = configureStore({
  reducer: {
    token: tokenSlice,
  },
});
