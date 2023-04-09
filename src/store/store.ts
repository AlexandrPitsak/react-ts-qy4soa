import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './reducers/authReducer';
import themeReducer from './reducers/themeReducer';

const store = configureStore({
  reducer: {
    // auth: authReducer,
    theme: themeReducer,
  },
});

export default store;
