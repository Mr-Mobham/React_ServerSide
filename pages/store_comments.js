import { createStore, applyMiddleware ,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import action from '../action/test';
import {reducer} from '../reducer/index/notification/notifications';

/// dispatch ///

export const dp_comments = (item) => dispatch => {
  return dispatch({
    type : "COMMENTS",
    data : item
  })
}


export const dp_answer_comments= (item) => dispatch => {
  return dispatch({
    type : "ANSWER",
    data : item
  })
}

export const dp_comments_count = (item) => dispatch => {
  return dispatch({
    type : "LEN--COMMENT",
    len  : item
  })
}

export const dp_like_comment = (item,val) => dispatch => {
  return dispatch({
    type   : "LIKE--COMMENT",
    like   : item,
    index  : val
  })
}


export const dp_unlike_comment = (item,val) => dispatch => {
  return dispatch({
    type     : "UNLIKE--COMMENT",
    unlike   : item,
    index    : val
  })
}


export const dp_textarea = (count,data) => dispatch => {
  return dispatch({
    type        : "TEXTAREA",
    id          : count,
    value       : data
  })
}


export const dp_adding_comments = (item,val,name,date_time,counte) => dispatch => {
  return dispatch({
    type            : "ADDING--COMMENTS",
    data            : item,
    id              : val,
    author          : name,
    date            : date_time,
    last_len_answer : counte
  })
}


export const dp_update_len_comments = (data,val) => dispatch => {
  return dispatch({
    type     : "UPDATE--LEN",
    data     : data,
    counter  : val
  })
}


export const dp_unlike_answer_comment = (item,val) => dispatch => {
  return dispatch({
    type     : "ANSWER--UNLIKE--COMMENT",
    unlike   : item,
    id       : val
  })
}

export const dp_like_answer_comment = (item,val) => dispatch => {
  return dispatch({
    type     : "ANSWER--LIKE--COMMENT",
    like     : item,
    id       : val
  })
}



















export const store_Comments = (initialState) => {
  return createStore(
    reducer,
     initialState,
      applyMiddleware(thunkMiddleware,logger))
}
