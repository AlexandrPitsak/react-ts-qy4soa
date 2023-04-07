import { Dispatch } from 'redux';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

interface User {
  email: string;
  uid: string;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: User;
}

interface LoginErrorAction {
  type: typeof LOGIN_ERROR;
  error: Error;
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

interface LogoutErrorAction {
  type: typeof LOGOUT_ERROR;
  error: Error;
}

export type AuthActionTypes =
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutSuccessAction
  | LogoutErrorAction;

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
      // Here you can use your own backend API to handle the login request
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: LOGIN_SUCCESS,
          user: {
            email: data.email,
            uid: data.uid,
          },
        });
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        error,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
      // Here you can use your own backend API to handle the logout request
      const response = await fetch('/api/logout');
      if (response.ok) {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      dispatch({
        type: LOGOUT_ERROR,
        error,
      });
    }
  };
};