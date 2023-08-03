import { configureStore } from '@reduxjs/toolkit';
// import themeReducer from './reducers/themeReducer';
// import loginModalReducer from './reducers/loginModalReducer';
import themeReducer from './themeSlice';
import modalReducer from './modalSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
    // loginModal: loginModalReducer,
  },
});

export default store;
