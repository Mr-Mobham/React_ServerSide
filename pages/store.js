import { createStore, applyMiddleware ,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import action from '../action/test';
import {reducer} from '../reducer/index/notification/notifications';

/// dispatch ///

export const dp_notification = (item) => dispatch => {
  return dispatch({
    type : "Notification",
    data : item
  })
}

export const dp_remove_notification = (value) => dispatch => {
  return dispatch({
    type : "REMOVE_Notification",
    index : value
  })
}

export const dp_title_subject = (value) => dispatch => {
  return dispatch({
    type : "TITLE--SUBJECTS",
    data : value
  })
}

export const dp_subjects = (value) => dispatch => {
  return dispatch({
    type : "SUBJECTS",
    data : value
  })
}

export const dp_sub_subjects = (value) => dispatch => {
  return dispatch({
    type : "SUB_SUBJECTS",
    data : value
  })
}
export const dp_last_subjects = (value) => dispatch => {
  return dispatch({
    type : "LAST_SUBJECTS",
    data : value
  })
}


export const dp_last_posts_advice = (value) => dispatch => {
  return dispatch({
    type : "LAST_POSTS_ADVICE",
    data : value
  })
}















export const initStore = (initialState) => {
  return createStore(
    reducer,
     initialState,
      applyMiddleware(thunkMiddleware,logger))
}
