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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\buttons\\comments\\count_comments.js';


var Count_Comment = function (_Component) {
  (0, _inherits3.default)(Count_Comment, _Component);

  function Count_Comment() {
    (0, _classCallCheck3.default)(this, Count_Comment);

    return (0, _possibleConstructorReturn3.default)(this, (Count_Comment.__proto__ || (0, _getPrototypeOf2.default)(Count_Comment)).apply(this, arguments));
  }

  (0, _createClass3.default)(Count_Comment, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var content = props.content;

      return _react2.default.createElement('button', { type: 'button', className: 'right like', name: 'button', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('img', { src: 'http://localhost:4000/icon/img/black-bubble-speech.svg', className: 'Square right', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement('h3', { className: 'Number right', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, content.count), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
  }]);

  return Count_Comment;
}(_react.Component);

exports.default = Count_Comment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJ1dHRvbnNcXGNvbW1lbnRzXFxjb3VudF9jb21tZW50cy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImF4aW9zIiwiQ291bnRfQ29tbWVudCIsInByb3BzIiwiY29udGVudCIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU87Ozs7Ozs7OztJQUdBLEE7Ozs7Ozs7Ozs7OzZCQUVNLEFBQ1A7VUFBTSxRQUFXLEtBQWpCLEFBQXNCLEFBQ3RCO1VBQU0sVUFBVyxNQUFqQixBQUF1QixBQUVyQjs7NkJBQ0UsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFdBQXRCLEFBQWdDLGNBQWEsTUFBN0MsQUFBa0Q7b0JBQWxEO3NCQUFBLEFBQ0U7QUFERjtPQUFBLHlDQUNPLEtBQUwsQUFBUywwREFBeUQsV0FBbEUsQUFBNEU7b0JBQTVFO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFBOEI7QUFBOUI7aUJBRkYsQUFFRSxBQUFzQyxBQUN0QywrQ0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBSkosQUFDRSxBQUdFLEFBR1A7QUFITzs7Ozs7O0FBVmlCLEEsQUFnQjdCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNvdW50X2NvbW1lbnRzLmpzIiwic291cmNlUm9vdCI6IkM6L3hhbXBwL2h0ZG9jcy9SZWFjdC9OZXctZm9sZGVyIn0=