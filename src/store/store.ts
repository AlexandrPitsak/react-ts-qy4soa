import { configureStore } from '@reduxjs/toolkit';
// import themeReducer from './reducers/themeReducer';
// import loginModalReducer from './reducers/loginModalReducer';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    // theme: themeReducer,
    // loginModal: loginModalReducer,
  },
});

export default store;
