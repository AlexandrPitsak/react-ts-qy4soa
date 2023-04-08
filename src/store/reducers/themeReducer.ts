import { ThemeActionTypes, SET_THEME, TOGGLE_THEME } from "../actions/themeActions";
import { Theme } from "../../types";
import { defaultTheme } from "../../styles/themes";

export interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: defaultTheme,
};

const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      const newTheme = state.theme === "light" ? "dark" : "light";
      return {
        ...state,
        theme: newTheme,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;