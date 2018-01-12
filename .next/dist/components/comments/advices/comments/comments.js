'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _comment_contact = require('./contact/comment_contact');

var _comment_contact2 = _interopRequireDefault(_comment_contact);

var _answer = require('./answer/answer');

var _answer2 = _interopRequireDefault(_answer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\comments\\advices\\comments\\comments.js';


var Comments = function (_Component) {
  (0, _inherits3.default)(Comments, _Component);

  function Comments() {
    (0, _classCallCheck3.default)(this, Comments);

    return (0, _possibleConstructorReturn3.default)(this, (Comments.__proto__ || (0, _getPrototypeOf2.default)(Comments)).apply(this, arguments));
  }

  (0, _createClass3.default)(Comments, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var props = this.props;
      var contact = props.comments;
      var count = props.count;
      this.item = contact.map(function (text, index) {
        return _react2.default.createElement(_comment_contact2.default, { key: index, contact: text, answer: props.answer, count: count, index: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        });
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var props = nextProps;
      var contact = props.comments;
      var count = props.count;
      this.item = contact.map(function (text, index) {
        return _react2.default.createElement(_comment_contact2.default, { key: index, contact: text, answer: props.answer, count: count, index: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'items', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, this.item));
    }
  }]);

  return Comments;
}(_react.Component);

exports.default = Comments;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbW1lbnRzXFxhZHZpY2VzXFxjb21tZW50c1xcY29tbWVudHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb21tZW50X0NvbnRhY3QiLCJBbnN3ZXIiLCJDb21tZW50cyIsInByb3BzIiwiY29udGFjdCIsImNvbW1lbnRzIiwiY291bnQiLCJpdGVtIiwibWFwIiwidGV4dCIsImluZGV4IiwiYW5zd2VyIiwibmV4dFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFLYixBOzs7Ozs7Ozs7Ozt5Q0FDaUIsQUFDbkI7VUFBTSxRQUFVLEtBQWhCLEFBQXFCLEFBQ3JCO1VBQU0sVUFBVSxNQUFoQixBQUFzQixBQUN0QjtVQUFNLFFBQVUsTUFBaEIsQUFBc0IsQUFDdEI7V0FBQSxBQUFLLGVBQVEsQUFBUSxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU0sT0FBUSxBQUNyQzsrQkFDSSxBQUFDLDJDQUFnQixLQUFqQixBQUFzQixPQUFPLFNBQTdCLEFBQXNDLE1BQU0sUUFBUSxNQUFwRCxBQUEwRCxRQUFRLE9BQWxFLEFBQXlFLE9BQU8sT0FBaEYsQUFBdUY7c0JBQXZGO3dCQURKLEFBQ0ksQUFFTDtBQUZLO1NBQUE7QUFGTixBQUFhLEFBS2QsT0FMYzs7Ozs4Q0FNVyxBLFdBQVcsQUFDbkM7VUFBTSxRQUFOLEFBQWdCLEFBQ2hCO1VBQU0sVUFBVSxNQUFoQixBQUFzQixBQUN0QjtVQUFNLFFBQVUsTUFBaEIsQUFBc0IsQUFDdEI7V0FBQSxBQUFLLGVBQVEsQUFBUSxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU0sT0FBUSxBQUNyQzsrQkFDSSxBQUFDLDJDQUFnQixLQUFqQixBQUFzQixPQUFPLFNBQTdCLEFBQXNDLE1BQU0sUUFBUSxNQUFwRCxBQUEwRCxRQUFRLE9BQWxFLEFBQXlFLE9BQU8sT0FBaEYsQUFBdUY7c0JBQXZGO3dCQURKLEFBQ0ksQUFFTDtBQUZLO1NBQUE7QUFGTixBQUFhLEFBS2QsT0FMYzs7Ozs2QkFPSixBQUNMOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNHO0FBREg7Y0FGSixBQUNFLEFBQ0UsQUFDUSxBQUlmOzs7OztBQTlCa0IsQSxBQWtDdkI7O2tCQUFBLEFBQWdCIiwiZmlsZSI6ImNvbW1lbnRzLmpzIiwic291cmNlUm9vdCI6IkM6L3hhbXBwL2h0ZG9jcy9SZWFjdC9OZXctZm9sZGVyIn0=