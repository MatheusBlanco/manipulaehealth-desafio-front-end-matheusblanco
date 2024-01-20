import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

const currentPlayingSlice = createSlice({
  name: "currentPlaying",
  initialState,
  reducers: {
    playSong: (state, action: PayloadAction<string>) => {
      const currentPlaying = action.payload;
      return (state = currentPlaying);
    },
    pauseSong: (state) => {
      return (state = "");
    },
  },
});

export const { playSong, pauseSong } = currentPlayingSlice.actions;
export default currentPlayingSlice.reducer;
