import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: [],
  },
  reducers: {
    videoList: (state, action) => {
      state.videoList = action.payload;
    },
  },
});

export const { videoList } = videoSlice.actions;

export default videoSlice.reducer;
