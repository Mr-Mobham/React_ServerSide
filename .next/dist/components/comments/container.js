'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _min_comments = require('./min_comments');

var _min_comments2 = _interopRequireDefault(_min_comments);

var _nav_top = require('../global/nav_top');

var _nav_top2 = _interopRequireDefault(_nav_top);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\comments\\container.js';


function Container(props) {
  return _react2.default.createElement('section', { className: 'container margin--top', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_nav_top2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_min_comments2.default, {
    comments: props.comments,
    answer: props.answer,
    count: props.count,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
}

exports.default = Container;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbW1lbnRzXFxjb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJNaW5fQ29tbWVudHMiLCJOYXZfVG9wIiwiQ29udGFpbmVyIiwicHJvcHMiLCJjb21tZW50cyIsImFuc3dlciIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBYTs7Ozs7Ozs7O0FBSXBCLFNBQUEsQUFBUyxVQUFULEFBQW1CLE9BQU0sQUFDdkI7eUJBQ0UsY0FBQSxhQUFTLFdBQVQsQUFBbUI7Z0JBQW5CO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQztjQUNlLE1BRGhCLEFBQ3NCLEFBQ3BCO1lBQWMsTUFGaEIsQUFFc0IsQUFDcEI7V0FBYyxNQUhoQixBQUdzQjs7Z0JBSHRCO2tCQUhKLEFBQ0UsQUFFRSxBQVNMO0FBVEs7QUFDRTtBQVdSOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiJDOi94YW1wcC9odGRvY3MvUmVhY3QvTmV3LWZvbGRlciJ9