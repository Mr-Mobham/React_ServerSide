'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _store_comments = require('../../../pages/store_comments');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\buttons\\comments\\answer_comments.js';


var Answer_Comment = function (_Component) {
  (0, _inherits3.default)(Answer_Comment, _Component);

  function Answer_Comment() {
    (0, _classCallCheck3.default)(this, Answer_Comment);

    return (0, _possibleConstructorReturn3.default)(this, (Answer_Comment.__proto__ || (0, _getPrototypeOf2.default)(Answer_Comment)).apply(this, arguments));
  }

  (0, _createClass3.default)(Answer_Comment, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'Answer',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var counter, props, content, comment, JDate, jdate, date, Answer, name_user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                counter = 0;
                props = this.props;
                content = props.Answer_value;
                comment = props.content;
                _context.next = 6;
                return typeof window === 'undefined' ? new (require('next\\dist\\lib\\dynamic.js').SameLoopPromise)(function (resolve, reject) {
                  eval('require.ensure = function (deps, callback) { callback(require) }');

                  require.ensure([], function (require) {
                    var m = require('jalali-date');

                    m.__webpackChunkName = 'jalali_date_b1347b71660b1574189617511ff5ef63.js';
                    resolve(m);
                  }, 'chunks/jalali_date_b1347b71660b1574189617511ff5ef63.js');
                }) : new (require('next\\dist\\lib\\dynamic.js').SameLoopPromise)(function (resolve, reject) {
                  var weakId = require.resolveWeak('jalali-date');

                  try {
                    var weakModule = __webpack_require__(weakId);

                    return resolve(weakModule);
                  } catch (err) {}

                  require.ensure([], function (require) {
                    try {
                      var m = require('jalali-date');

                      resolve(m);
                    } catch (error) {
                      reject(error);
                    }
                  }, 'chunks/jalali_date_b1347b71660b1574189617511ff5ef63.js');
                });

              case 6:
                JDate = _context.sent;
                jdate = new JDate();
                date = jdate.format('DD MMMM YYYY');
                Answer = props.Answer;
                name_user = comment.author; // check other time auth //

                Answer.map(function (text, index) {
                  if (comment.id == text.parent_id) {
                    counter++;
                  }
                });
                if (content != '') {
                  this.props.Sb_Send_Data(content, comment.id, name_user, date);
                  this.props.Len_Comment(comment, counter);
                }

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function Answer() {
        return _ref.apply(this, arguments);
      }

      return Answer;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'left min_button ', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('button', { type: 'button', className: 'left answer coursor', name: 'button', onClick: this.Answer.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, '\u067E\u0627\u0633\u062E'));
    }
  }]);

  return Answer_Comment;
}(_react.Component);

function mapStateToProps(state) {
  return {
    Answer_value: state.Answer_value,
    Answer: state.Answer
  };
}

var mapDisPatchToProps = function mapDisPatchToProps(dispatch, props) {
  return {
    Sb_Send_Data: function Sb_Send_Data(data, id, author, date) {
      dispatch((0, _store_comments.dp_adding_comments)(data, id, author, date));
      var url = 'http://localhost:4000/answer_comments';

      _axios2.default.post(url, {
        method: 'POST',
        data: {
          parent_id: id,
          description: data,
          like_comment: 0,
          author: author,
          unlike: 0,
          dynamic_date: date
        }
      });
    },
    Len_Comment: function Len_Comment(data, val) {
      dispatch((0, _store_comments.dp_update_len_comments)(data.id, val));
      var url = 'http://localhost:4000/comments/' + data.id;
      _axios2.default.put(url, {
        method: 'PUT',
        data: {
          count: val + 1
        }
      });
    }
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store_comments.store_Comments, mapStateToProps, mapDisPatchToProps)(Answer_Comment);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJ1dHRvbnNcXGNvbW1lbnRzXFxhbnN3ZXJfY29tbWVudHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Iiwic3RvcmVfQ29tbWVudHMiLCJkcF9hZGRpbmdfY29tbWVudHMiLCJkcF91cGRhdGVfbGVuX2NvbW1lbnRzIiwiYXhpb3MiLCJBbnN3ZXJfQ29tbWVudCIsImNvdW50ZXIiLCJwcm9wcyIsImNvbnRlbnQiLCJBbnN3ZXJfdmFsdWUiLCJjb21tZW50IiwiSkRhdGUiLCJqZGF0ZSIsImRhdGUiLCJmb3JtYXQiLCJBbnN3ZXIiLCJuYW1lX3VzZXIiLCJhdXRob3IiLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJpZCIsInBhcmVudF9pZCIsIlNiX1NlbmRfRGF0YSIsIkxlbl9Db21tZW50IiwiYmluZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzUGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJkYXRhIiwidXJsIiwicG9zdCIsIm1ldGhvZCIsImRlc2NyaXB0aW9uIiwibGlrZV9jb21tZW50IiwidW5saWtlIiwiZHluYW1pY19kYXRlIiwidmFsIiwicHV0IiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPOzs7O0FBQ1AsQUFDSSxBQUNBLEFBQ0EsQUFFRTs7QUFDTCxBQUFPOzs7Ozs7Ozs7SUFHRCxBOzs7Ozs7Ozs7Ozt5Q0FDaUIsQUFDcEI7Ozs7Ozs7OzttQkFFSztBLDBCQUFlLEEsQUFDYjtBLHdCQUFhLEssQUFBSyxBQUNsQjtBLDBCQUFhLE1BQU0sQSxBQUNuQjtBLDBCQUFhLE1BQU0sQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFDbkI7QSxpQ0FDQTtBLHdCQUFhLElBQUEsQSxBQUFJLEFBQ2pCO0EsdUJBQWEsTUFBQSxBQUFNLE8sQUFBTixBQUFhLEFBQzFCO0EseUJBQWEsTUFBTSxBLEFBQ25CO0EsNEJBQWEsUSxBQUFRLFFBQVMsQUFFcEM7O3VCQUFBLEFBQU8sSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFNLE9BQVEsQUFDdkI7c0JBQUksUUFBQSxBQUFRLE1BQU0sS0FBbEIsQUFBdUIsV0FBVyxBQUMvQjtBQUNGO0FBQ0Y7QUFKRCxBQUtBO29CQUFJLFdBQUosQUFBZSxJQUFJLEFBQ2pCO3VCQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsU0FBUSxRQUFoQyxBQUF3QyxJQUF4QyxBQUEyQyxXQUEzQyxBQUFxRCxBQUNyRDt1QkFBQSxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLFNBQXZCLEFBQStCLEFBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUlPLEFBQ0w7NkJBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0MsdUJBQXNCLE1BQXRELEFBQTJELFVBQVMsU0FBUyxLQUFBLEFBQUssT0FBTCxBQUFZLEtBQXpGLEFBQTZFLEFBQWlCO29CQUE5RjtzQkFBQTtBQUFBO1NBRkYsQUFDQSxBQUNFLEFBR0w7Ozs7O0EsQUFoQ3lCOztBQW9DOUIsU0FBQSxBQUFTLGdCQUFULEFBQXlCLE9BQU8sQUFDOUI7O2tCQUNnQixNQURWLEFBQ2dCLEFBQ3BCO1lBQWMsTUFGaEIsQUFBTSxBQUVnQixBQUV2QjtBQUpPLEFBQ0o7OztBQUtKLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBRCxBQUFVLE9BQVMsQUFDNUM7O2tCQUNlLHNCQUFBLEFBQUMsTUFBRCxBQUFNLElBQU4sQUFBUyxRQUFULEFBQWdCLE1BQU8sQUFDbEM7ZUFBVSx3Q0FBQSxBQUFtQixNQUFuQixBQUF3QixJQUF4QixBQUEyQixRQUFyQyxBQUFVLEFBQWtDLEFBQzFDO1VBQU0sTUFBTixBQUVBOztzQkFBQSxBQUFNLEtBQU4sQUFBVztnQkFBSSxBQUNMLEFBQ1I7O3FCQUFRLEFBQ1UsQUFDaEI7dUJBRk0sQUFFVSxBQUNoQjt3QkFITSxBQUdVLEFBQ2hCO2tCQUpNLEFBSVUsQUFDaEI7a0JBTE0sQUFLVSxBQUNoQjt3QkFSSixBQUFlLEFBRUwsQUFNVSxBQUd2QjtBQVRhLEFBQ047QUFIVyxBQUNiO0FBTkYsQUFpQko7aUJBQVkscUJBQUEsQUFBQyxNQUFELEFBQU0sS0FBTSxBQUN0QjtlQUFTLDRDQUF1QixLQUF2QixBQUE0QixJQUFyQyxBQUFTLEFBQStCLEFBQ3hDO1VBQU0sMENBQTZDLEtBQW5ELEFBQXdELEFBQ3hEO3NCQUFBLEFBQU0sSUFBTixBQUFVO2dCQUFJLEFBQ0osQUFDUjs7aUJBQ1csTUFIYixBQUFjLEFBRUosQUFDUyxBQUlwQjtBQUxXLEFBQ047QUFIVSxBQUNaO0FBckJOLEFBQU0sQUE4QlA7QUE5Qk8sQUFDSjtBQUZKLEFBa0NBOztrQkFBZSxBQUFRLGdFQUFSLEFBQXVCLGlCQUF2QixBQUF3QyxvQkFBdkQsQUFBZSxBQUE0RCIsImZpbGUiOiJhbnN3ZXJfY29tbWVudHMuanMiLCJzb3VyY2VSb290IjoiQzoveGFtcHAvaHRkb2NzL1JlYWN0L05ldy1mb2xkZXIifQ==