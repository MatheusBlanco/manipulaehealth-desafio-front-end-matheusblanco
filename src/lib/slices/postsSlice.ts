import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = [{ id: 1, title: "1", description: "desc 1" }];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
    },
    deletePost: (state, action: PayloadAction<any>) => {
      const id = action.payload;
      return state.filter((post: { id: any }) => post.id === id);
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
