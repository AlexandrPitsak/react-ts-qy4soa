import { combineReducers } from 'redux';
// import authReducer from './reducers/authReducer';
// import birdReducer from './reducers/birdReducer';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
  // auth: authReducer,
  // bird: birdReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;