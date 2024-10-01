import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../components/CookieHandler/CookieHandler";

interface initialState {
  token: string | undefined;
  userNameValue: string | null;
}

const tokenCookie = getCookie("user-token");

const initialState: initialState = {
  token: tokenCookie,
  userNameValue: localStorage.getItem("userName"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    tokenTrue: (state, action) => {
      state.token = action.payload;
    },

    logOut(state) {
      state.token = "";
    },
  },
});

export const { tokenTrue, logOut } = authSlice.actions;

export default authSlice.reducer;
