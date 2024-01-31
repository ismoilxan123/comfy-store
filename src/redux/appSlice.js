import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    count: 1,
    url: "https://strapi-store-server.onrender.com/api/products",
    all: 0,
  },
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },

    setUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});
export const { setCount, setUrl } = appSlice.actions;
export default appSlice.reducer;
