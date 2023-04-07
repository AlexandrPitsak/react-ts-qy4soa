import { Theme } from '../../../types';
import { ThemeActionTypes, TOGGLE_THEME, SET_THEME } from '../../types/themeTypes';

interface ThemeState {
  currentTheme: Theme;
}

const initialState: ThemeState = {
  currentTheme: 'light',
};

const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
      };
    case SET_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;