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

var _store_comments = require('../../../../../pages/store_comments');

var _answer_unlike = require('../../../../buttons/comments/answer_unlike');

var _answer_unlike2 = _interopRequireDefault(_answer_unlike);

var _answer_like = require('../../../../buttons/comments/answer_like');

var _answer_like2 = _interopRequireDefault(_answer_like);

var _answer_date = require('../../../../buttons/comments/answer_date');

var _answer_date2 = _interopRequireDefault(_answer_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\comments\\advices\\comments\\answer\\child_answer.js';


var Child_Answer = function (_Component) {
  (0, _inherits3.default)(Child_Answer, _Component);

  function Child_Answer() {
    (0, _classCallCheck3.default)(this, Child_Answer);

    return (0, _possibleConstructorReturn3.default)(this, (Child_Answer.__proto__ || (0, _getPrototypeOf2.default)(Child_Answer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Child_Answer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.Fn_like();
      this.Fn_unlike();
    }
  }, {
    key: 'Fn_unlike',
    value: function Fn_unlike() {
      var Arry = [];
      var props = this.props;
      var content = props.contact;

      this.unlike_comment = [content].map(function (text, index) {
        return _react2.default.createElement(_answer_unlike2.default, { key: index, content: text, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        });
      });
    }
  }, {
    key: 'Fn_like',
    value: function Fn_like() {
      var Arry = [];
      var content = this.props.contact;

      this.like_comment = [content].map(function (text, index) {
        return _react2.default.createElement(_answer_like2.default, { key: index, content: text, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        });
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

      this.like_comment = [content].map(function (text, index) {
        return _react2.default.createElement(_answer_like2.default, { key: index, content: text, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        });
      });
    }
  }, {
    key: 'fn_unlike',
    value: function fn_unlike(nextProps) {
      var Arry = [];
      var content = nextProps.contact;

      this.unlike_comment = [content].map(function (text, index) {
        return _react2.default.createElement(_answer_unlike2.default, { key: index, content: text, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var content = props.contact;

      return _react2.default.createElement('div', { className: 'items', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('div', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('aside', { className: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('div', { className: 'user right', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('a', { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('div', { className: 'avatar ', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('svg', { version: '1.1', className: 'user_default ', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', x: '0px', y: '0px', width: '95.926px', height: '95.926px', viewBox: '0 0 95.926 95.926', style: { enableBackground: 'new 0 0 95.926 95.926' }, xmlSpace: 'preserve', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('path', { d: 'M47.893,47.221c11.768,0,21.341-10.592,21.341-23.611S59.66,0,47.893,0C36.125,0,26.55,10.592,26.55,23.61\r C26.55,36.63,36.125,47.221,47.893,47.221z', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement('path', { d: 'M72.477,44.123c-1.244-0.269-2.524,0.272-3.192,1.355C61.65,57.847,49.34,58.204,47.962,58.204\r s-13.687-0.357-21.32-12.722c-0.67-1.085-1.953-1.628-3.198-1.354C6.868,47.777,2.497,72.798,3.789,93.115\r c0.101,1.58,1.411,2.811,2.994,2.811h82.36c1.583,0,2.894-1.23,2.993-2.811C93.429,72.775,89.057,47.74,72.477,44.123z', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }))), _react2.default.createElement('div', { className: 'info right', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('h3', { className: 'title ', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, '\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631 \u0645\u0634\u0627\u0648\u0631'), _react2.default.createElement('h3', { className: 'one', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, '\u0645\u0634\u0627\u0648\u0631 \u0627\u0648\u0644'))))), _react2.default.createElement('aside', { className: 'left post_item', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('div', { className: 'post', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('div', { className: 'right nav-top', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('h3', { className: 'title right', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, '\u0645\u0648\u0636\u0648\u0639 \u0627\u0648\u0644'), _react2.default.createElement('div', { className: 'left date_time', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, this.unlike_comment, this.like_comment, _react2.default.createElement(_answer_date2.default, { content: content, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      })), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })), _react2.default.createElement('div', { className: 'descriptions', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement('div', { className: 'description', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, content.description), _react2.default.createElement('img', { src: 'http://localhost:4000/icon/img/quotations.svg', className: 'quotation right', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement('div', { className: 'attachment right', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), _react2.default.createElement('div', { className: 'right min_attachment', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement('div', { className: 'attachment right', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('a', { href: '#', className: 'link', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('img', { src: 'http://localhost:4000/icon/img/attachment-clip.svg', className: 'icon_attach right', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), _react2.default.createElement('h3', { className: 'right title', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, '\u067E\u06CC\u0648\u0633\u062A \u0627\u0648\u0644'))), _react2.default.createElement('div', { className: 'attachment right', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('a', { href: '#', className: 'link', __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement('img', { src: 'http://localhost:4000/icon/img/attachment-clip.svg', className: 'icon_attach right', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), _react2.default.createElement('h3', { className: 'right title', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, '\u067E\u06CC\u0648\u0633\u062A \u0627\u0648\u0644'))), _react2.default.createElement('button', { type: 'button', className: 'left answer', name: 'button', __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, '\u067E\u0627\u0633\u062E'), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      })), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      })), _react2.default.createElement('div', { className: 'backlight', __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement('img', { src: 'http://localhost:4000/icon/img/arrow_forum.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }))), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      })));
    }
  }]);

  return Child_Answer;
}(_react.Component);

exports.default = Child_Answer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbW1lbnRzXFxhZHZpY2VzXFxjb21tZW50c1xcYW5zd2VyXFxjaGlsZF9hbnN3ZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJzdG9yZV9Db21tZW50cyIsImRwX3VubGlrZV9jb21tZW50IiwiQW5zd2VyX1VuTGlrZSIsIkFuc3dlcl9MaWtlIiwiQW5zd2VyX0RhdGUiLCJDaGlsZF9BbnN3ZXIiLCJGbl9saWtlIiwiRm5fdW5saWtlIiwiQXJyeSIsInByb3BzIiwiY29udGVudCIsImNvbnRhY3QiLCJ1bmxpa2VfY29tbWVudCIsIm1hcCIsInRleHQiLCJpbmRleCIsImxpa2VfY29tbWVudCIsIm5leHRQcm9wcyIsImZuX2xpa2UiLCJmbl91bmxpa2UiLCJlbmFibGVCYWNrZ3JvdW5kIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFDSSxBQUNBLEFBRUU7O0FBQ0wsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBaUI7Ozs7Ozs7OztJQUduQixBOzs7Ozs7Ozs7Ozt5Q0FDaUIsQUFDbkI7V0FBQSxBQUFLLEFBQ0w7V0FBQSxBQUFLLEFBQ047Ozs7Z0NBQ1UsQUFDVDtVQUFNLE9BQU4sQUFBb0IsQUFDcEI7VUFBTSxRQUFjLEtBQXBCLEFBQXlCLEFBQ3pCO1VBQU0sVUFBYyxNQUFwQixBQUEwQixBQUUxQjs7V0FBQSxBQUFLLGtCQUFpQixBQUFDLFNBQUQsQUFBVSxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU0sT0FBUSxBQUM5QzsrQkFDRSxBQUFDLHlDQUFjLEtBQWYsQUFBb0IsT0FBTyxTQUEzQixBQUFzQztzQkFBdEM7d0JBREYsQUFDRSxBQUVMO0FBRks7U0FBQTtBQUZOLEFBQXNCLEFBS3ZCLE9BTHVCOzs7OzhCQU1mLEFBQ1A7VUFBTSxPQUFOLEFBQWtCLEFBQ2xCO1VBQU0s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QjtzQkFBQSxBQUNFO0FBREY7Z0RBQ08sS0FBTCxBQUFTLHNEQUFxRCxXQUE5RCxBQUF3RTtvQkFBeEU7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBVk4sQUFPRSxBQUNFLEFBRUUsQUFHSix3RUFBQSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0MsZUFBYyxNQUE5QyxBQUFtRDtvQkFBbkQ7c0JBQUE7QUFBQTtTQWJGLEFBYUUsQUFDQSxvRUFBSyxXQUFMLEFBQWU7b0JBQWY7c0JBckJKLEFBT0UsQUFjRSxBQUVGO0FBRkU7a0RBRUcsV0FBTCxBQUFlO29CQUFmO3NCQXBDSixBQWFFLEFBdUJFLEFBRUY7QUFGRTsyQkFFRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxLQUFMLEFBQVM7b0JBQVQ7c0JBM0ROLEFBb0JFLEFBc0NFLEFBQ0UsQUFHSjtBQUhJO21EQUdDLFdBQUwsQUFBZTtvQkFBZjtzQkFoRU4sQUFDRSxBQUNFLEFBOERFLEFBSVQ7QUFKUzs7Ozs7O0FBdEhhLEEsQUErSDNCOztrQkFBQSxBQUFnQiIsImZpbGUiOiJjaGlsZF9hbnN3ZXIuanMiLCJzb3VyY2VSb290IjoiQzoveGFtcHAvaHRkb2NzL1JlYWN0L05ldy1mb2xkZXIifQ==