import { Theme, TOGGLE_THEME } from "../../types";
import { darkTheme, lightTheme } from "../../styles/themes";

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: lightTheme,
};

const themeReducer = (state = initialState, action): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      };
    default:
      return state;
  }
};

export default themeReducer;