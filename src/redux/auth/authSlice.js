import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from "./authOperations";

const initialState = {
  user: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    // Obsługuje akcje pending
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.isRefreshing = true;
      state.error = null;
    });

    // Obsługuje akcje fulfilled
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    });

    // Obsługuje akcje fulfilled dla logout
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    });

    // Obsługuje matcher dla fulfilled dla registerUser i loginUser
    builder.addMatcher(
      isAnyOf(registerUser.fulfilled, loginUser.fulfilled),
      (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      }
    );

    // Obsługuje akcje rejected
    builder.addMatcher(
      isAnyOf(
        registerUser.rejected,
        loginUser.rejected,
        logoutUser.rejected,
        fetchCurrentUser.rejected
      ),
      (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      }
    );

    // Obsługuje akcje pending
    builder.addMatcher(
      isAnyOf(registerUser.pending, loginUser.pending, logoutUser.pending),
      (state) => {
        state.error = null;
      }
    );
  },
});

export const authReducer = authSlice.reducer;
