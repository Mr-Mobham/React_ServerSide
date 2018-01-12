"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Global = {
  Notification: [],
  Subjects: [],
  Sub_Subjects: [],
  Title_Subjects: [],
  Last_Subjects: [],
  Last_Post_Advice: [],
  Comment_Len: [],
  Like_Comment: [],
  Answer_value: []
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Global;
  var action = arguments[1];

  switch (action.type) {
    case "Notification":
      {
        var data = action.data;
        state = (0, _extends3.default)({}, state, { Notification: data
        });
        break;
      }
    case "REMOVE_Notification":
      {
        var index = action.index;
        state = (0, _extends3.default)({}, state, {
          Notification: [].concat((0, _toConsumableArray3.default)(state.Notification.slice(0, index)), (0, _toConsumableArray3.default)(state.Notification.slice(index + 1)))

        });
        break;
      }

    // subjects //
    case "TITLE--SUBJECTS":
      {
        var _data = action.data;
        state = (0, _extends3.default)({}, state, { Title_Subjects: _data
        });
        break;
      }
    case "SUBJECTS":
      {
        var _data2 = action.data;
        state = (0, _extends3.default)({}, state, { Subjects: _data2
        });
        break;
      }
    case "SUB_SUBJECTS":
      {
        var _data3 = action.data;
        state = (0, _extends3.default)({}, state, { Sub_Subjects: _data3
        });
        break;
      }
    case "LAST_SUBJECTS":
      {
        var _data4 = action.data;
        state = (0, _extends3.default)({}, state, { Last_Subjects: _data4
        });
        break;
      }
    case "LAST_POSTS_ADVICE":
      {
        var _data5 = action.data;
        state = (0, _extends3.default)({}, state, { Last_Post_Advice: _data5
        });
        break;
      }

    /// comments //
    case "COMMENTS":
      {
        var _data6 = action.data;
        state = (0, _extends3.default)({}, state, { Comments: _data6
        });
        break;
      }
    case "ANSWER":
      {
        var _data7 = action.data;
        state = (0, _extends3.default)({}, state, { Answer: _data7
        });
        break;
      }
    case "LEN--COMMENT":
      {
        var len = action.len;
        state = (0, _extends3.default)({}, state, { Comment_Len: len
        });
        break;
      }
    case "LIKE--COMMENT":
      {
        var plus = '';
        var like = action.like;
        var _index2 = action.index;
        var total = state.Comments[_index2].like_comment;
        total += 1;
        return (0, _extends3.default)({}, state, {
          Comments: [].concat((0, _toConsumableArray3.default)(state.Comments.slice(0, _index2)), [(0, _extends3.default)({}, state.Comments[_index2], { like_comment: total })], (0, _toConsumableArray3.default)(state.Comments.slice(_index2 + 1)))

        });

        break;
      }
    case "UNLIKE--COMMENT":
      {
        var unlike = action.unlike;
        var _index3 = action.index;
        var _total = state.Comments[_index3].unlike;
        _total += -1;
        return (0, _extends3.default)({}, state, {
          Comments: [].concat((0, _toConsumableArray3.default)(state.Comments.slice(0, _index3)), [(0, _extends3.default)({}, state.Comments[_index3], { unlike: _total })], (0, _toConsumableArray3.default)(state.Comments.slice(_index3 + 1)))
        });
        break;
      }
    case "TEXTAREA":
      {
        var _data8 = action.data;

        state = (0, _extends3.default)({}, state, { Answer_value: _data8
        });
        break;
      }
    case "ADDING--COMMENTS":
      {
        var sum = 0;
        var _data9 = action.data;
        var author = action.author;
        var parent_id = action.id;
        var date = action.date;

        if (_data9 != '') {
          state.Answer.map(function (text, index) {
            sum++;
          });
          var obj = {
            parent_id: parent_id,
            description: _data9,
            id: sum + 1,
            like_comment: 0,
            author: author,
            unlike: 0,
            dynamic_date: date
          };
          state.Answer_value = "";
          return (0, _extends3.default)({}, state, {
            Answer: [].concat((0, _toConsumableArray3.default)(state.Answer), [obj])
          });
        }
        break;
      }
    case "UPDATE--LEN":
      {
        var _plus = '';
        var counter = 0;
        var id = action.data;
        var val = action.counter;
        var _index = '';
        state.Comments.map(function (text, index) {
          if (text.id == id) {
            _index = index;
          }
        });
        return (0, _extends3.default)({}, state, {
          Comments: [].concat((0, _toConsumableArray3.default)(state.Comments.slice(0, _index)), [(0, _extends3.default)({}, state.Comments[_index], { count: val + 1 })], (0, _toConsumableArray3.default)(state.Comments.slice(_index + 1)))
        });

        break;
      }
    case "ANSWER--UNLIKE--COMMENT":
      {
        var _id = action.id;
        var _index = '';
        state.Answer.map(function (text, index) {
          if (text.id == _id) {
            _index = index;
          }
        });
        var _total2 = state.Answer[_index].unlike;
        _total2 += -1;
        return (0, _extends3.default)({}, state, {
          Answer: [].concat((0, _toConsumableArray3.default)(state.Answer.slice(0, _index)), [(0, _extends3.default)({}, state.Answer[_index], { unlike: _total2 })], (0, _toConsumableArray3.default)(state.Answer.slice(_index + 1)))
        });

        break;
      }

    case "ANSWER--LIKE--COMMENT":
      {
        var _id2 = action.id;
        var _index = '';
        state.Answer.map(function (text, index) {
          if (text.id == _id2) {
            _index = index;
          }
        });
        var _total3 = state.Answer[_index].like_comment;
        _total3 += 1;
        return (0, _extends3.default)({}, state, {
          Answer: [].concat((0, _toConsumableArray3.default)(state.Answer.slice(0, _index)), [(0, _extends3.default)({}, state.Answer[_index], { like_comment: _total3 })], (0, _toConsumableArray3.default)(state.Answer.slice(_index + 1)))
        });

        break;
      }

  }
  return state;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJcXGluZGV4XFxub3RpZmljYXRpb25cXG5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiR2xvYmFsIiwiTm90aWZpY2F0aW9uIiwiU3ViamVjdHMiLCJTdWJfU3ViamVjdHMiLCJUaXRsZV9TdWJqZWN0cyIsIkxhc3RfU3ViamVjdHMiLCJMYXN0X1Bvc3RfQWR2aWNlIiwiQ29tbWVudF9MZW4iLCJMaWtlX0NvbW1lbnQiLCJBbnN3ZXJfdmFsdWUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsImluZGV4Iiwic2xpY2UiLCJDb21tZW50cyIsIkFuc3dlciIsImxlbiIsInBsdXMiLCJsaWtlIiwidG90YWwiLCJsaWtlX2NvbW1lbnQiLCJ1bmxpa2UiLCJzdW0iLCJhdXRob3IiLCJwYXJlbnRfaWQiLCJpZCIsImRhdGUiLCJtYXAiLCJ0ZXh0Iiwib2JqIiwiZGVzY3JpcHRpb24iLCJkeW5hbWljX2RhdGUiLCJjb3VudGVyIiwidmFsIiwiX2luZGV4IiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTTtnQkFBUyxBQUNNLEFBQ25CO1lBRmEsQUFFTSxBQUNuQjtnQkFIYSxBQUdNLEFBQ25CO2tCQUphLEFBSU0sQUFDbkI7aUJBTGEsQUFLTSxBQUNuQjtvQkFOYSxBQU1NLEFBQ25CO2VBUGEsQUFPTSxBQUNuQjtnQkFSYSxBQVFNLEFBQ25CO2dCQVRGLEFBQWUsQUFTTSxBQUtyQjtBQWRlLEFBQ2I7O0FBYUssSUFBTSw0QkFBVSxTQUFWLEFBQVUsVUFBNEI7TUFBM0IsQUFBMkIsNEVBQW5CLEFBQW1CO01BQVgsQUFBVyxtQkFDakQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQWU7QUFDbEI7WUFBTSxPQUFPLE9BQWIsQUFBb0IsQUFDcEI7MkNBQUEsQUFDTyxTQUFNLGNBRGIsQUFDMkIsQUFFekI7O0FBQ0g7QUFDRDtTQUFBLEFBQUssQUFBc0I7QUFDekI7WUFBTSxR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