import { configureStore } from '@reduxjs/toolkit';
import {  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';
import themeReducer from './reducers/themeReducer';

const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  }
});


export default rootReducer;