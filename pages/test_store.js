import { createStore, applyMiddleware ,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import Notification from '../reducer/comments/comments';
import Test from '../reducer/comments/test';

/// dispatch ///

const combined = combineReducers({
  Notification,
  Test
});

const middleware = [
  logger,
];

export const initStore = initialState =>
  createStore(combined, initialState,applyMiddleware(...middleware));
