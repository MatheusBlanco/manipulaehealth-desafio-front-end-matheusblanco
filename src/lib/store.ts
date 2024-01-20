import { configureStore } from "@reduxjs/toolkit";
import currentPlayingSlice from "./slices/currentPlayingSlice";
import postsSlice from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    currentPlaying: currentPlayingSlice,
  },
});
