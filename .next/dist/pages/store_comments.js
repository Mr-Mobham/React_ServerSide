'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store_Comments = exports.dp_like_answer_comment = exports.dp_unlike_answer_comment = exports.dp_update_len_comments = exports.dp_adding_comments = exports.dp_textarea = exports.dp_unlike_comment = exports.dp_like_comment = exports.dp_answer_count = exports.dp_answer_comments = exports.dp_comments = undefined;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _test = require('../action/test');

var _test2 = _interopRequireDefault(_test);

var _notifications = require('../reducer/index/notification/notifications');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/// dispatch ///

var dp_comments = exports.dp_comments = function dp_comments(item) {
  return function (dispatch) {
    return dispatch({
      type: "COMMENTS",
      data: item
    });
  };
};

var dp_answer_comments = exports.dp_answer_comments = function dp_answer_comments(item) {
  return function (dispatch) {
    return dispatch({
      type: "ANSWER",
      data: item
    });
  };
};

var dp_answer_count = exports.dp_answer_count = function dp_answer_count(item) {
  return function (dispatch) {
    return dispatch({
      type: "LEN--COMMENT",
      len: item
    });
  };
};

var dp_like_comment = exports.dp_like_comment = function dp_like_comment(item, val) {
  return function (dispatch) {
    return dispatch({
      type: "LIKE--COMMENT",
      like: item,
      index: val
    });
  };
};

var dp_unlike_comment = exports.dp_unlike_comment = function dp_unlike_comment(item, val) {
  return function (dispatch) {
    return dispatch({
      type: "UNLIKE--COMMENT",
      unlike: item,
      index: val
    });
  };
};

var dp_textarea = exports.dp_textarea = function dp_textarea(item) {
  return function (dispatch) {
    return dispatch({
      type: "TEXTAREA",
      data: item
    });
  };
};

var dp_adding_comments = exports.dp_adding_comments = function dp_adding_comments(item, val, name, date_time) {
  return function (dispatch) {
    return dispatch({
      type: "ADDING--COMMENTS",
      data: item,
      id: val,
      author: name,
      date: date_time
    });
  };
};

var dp_update_len_comments = exports.dp_update_len_comments = function dp_update_len_comments(data, val) {
  return function (dispatch) {
    return dispatch({
      type: "UPDATE--LEN",
      data: data,
      counter: val
    });
  };
};

var dp_unlike_answer_comment = exports.dp_unlike_answer_comment = function dp_unlike_answer_comment(item, val) {
  return function (dispatch) {
    return dispatch({
      type: "ANSWER--UNLIKE--COMMENT",
      unlike: item,
      id: val
    });
  };
};

var dp_like_answer_comment = exports.dp_like_answer_comment = function dp_like_answer_comment(item, val) {
  return function (dispatch) {
    return dispatch({
      type: "ANSWER--LIKE--COMMENT",
      like: item,
      id: val
    });
  };
};

var store_Comments = exports.store_Comments = function store_Comments(initialState) {
  return (0, _redux.createStore)(_notifications.reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxLogger2.default));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzdG9yZV9jb21tZW50cy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbWJpbmVSZWR1Y2VycyIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJ0aHVua01pZGRsZXdhcmUiLCJsb2dnZXIiLCJhY3Rpb24iLCJyZWR1Y2VyIiwiZHBfY29tbWVudHMiLCJpdGVtIiwiZGlzcGF0Y2giLCJ0eXBlIiwiZGF0YSIsImRwX2Fuc3dlcl9jb21tZW50cyIsImRwX2Fuc3dlcl9jb3VudCIsImxlbiIsImRwX2xpa2VfY29tbWVudCIsInZhbCIsImxpa2UiLCJpbmRleCIsImRwX3VubGlrZV9jb21tZW50IiwidW5saWtlIiwiZHBfdGV4dGFyZWEiLCJkcF9hZGRpbmdfY29tbWVudHMiLCJuYW1lIiwiZGF0ZV90aW1lIiwiaWQiLCJhdXRob3IiLCJkYXRlIiwiZHBfdXBkYXRlX2xlbl9jb21tZW50cyIsImNvdW50ZXIiLCJkcF91bmxpa2VfYW5zd2VyX2NvbW1lbnQiLCJkcF9saWtlX2Fuc3dlcl9jb21tZW50Iiwic3RvcmVfQ29tbWVudHMiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFTLEFBQWEsQUFBaUI7O0FBQ3ZDLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFjOzs7O0FBRXRCLEFBRUE7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsWUFBQSxBQUFDLE1BQUQ7U0FBVSxvQkFBWSxBQUMvQzs7WUFBZ0IsQUFDUCxBQUNQO1lBRkYsQUFBTyxBQUFTLEFBRVAsQUFFVjtBQUppQixBQUNkLEtBREs7QUFEa0I7QUFBcEIsQUFRUDs7QUFBTyxJQUFNLGtEQUFvQixTQUFwQixBQUFvQixtQkFBQSxBQUFDLE1BQUQ7U0FBVSxvQkFBWSxBQUNyRDs7WUFBZ0IsQUFDUCxBQUNQO1lBRkYsQUFBTyxBQUFTLEFBRVAsQUFFVjtBQUppQixBQUNkLEtBREs7QUFEd0I7QUFBMUIsQUFPUDs7QUFBTyxJQUFNLDRDQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE1BQUQ7U0FBVSxvQkFBWSxBQUNuRDs7WUFBZ0IsQUFDUCxBQUNQO1dBRkYsQUFBTyxBQUFTLEFBRVAsQUFFVjtBQUppQixBQUNkLEtBREs7QUFEc0I7QUFBeEIsQUFPUDs7QUFBTyxJQUFNLDRDQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE1BQUQsQUFBTSxLQUFOO1NBQWMsb0JBQVksQUFDdkQ7O1lBQWdCLEFBQ0wsQUFDVDtZQUZjLEFBRUwsQUFDVDthQUhGLEFBQU8sQUFBUyxBQUdMLEFBRVo7QUFMaUIsQUFDZCxLQURLO0FBRHNCO0FBQXhCLEFBU1A7O0FBQU8sSUFBTSxnREFBb0IsU0FBcEIsQUFBb0Isa0JBQUEsQUFBQyxNQUFELEFBQU0sS0FBTjtTQUFjLG9CQUFZLEFBQ3pEOztZQUFnQixBQUNILEFBQ1g7Y0FGYyxBQUVILEFBQ1g7YUFIRixBQUFPLEFBQVMsQUFHSCxBQUVkO0FBTGlCLEFBQ2QsS0FESztBQUR3QjtBQUExQixBQVNQOztBQUFPLElBQU0sb0NBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxNQUFEO1NBQVUsb0JBQVksQUFDL0M7O1lBQWdCLEFBQ0EsQUFDZDtZQUZGLEFBQU8sQUFBUyxBQUVBLEFBRWpCO0FBSmlCLEFBQ2QsS0FESztBQURrQjtBQUFwQixBQVFQOztBQUFPLElBQU0sa0RBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsTUFBRCxBQUFNLEtBQU4sQUFBVSxNQUFWLEFBQWUsV0FBZjtTQUE2QixvQkFBWSxBQUN6RTs7WUFBZ0IsQUFDSCxBQUNYO1lBRmMsQUFFSCxBQUNYO1VBSGMsQUFHSCxBQUNYO2NBSmMsQUFJSCxBQUNYO1lBTEYsQUFBTyxBQUFTLEFBS0gsQUFFZDtBQVBpQixBQUNkLEtBREs7QUFEeUI7QUFBM0IsQUFXUDs7QUFBTyxJQUFNLDBEQUF5QixTQUF6QixBQUF5Qix1QkFBQSxBQUFDLE1BQUQsQUFBTSxLQUFOO1NBQWMsb0JBQVksQUFDOUQ7O1lBQWdCLEFBQ0gsQUFDWDtZQUZjLEFBRUgsQUFDWDtlQUhGLEFBQU8sQUFBUyxBQUdILEFBRWQ7QUFMaUIsQUFDZCxLQURLO0FBRDZCO0FBQS9CLEFBU1A7O0FBQU8sSUFBTSw4REFBMkIsU0FBM0IsQUFBMkIseUJBQUEsQUFBQyxNQUFELEFBQU0sS0FBTjtTQUFjLG9CQUFZLEFBQ2hFOztZQUFnQixBQUNILEFBQ1g7Y0FGYyxBQUVILEFBQ1g7VUFIRixBQUFPLEFBQVMsQUFHSCxBQUVkO0FBTGlCLEFBQ2QsS0FESztBQUQrQjtBQUFqQyxBQVFQOztBQUFPLElBQU0sMERBQXlCLFNBQXpCLEFBQXlCLHVCQUFBLEFBQUMsTUFBRCxBQUFNLEtBQU47U0FBYyxvQkFBWSxBQUM5RDs7WUFBZ0IsQUFDSCxBQUNYO1lBRmMsQUFFSCxBQUNYO1VBSEYsQUFBTyxBQUFTLEFBR0gsQUFFZDtBQUxpQixBQUNkLEtBREs7QUFENkI7QUFBL0IsQUEyQlA7O0FBQU8sSUFBTSwwQ0FBaUIsU0FBakIsQUFBaUIsZUFBQSxBQUFDLGNBQWlCLEFBQzlDO1NBQU8sQUFDTCxnREFESyxBQUVKLGNBRkgsQUFBTyxBQUdILEFBQWdCLEFBQWdCLEFBQ3JDO0FBTE0iLCJmaWxlIjoic3RvcmVfY29tbWVudHMuanMiLCJzb3VyY2VSb290IjoiQzoveGFtcHAvaHRkb2NzL1JlYWN0L05ldy1mb2xkZXIifQ==