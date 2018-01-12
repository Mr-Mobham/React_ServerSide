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

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store_comments = require('../../../../../pages/store_comments');

var _unlike = require('../../../../buttons/comments/unlike');

var _unlike2 = _interopRequireDefault(_unlike);

var _like = require('../../../../buttons/comments/like');

var _like2 = _interopRequireDefault(_like);

var _count_comments = require('../../../../buttons/comments/count_comments');

var _count_comments2 = _interopRequireDefault(_count_comments);

var _date_comments = require('../../../../buttons/comments/date_comments');

var _date_comments2 = _interopRequireDefault(_date_comments);

var _answer_comments = require('../../../../buttons/comments/answer_comments');

var _answer_comments2 = _interopRequireDefault(_answer_comments);

var _attachment = require('../../../../buttons/comments/attachment');

var _attachment2 = _interopRequireDefault(_attachment);

var _editor = require('../../../../buttons/comments/editor');

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\comments\\advices\\comments\\contact\\child_contact.js';


var Child_content = function (_Component) {
  (0, _inherits3.default)(Child_content, _Component);

  function Child_content() {
    (0, _classCallCheck3.default)(this, Child_content);

    return (0, _possibleConstructorReturn3.default)(this, (Child_content.__proto__ || (0, _getPrototypeOf2.default)(Child_content)).apply(this, arguments));
  }

  (0, _createClass3.default)(Child_content, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.Fn_like();
      this.Fn_unlike();
    }
  }, {
    key: 'Fn_like',
    value: function Fn_like() {
      var Arry = [];
      var props = this.props;
      var content = props.contact;
      var index = props.index;
      var Comments = props.Comments;

      this.like_comment = Comments.map(function (text, index) {
        if (content.id == text.id) {
          return _react2.default.createElement(_like2.default, { key: index, content: text, index: index, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          });
        }
      });
    }
  }, {
    key: 'Fn_unlike',
    value: function Fn_unlike() {
      var Arry = [];
      var props = this.props;
      var content = props.contact;
      var index = props.index;
      var Comments = props.Comments;

      this.unlike_comment = Comments.map(function (text, index) {
        if (content.id == text.id) {
          return _react2.default.createElement(_unlike2.default, { key: index, content: text, index: index, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          });
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.fn_like(nextProps);
      this.fn_unlike(nextProps);
    }
  }, {
    key: 'fn_like',
    value: function fn_like(nextProps) {
      var Arry = [];
      var content = nextProps.contact;
      var index = nextProps.index;
      var Comments = nextProps.Comments;

      this.like_comment = Comments.map(function (text, index) {
        if (content.id == text.id) {
          return _react2.default.createElement(_like2.default, { key: index, content: text, index: index, __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          });
        }
      });
    }
  }, {
    key: 'fn_unlike',
    value: function fn_unlike(nextProps) {
      var Arry = [];
      var content = nextProps.contact;
      var index = nextProps.index;
      var Comments = nextProps.Comments;

      this.unlike_comment = Comments.map(function (text, index) {
        if (content.id == text.id) {
          return _react2.default.createElement(_unlike2.default, { key: index, content: text, index: index, __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var content = props.contact;
      var index = props.index;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('div', { className: 'post', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('div', { className: 'right nav-top', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('h3', { className: 'title right', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, content.title_comment), _react2.default.createElement('div', { className: 'left date_time', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, this.unlike_comment, this.like_comment, _react2.default.createElement(_count_comments2.default, { content: content, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), _react2.default.createElement(_date_comments2.default, { content: content, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      })), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      })), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })), _react2.default.createElement('div', { className: 'descriptions', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement('div', { className: 'description', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, content.desc), _react2.default.createElement('img', { src: 'http://localhost:4000/icon/img/quotations.svg', className: 'quotation right', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), _react2.default.createElement('div', { className: 'attachment right', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), _react2.default.createElement('div', { className: 'right min_attachment', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_editor2.default, { display: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react2.default.createElement(_attachment2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement(_attachment2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react2.default.createElement(_answer_comments2.default, { content: content, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      })), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      })), _react2.default.createElement('div', { className: 'backlight', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement('img', { src: 'http://localhost:4000/icon/img/arrow_forum.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })));
    }
  }]);

  return Child_content;
}(_react.Component);

function mapStateToProps(state) {
  return {
    Comments: state.Comments
  };
}

exports.default = (0, _nextReduxWrapper2.default)(_store_comments.store_Comments, mapStateToProps)(Child_content);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbW1lbnRzXFxhZHZpY2VzXFxjb21tZW50c1xcY29udGFjdFxcY2hpbGRfY29udGFjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdG9yZV9Db21tZW50cyIsImRwX3VwZGF0ZV9sZW4iLCJVbkxpa2UiLCJMaWtlIiwiQ291bnRfQ29tbWVudCIsIkRhdGVfQ29tbWVudCIsIkFuc3dlcl9Db21tZW50IiwiQXR0YWNobWVudCIsIkVkaXRvciIsIkNoaWxkX2NvbnRlbnQiLCJGbl9saWtlIiwiRm5fdW5saWtlIiwiQXJyeSIsInByb3BzIiwiY29udGVudCIsImNvbnRhY3QiLCJpbmRleCIsIkNvbW1lbnRzIiwibGlrZV9jb21tZW50IiwibWFwIiwidGV4dCIsImlkIiwidW5saWtlX2NvbW1lbnQiLCJuZXh0UHJvcHMiLCJmbl9saWtlIiwiZm5fdW5saWtlIiwidGl0bGVfY29tbWVudCIsImRlc2MiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPOzs7O0FBQ1AsQUFDSSxBQUNBLEFBRUU7O0FBQ04sQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFJYjs7Ozs7Ozs7Ozs7eUNBQ21CLEFBQ25CO1dBQUEsQUFBSyxBQUNMO1dBQUEsQUFBSyxBQUNOOzs7OzhCQUNRLEFBQ1A7VUFBTSxPQUFOLEFBQW9CLEFBQ3BCO1VBQU0sUUFBYyxLQUFwQixBQUF5QixBQUN6QjtVQUFNLFVBQWMsTUFBcEIsQUFBMEIsQUFDMUI7VUFBTSxRQUFjLE1BQXBCLEFBQTBCLEFBQzFCO1VBQU0sV0FBYyxN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LEFBQXdCO29CQUF4QjtzQkFIRCxBQUdDLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFhLFNBQWQsQUFBdUI7b0JBQXZCO3NCQU5ILEFBRUUsQUFJQyxBQUVEO0FBRkM7a0RBRUksV0FBTCxBQUFlO29CQUFmO3NCQVRKLEFBQ0UsQUFRRSxBQUVGO0FBRkU7a0RBRUcsV0FBTCxBQUFlO29CQUFmO3NCQVpOLEFBQ0ksQUFXRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNHO0FBREg7aUJBREYsQUFDRSxBQUNXLEFBRVgsOENBQUssS0FBTCxBQUFTLGlEQUFnRCxXQUF6RCxBQUFtRTtvQkFBbkU7c0JBSkYsQUFJRSxBQUNBO0FBREE7aURBQ0ssV0FBTCxBQUFlO29CQUFmO3NCQUxGLEFBS0UsQUFFQTtBQUZBOzBCQUVBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRztBQURIO3lCQUNHLEFBQUMsa0NBQU8sU0FBUixBQUFpQjtvQkFBakI7c0JBREgsQUFDRyxBQUNBO0FBREE7MEJBQ0EsQUFBQzs7b0JBQUQ7c0JBRkgsQUFFRyxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFISCxBQUdHLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMsMkNBQWUsU0FBaEIsQUFBeUI7b0JBQXpCO3NCQUpILEFBSUcsQUFDRDtBQURDO2lEQUNJLFdBQUwsQUFBZTtvQkFBZjtzQkFaSixBQU9FLEFBS0UsQUFFRjtBQUZFO2tEQUVHLFdBQUwsQUFBZTtvQkFBZjtzQkE1Qk4sQUFjSSxBQWNFLEFBRUY7QUFGRTsyQkFFRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxLQUFMLEFBQVM7b0JBQVQ7c0JBaENSLEFBQ0UsQUE4QkksQUFDRSxBQUlYO0FBSlc7Ozs7OztBQXpHVyxBOztBQW1IMUIsU0FBQSxBQUFTLGdCQUFULEFBQXlCLE9BQU8sQUFDOUI7O2NBQ1ksTUFEWixBQUFNLEFBQ1ksQUFFbkI7QUFITyxBQUNKO0FBS0o7O2tCQUFlLEFBQVEsZ0VBQVIsQUFBdUIsaUJBQXRDLEFBQWUsQUFBd0MiLCJmaWxlIjoiY2hpbGRfY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiJDOi94YW1wcC9odGRvY3MvUmVhY3QvTmV3LWZvbGRlciJ9