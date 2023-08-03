import { createSlice } from "@reduxjs/toolkit";
import  {lightTheme, darkTheme}  from '../theme/themes'

const initialState = {
  theme: lightTheme
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.theme = darkTheme;
    },
    setLightTheme: (state) => {
      state.theme = lightTheme;
    },
  }
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;