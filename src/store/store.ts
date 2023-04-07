import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;