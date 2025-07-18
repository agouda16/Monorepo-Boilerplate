import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/model/slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add more feature slices here
  },
});
