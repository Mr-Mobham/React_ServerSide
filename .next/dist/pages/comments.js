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

var _store_comments = require('./store_comments');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _head = require('../components/global/head');

var _head2 = _interopRequireDefault(_head);

var _header = require('../components/global/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('../components/global/footer');

var _footer2 = _interopRequireDefault(_footer);

var _container = require('../components/comments/container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\pages\\comments.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement(_container2.default, {
        comments: props.Comments,
        answer: props.Answer,
        count: props.Comment_Len,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement(_footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var store = _ref.store,
            isServer = _ref.isServer;
        var comments_url, comments_res, answer_comments_url, answer_comments_res, answer_count_url, count_res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                comments_url = 'http://localhost:4000/comments';
                _context.next = 3;
                return (0, _axios2.default)({
                  method: 'get',
                  url: comments_url
                });

              case 3:
                comments_res = _context.sent;

                store.dispatch((0, _store_comments.dp_comments)(comments_res.data.item));

                answer_comments_url = 'http://localhost:4000/answer_comments';
                _context.next = 8;
                return (0, _axios2.default)({
                  method: 'get',
                  url: answer_comments_url
                });

              case 8:
                answer_comments_res = _context.sent;

                store.dispatch((0, _store_comments.dp_answer_comments)(answer_comments_res.data.item));

                answer_count_url = 'http://localhost:4000/count_aswer';
                _context.next = 13;
                return (0, _axios2.default)({
                  method: 'get',
                  url: answer_count_url
                });

              case 13:
                count_res = _context.sent;

                store.dispatch((0, _store_comments.dp_answer_count)(count_res.data.item));

                return _context.abrupt('return', { isServer: isServer });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react2.default.Component);

function mapStateToProps(state) {
  return {
    Comments: state.Comments,
    Answer: state.Answer,
    Comment_Len: state.Comment_Len
  };
}

exports.default = (0, _nextReduxWrapper2.default)(_store_comments.store_Comments, mapStateToProps)(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21tZW50cy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJzdG9yZV9Db21tZW50cyIsImRwX2NvbW1lbnRzIiwiZHBfYW5zd2VyX2NvbW1lbnRzIiwiZHBfYW5zd2VyX2NvdW50IiwiYXhpb3MiLCJIZWFkXyIsIkhlYWRlciIsIkZvb3RlciIsIkNvbnRhaW5lciIsIkluZGV4IiwibmV4dFByb3BzIiwicHJvcHMiLCJDb21tZW50cyIsIkFuc3dlciIsIkNvbW1lbnRfTGVuIiwic3RvcmUiLCJpc1NlcnZlciIsImNvbW1lbnRzX3VybCIsIm1ldGhvZCIsInVybCIsImNvbW1lbnRzX3JlcyIsImRpc3BhdGNoIiwiZGF0YSIsIml0ZW0iLCJhbnN3ZXJfY29tbWVudHNfdXJsIiwiYW5zd2VyX2NvbW1lbnRzX3JlcyIsImFuc3dlcl9jb3VudF91cmwiLCJjb3VudF9yZXMiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUSxBQUNOLEFBQ0EsQUFDQSxBQUVJOztBQUNOLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7Ozs7OztJLEFBSWhCOzs7Ozs7Ozs7Ozs4QyxBQTJCc0IsV0FBVyxBQUNwQzs7OzZCQUNTLEFBQ1I7VUFBTSxRQUFRLEtBQWQsQUFBbUIsQUFDbkI7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQztrQkFDYSxNQURkLEFBQ29CLEFBQ2xCO2dCQUFZLE1BRmQsQUFFb0IsQUFDbEI7ZUFBWSxNQUhkLEFBR29COztvQkFIcEI7c0JBSEYsQUFHRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixBQUFDOztvQkFBRDtzQkFWSixBQUNFLEFBU0UsQUFHTDtBQUhLO0FBQUE7Ozs7OztZQXhDMEIsQSxhQUFBLEE7WUFBTyxBLGdCLEFBQUE7Ozs7O21CQUMvQjtBLCtCLEFBQWU7OzswQkFDWSxBQUN0QixBQUNUO3VCQUZ5QixBQUFNLEFBRXRCLEE7QUFGc0IsQUFDL0IsaUJBRHlCOzttQkFBckI7QSx3Q0FJTjs7c0JBQUEsQUFBTSxTQUFTLGlDQUFZLGFBQUEsQUFBYSxLQUF4QyxBQUFlLEFBQThCLEFBR3ZDOztBLHNDQUFzQixBOzs7MEJBQ1ksQUFDN0IsQUFDVDt1QkFGZ0MsQUFBTSxBQUU3QixBO0FBRjZCLEFBQ3RDLGlCQURnQzs7bUJBQTVCO0EsK0NBSU47O3NCQUFBLEFBQU0sU0FBUyx3Q0FBbUIsb0JBQUEsQUFBb0IsS0FBdEQsQUFBZSxBQUE0QyxBQUdyRDs7QSxtQyxBQUFtQjs7OzBCQUNLLEFBQ25CLEFBQ1Q7dUIsQUFGc0IsQUFBTSxBQUVuQjtBQUZtQixBQUM1QixpQkFEc0I7O21CQUFsQjtBLHFDQUlOOztzQkFBQSxBQUFNLFNBQVMscUNBQWdCLFVBQUEsQUFBVSxLQUF6QyxBQUFlLEFBQStCOztpREFFeEMsRUFBQyxVLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6QlUsZ0JBQU0sQTs7QUErQzFCLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixPQUFPLEFBQzlCOztjQUNpQixNQURYLEFBQ2lCLEFBQ3JCO1lBQWUsTUFGWCxBQUVpQixBQUNyQjtpQkFBZSxNQUhqQixBQUFNLEFBR2lCLEFBRXhCO0FBTE8sQUFDSjtBQVNKOztrQkFBZSxBQUFRLGdFQUFSLEFBQXVCLGlCQUF0QyxBQUFlLEFBQXdDIiwiZmlsZSI6ImNvbW1lbnRzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L3hhbXBwL2h0ZG9jcy9SZWFjdC9OZXctZm9sZGVyIn0=