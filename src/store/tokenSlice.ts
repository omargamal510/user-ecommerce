import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../components/CookieHandler/CookieHandler";

interface initialState {
  value: string | undefined;
}

const tokenCookie = getCookie("user-token");

const initialState: initialState = {
  value: tokenCookie,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    tokenTrue: (state, action) => {
      state.value = action.payload;
    },

    logOut(state) {
      state.value = "";
    },
  },
});

export const { tokenTrue, logOut } = tokenSlice.actions;

export default tokenSlice.reducer;
