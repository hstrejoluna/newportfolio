import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.darkmode = true;
      console.log(state);
    },
    setDefaultTheme(state) {
      state.darkmode = false;
      console.log(state);
    },
  },
});

export const { setDarkTheme, setDefaultTheme } = themeSlice.actions;

export default themeSlice.reducer;
