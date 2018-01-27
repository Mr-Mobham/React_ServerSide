import { createStore, applyMiddleware ,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
// import Notification from '../reducer/comments/comments';
import Notification from '../reducer/category_post/comments';

/// dispatch ///

const combined = combineReducers({
  Notification
});

const middleware = [
  logger,
];

export const initStore = initialState =>
  createStore(combined, initialState,applyMiddleware(...middleware));
