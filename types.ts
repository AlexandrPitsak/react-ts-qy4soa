export interface Bird {
  id: string;
  name: string;
  scientificName: string;
  family: string;
  imageUrl: string;
  description: string;
}
export type Theme = 'light' | 'dark';

// Define types for bird-related actions
export const FETCH_BIRDS_REQUEST = 'FETCH_BIRDS_REQUEST';
export const FETCH_BIRDS_SUCCESS = 'FETCH_BIRDS_SUCCESS';
export const FETCH_BIRDS_FAILURE = 'FETCH_BIRDS_FAILURE';

interface FetchBirdsRequestAction {
  type: typeof FETCH_BIRDS_REQUEST;
}

interface FetchBirdsSuccessAction {
  type: typeof FETCH_BIRDS_SUCCESS;
  payload: Bird[];
}

interface FetchBirdsFailureAction {
  type: typeof FETCH_BIRDS_FAILURE;
  payload: string;
}

export type BirdAction =
  | FetchBirdsRequestAction
  | FetchBirdsSuccessAction
  | FetchBirdsFailureAction;

// Define types for authentication-related actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction;

// Define types for theme-related actions
export const TOGGLE_THEME = 'TOGGLE_THEME';

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

export type ThemeAction = ToggleThemeAction;

// Define types for the root reducer
export interface RootState {
  birds: {
    loading: boolean;
    error: string | null;
    data: Bird[];
  };
  auth: {
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    token: string | null;
  };
  theme: {
    theme: 'light' | 'dark';
  };
}
