'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _child_answer = require('./child_answer');

var _child_answer2 = _interopRequireDefault(_child_answer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\comments\\advices\\comments\\answer\\answer.js';


var Answer = function (_Component) {
  (0, _inherits3.default)(Answer, _Component);

  function Answer() {
    (0, _classCallCheck3.default)(this, Answer);

    return (0, _possibleConstructorReturn3.default)(this, (Answer.__proto__ || (0, _getPrototypeOf2.default)(Answer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Answer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.Answer();
    }
  }, {
    key: 'Answer',
    value: function Answer() {
      var _this2 = this;

      var Arry = [];
      var props = this.props;
      var answer = props.answer;
      var contact = props.contact;

      answer.map(function (text, index) {
        var len_Arry = [];
        if (text.parent_id == contact.id) {
          Arry = [].concat((0, _toConsumableArray3.default)(Arry), [text]);
          _this2.answer = Arry.map(function (contact, index2) {
            return _react2.default.createElement(_child_answer2.default, { key: index2, contact: contact, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            });
          });
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.Update_Answer(nextProps);
    }
  }, {
    key: 'Update_Answer',
    value: function Update_Answer(nextProps) {
      var _this3 = this;

      var Arry = [];
      var props = nextProps;
      var answer = props.answer;
      var contact = props.contact;

      answer.map(function (text, index) {
        var len_Arry = [];
        if (text.parent_id == contact.id) {
          Arry = [].concat((0, _toConsumableArray3.default)(Arry), [text]);
          _this3.answer = Arry.map(function (contact, index2) {
            return _react2.default.createElement(_child_answer2.default, { key: index2, contact: contact, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            });
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, this.answer);
    }
  }]);

  return Answer;
}(_react.Component);

exports.default = Answer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbW1lbnRzXFxhZHZpY2VzXFxjb21tZW50c1xcYW5zd2VyXFxhbnN3ZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDaGlsZF9BbnN3ZXIiLCJBbnN3ZXIiLCJBcnJ5IiwicHJvcHMiLCJhbnN3ZXIiLCJjb250YWN0IiwibWFwIiwidGV4dCIsImluZGV4IiwibGVuX0FycnkiLCJwYXJlbnRfaWQiLCJpZCIsImluZGV4MiIsIm5leHRQcm9wcyIsIlVwZGF0ZV9BbnN3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU8sQUFBa0I7Ozs7Ozs7OztJQUduQixBOzs7Ozs7Ozs7Ozt5Q0FDaUIsQUFDbkI7V0FBQSxBQUFLLEFBQ047Ozs7NkJBQ087bUJBQ047O1VBQUksT0FBSixBQUFnQixBQUNoQjtVQUFNLFFBQVUsS0FBaEIsQUFBcUIsQUFDckI7VUFBTSxTQUFVLE1BQWhCLEFBQXNCLEFBQ3RCO1VBQU0sVUFBVSxNQUFoQixBQUFzQixBQUV0Qjs7YUFBQSxBQUFPLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTSxPQUFRLEFBQ3ZCO1lBQUksV0FBSixBQUFnQixBQUNoQjtZQUFJLEtBQUEsQUFBSyxhQUFhLFFBQXRCLEFBQThCLElBQUksQUFDaEM7NERBQUEsQUFBVyxRQUFYLEFBQWdCLEFBQ2hCO2lCQUFBLEFBQUssY0FBUyxBQUFLLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxRQUFTLEFBQ3ZDO21DQUNFLEFBQUMsd0NBQWEsS0FBZCxBQUFtQixRQUFRLFNBQTNCLEFBQW9DOzBCQUFwQzs0QkFERixBQUNFLEFBRUg7QUFGRzthQUFBO0FBRkosQUFBYyxBQUtmLFdBTGU7QUFNakI7QUFWRCxBQVdEOzs7OzhDQUN5QixBLFdBQVcsQUFDbkM7V0FBQSxBQUFLLGNBQUwsQUFBbUIsQUFDcEI7Ozs7a0MsQUFDYSxXQUFVO21CQUN0Qjs7VUFBSSxPQUFKLEFBQWdCLEFBQ2hCO1VBQU0sUUFBTixBQUFnQixBQUNoQjtVQUFNLFNBQVUsTUFBaEIsQUFBc0IsQUFDdEI7VUFBTSxVQUFVLE1BQWhCLEFBQXNCLEFBRXRCOzthQUFBLEFBQU8sSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFNLE9BQVEsQUFDdkI7WUFBSSxXQUFKLEFBQWdCLEFBQ2hCO1lBQUksS0FBQSxBQUFLLGFBQWEsUUFBdEIsQUFBOEIsSUFBSSxBQUNoQzs0REFBQSxBQUFXLFFBQVgsQUFBZ0IsQUFDaEI7aUJBQUEsQUFBSyxjQUFTLEFBQUssSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFTLFFBQVMsQUFDdkM7bUNBQ0UsQUFBQyx3Q0FBYSxLQUFkLEFBQW1CLFFBQVEsU0FBM0IsQUFBb0M7MEJBQXBDOzRCQURGLEFBQ0UsQUFFSDtBQUZHO2FBQUE7QUFGSixBQUFjLEFBS2YsV0FMZTtBQU1qQjtBQVZELEFBV0Q7Ozs7NkJBRVUsQUFDTDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxPQUFBLE9BREYsQUFDRSxBQUNRLEFBR2I7Ozs7O0FBbERnQixBLEFBcURyQjs7a0JBQUEsQUFBZ0IiLCJmaWxlIjoiYW5zd2VyLmpzIiwic291cmNlUm9vdCI6IkM6L3hhbXBwL2h0ZG9jcy9SZWFjdC9OZXctZm9sZGVyIn0=