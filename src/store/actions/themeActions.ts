import { Theme } from '../../types';
import { Dispatch } from 'redux';

export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_THEME = 'SET_THEME';

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

interface SetThemeAction {
  type: typeof SET_THEME;
  payload: Theme;
}

export type ThemeActionTypes = ToggleThemeAction | SetThemeAction;

export const toggleTheme = () => {
  return (dispatch: Dispatch<ThemeActionTypes>) => {
    dispatch({ type: TOGGLE_THEME });
  };
};

export const setTheme = (theme: Theme) => {
  return (dispatch: Dispatch<ThemeActionTypes>) => {
    dispatch({
      type: SET_THEME,
      payload: theme,
    });
  };
};
