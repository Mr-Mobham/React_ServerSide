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

var _answer = require('../answer/answer');

var _answer2 = _interopRequireDefault(_answer);

var _child_contact = require('./child_contact');

var _child_contact2 = _interopRequireDefault(_child_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\comments\\advices\\comments\\contact\\comment_contact.js';


var Comment_Contact = function (_Component) {
  (0, _inherits3.default)(Comment_Contact, _Component);

  function Comment_Contact() {
    (0, _classCallCheck3.default)(this, Comment_Contact);

    return (0, _possibleConstructorReturn3.default)(this, (Comment_Contact.__proto__ || (0, _getPrototypeOf2.default)(Comment_Contact)).apply(this, arguments));
  }

  (0, _createClass3.default)(Comment_Contact, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var contact = props.contact;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('aside', { className: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('div', { className: 'user right', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('a', { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('div', { className: 'avatar ', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('svg', { version: '1.1', className: 'user_default ', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', x: '0px', y: '0px', width: '95.926px', height: '95.926px', viewBox: '0 0 95.926 95.926', style: { enableBackground: 'new 0 0 95.926 95.926' }, xmlSpace: 'preserve', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('path', { d: 'M47.893,47.221c11.768,0,21.341-10.592,21.341-23.611S59.66,0,47.893,0C36.125,0,26.55,10.592,26.55,23.61\r C26.55,36.63,36.125,47.221,47.893,47.221z', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('path', { d: 'M72.477,44.123c-1.244-0.269-2.524,0.272-3.192,1.355C61.65,57.847,49.34,58.204,47.962,58.204\r s-13.687-0.357-21.32-12.722c-0.67-1.085-1.953-1.628-3.198-1.354C6.868,47.777,2.497,72.798,3.789,93.115\r c0.101,1.58,1.411,2.811,2.994,2.811h82.36c1.583,0,2.894-1.23,2.993-2.811C93.429,72.775,89.057,47.74,72.477,44.123z', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }))), _react2.default.createElement('div', { className: 'info right', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('h3', { className: 'title ', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, '\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631 \u0645\u0634\u0627\u0648\u0631'), _react2.default.createElement('h3', { className: 'one', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, contact.author))))), _react2.default.createElement('aside', { className: 'left post_item', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_child_contact2.default, { contact: contact, count: props.count, index: props.index, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement(_answer2.default, { answer: props.answer, contact: contact, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }));
    }
  }]);

  return Comment_Contact;
}(_react.Component);

exports.default = Comment_Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbW1lbnRzXFxhZHZpY2VzXFxjb21tZW50c1xcY29udGFjdFxcY29tbWVudF9jb250YWN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQW5zd2VyIiwiQ2hpbGRfQ29udGFjdCIsIkNvbW1lbnRfQ29udGFjdCIsInByb3BzIiwiY29udGFjdCIsImVuYWJsZUJhY2tncm91bmQiLCJhdXRob3IiLCJjb3VudCIsImluZGV4IiwiYW5zd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQW1COzs7Ozs7Ozs7SSxBQUduQjs7Ozs7Ozs7Ozs7eUNBQ2lCLEFBRXBCOzs7NkJBQ1MsQUFDUDtVQUFNLFFBQVUsS0FBaEIsQUFBcUIsQUFDckI7VUFBTSxVQUFVLE1BQWhCLEFBQXNCLEFBRXBCOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsV0FBTyxXQUFQLEFBQWlCO29CQUFqQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUTtvQkFBUjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFNBQUwsQUFBYSxPQUFNLFdBQW5CLEFBQTZCLGlCQUFnQixPQUE3QyxBQUFtRCw4QkFBNkIsWUFBaEYsQUFBMkYsZ0NBQStCLEdBQTFILEFBQTRILE9BQU0sR0FBbEksQUFBb0ksT0FBTSxPQUExSSxBQUFnSixZQUFXLFFBQTNKLEFBQWtLLFlBQVcsU0FBN0ssQUFBcUwscUJBQW9CLE9BQU8sRUFBQyxrQkFBak4sQUFBZ04sQUFBbUIsMkJBQTBCLFVBQTdQLEFBQXNRO29CQUF0UTtzQkFBQSxBQUNFO0FBREY7aURBQ1EsR0FBTixBQUFRO29CQUFSO3NCQURGLEFBQ0UsQUFFQTtBQUZBO2tEQUVNLEdBQU4sQUFBUTtvQkFBUjtzQkFMTixBQUNFLEFBQ0UsQUFHRSxBQUtKO0FBTEk7NEJBS0osY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLHFHQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFBcUI7QUFBckI7aUJBZlYsQUFDRSxBQUNFLEFBQ0UsQUFVRSxBQUVFLEFBQTZCLEFBS3JDLDZCQUFBLGNBQUEsV0FBTyxXQUFQLEFBQWlCO29CQUFqQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBYyxTQUFmLEFBQXdCLFNBQVMsT0FBTyxNQUF4QyxBQUE4QyxPQUFPLE9BQU8sTUFBNUQsQUFBa0U7b0JBQWxFO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsa0NBQU8sUUFBUSxNQUFoQixBQUFzQixRQUFRLFNBQTlCLEFBQXVDO29CQUF2QztzQkF0QkosQUFvQkUsQUFFRSxBQUVGO0FBRkU7a0RBRUcsV0FBTCxBQUFlO29CQUFmO3NCQXpCSixBQUNFLEFBd0JFLEFBR1A7QUFITzs7Ozs7O0FBakNtQixBLEFBd0MvQjs7a0JBQUEsQUFBZ0IiLCJmaWxlIjoiY29tbWVudF9jb250YWN0LmpzIiwic291cmNlUm9vdCI6IkM6L3hhbXBwL2h0ZG9jcy9SZWFjdC9OZXctZm9sZGVyIn0=