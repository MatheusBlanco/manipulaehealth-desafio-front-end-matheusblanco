import { configureStore } from "@reduxjs/toolkit";
import currentPlayingSlice from "./slices/currentPlayingSlice";
import favoriteTracksSlice from "./slices/favoriteTracksSlice";

export const store = configureStore({
  reducer: {
    currentPlaying: currentPlayingSlice,
    favoriteTracks: favoriteTracksSlice,
  },
});
