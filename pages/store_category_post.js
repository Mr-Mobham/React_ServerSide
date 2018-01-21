import { createStore, applyMiddleware ,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import {reducer} from '../reducer/index/notification/notifications';

/// dispatch ///

export const dp_comments = (item) => dispatch => {
  return dispatch({
    type : "COMMENTS",
    data : item
  })
}






















export const store_category_post = (initialState) => {
  return createStore(
    reducer,
     initialState,
      applyMiddleware(thunkMiddleware,logger))
}
