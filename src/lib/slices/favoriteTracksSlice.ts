import { Track } from "../../features/ListingPage/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Track[] = [];

const favoriteTracksSlice = createSlice({
  name: "favoriteTracks",
  initialState,
  reducers: {
    addTrack: (state, action: PayloadAction<Track>) => {
      state.push(action.payload);
    },
    removeTrack: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((post: { id: any }) => post.id !== id);
    },
  },
});

export const { addTrack, removeTrack } = favoriteTracksSlice.actions;
export default favoriteTracksSlice.reducer;
