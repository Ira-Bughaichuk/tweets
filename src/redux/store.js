import { configureStore } from "@reduxjs/toolkit";
import { tweetsReducer } from "./tweetsSlice";

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
  },
});