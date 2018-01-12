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

var _store_comments = require('../../../pages/store_comments');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\buttons\\comments\\like.js';


var Like = function (_Component) {
  (0, _inherits3.default)(Like, _Component);

  function Like() {
    (0, _classCallCheck3.default)(this, Like);

    return (0, _possibleConstructorReturn3.default)(this, (Like.__proto__ || (0, _getPrototypeOf2.default)(Like)).apply(this, arguments));
  }

  (0, _createClass3.default)(Like, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ delegate: false });
    }
  }, {
    key: 'Like',
    value: function Like() {
      var props = this.props;
      var content = props.content;
      var index = props.index;

      this.props.Sb_Like_Comment(content.like_comment, index, content.id);
      this.setState({ delegate: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var content = props.content;

      return _react2.default.createElement('button', { type: 'button', className: 'right like', name: 'button', onClick: this.Like.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('h3', { className: 'Number right', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, content.like_comment), _react2.default.createElement('svg', { version: '1.1', fill: '#358500', className: 'Negative right', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', x: '0px', y: '0px', width: '16px', height: '16px', viewBox: '0 0 16 16', enableBackground: 'new 0 0 16 16', xmlSpace: 'preserve', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('path', { d: 'M8.5,1C4.358,1,1,4.358,1,8.5C1,12.643,4.358,16,8.5,16c4.143,0,7.5-3.357,7.5-7.5C16,4.358,12.643,1,8.5,1z M12.5,9H9v3.5\r C9,12.775,8.775,13,8.5,13C8.224,13,8,12.775,8,12.5V9H4.5C4.224,9,4,8.775,4,8.5C4,8.224,4.224,8,4.5,8H8V4.5\r C8,4.224,8.224,4,8.5,4C8.775,4,9,4.224,9,4.5V8h3.5C12.775,8,13,8.224,13,8.5C13,8.775,12.775,9,12.5,9z', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }));
    }
  }]);

  return Like;
}(_react.Component);

function mapStateToProps(state) {
  return {
    Commets: state.Commets
  };
}

var mapDisPatchToProps = function mapDisPatchToProps(dispatch, props) {
  return {
    Sb_Like_Comment: function Sb_Like_Comment(like, index, id) {
      dispatch((0, _store_comments.dp_like_comment)(like, index));
      var url = 'http://localhost:4000/count_aswer/' + id;
      _axios2.default.put(url, {
        method: 'PUT',
        data: {
          like: like + 1
        }
      });
    }
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store_comments.store_Comments, mapStateToProps, mapDisPatchToProps)(Like);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJ1dHRvbnNcXGNvbW1lbnRzXFxsaWtlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInN0b3JlX0NvbW1lbnRzIiwiZHBfbGlrZV9jb21tZW50IiwiYXhpb3MiLCJMaWtlIiwic2V0U3RhdGUiLCJkZWxlZ2F0ZSIsInByb3BzIiwiY29udGVudCIsImluZGV4IiwiU2JfTGlrZV9Db21tZW50IiwibGlrZV9jb21tZW50IiwiaWQiLCJiaW5kIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJDb21tZXRzIiwibWFwRGlzUGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJsaWtlIiwidXJsIiwicHV0IiwibWV0aG9kIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPOzs7O0FBQ1AsQUFDSSxBQUNBLEFBRUU7O0FBQ0wsQUFBTzs7Ozs7Ozs7O0lBSUQsQTs7Ozs7Ozs7Ozs7eUNBQ2lCLEFBQ25CO1dBQUEsQUFBSyxTQUFTLEVBQUMsVUFBZixBQUFjLEFBQVUsQUFDekI7Ozs7MkJBQ08sQUFDTjtVQUFNLFFBQVUsS0FBaEIsQUFBcUIsQUFDckI7VUFBTSxVQUFVLE1BQWhCLEFBQXNCLEFBQ3RCO1VBQU0sUUFBVSxNQUFoQixBQUFzQixBQUV0Qjs7V0FBQSxBQUFLLE1BQUwsQUFBVyxnQkFBZ0IsUUFBM0IsQUFBbUMsY0FBbkMsQUFBZ0QsT0FBTSxRQUF0RCxBQUE4RCxBQUM5RDtXQUFBLEFBQUssU0FBUyxFQUFDLFVBQWYsQUFBYyxBQUFVLEFBQ3pCOzs7OzZCQUNTLEFBQ1A7VUFBTSxRQUFVLEtBQWhCLEFBQXFCLEFBQ3JCO1VBQU0sVUFBVSxNQUFoQixBQUFzQixBQUVwQjs7NkJBQ0UsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFdBQXRCLEFBQWdDLGNBQWEsTUFBN0MsQUFBa0QsVUFBUyxTQUFTLEtBQUEsQUFBSyxLQUFMLEFBQVUsS0FBOUUsQUFBb0UsQUFBZTtvQkFBbkY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUE4QjtBQUE5QjtpQkFERixBQUNFLEFBQXNDLEFBQ3RDLCtCQUFBLGNBQUEsU0FBSyxTQUFMLEFBQWEsT0FBTSxNQUFuQixBQUF3QixXQUFVLFdBQWxDLEFBQTRDLGtCQUFpQixPQUE3RCxBQUFtRSw4QkFBNkIsWUFBaEcsQUFBMkcsZ0NBQStCLEdBQTFJLEFBQTRJLE9BQU0sR0FBbEosQUFBb0osT0FBTSxPQUExSixBQUFnSyxRQUFPLFFBQXZLLEFBQThLLFFBQU8sU0FBckwsQUFBNkwsYUFBWSxrQkFBek0sQUFBME4saUJBQWdCLFVBQTFPLEFBQW1QO29CQUFuUDtzQkFBQSxBQUNFO0FBREY7aURBQ1EsR0FBTixBQUFRO29CQUFSO3NCQUhKLEFBRUUsQUFDRSxBQUlGO0FBSkU7a0RBSUcsV0FBTCxBQUFlO29CQUFmO3NCQVJKLEFBQ0UsQUFPRSxBQUdQO0FBSE87Ozs7OztBQXhCUSxBOztBQThCcEIsU0FBQSxBQUFTLGdCQUFULEFBQXlCLE9BQU8sQUFDOUI7O2FBQ1csTUFEWCxBQUFNLEFBQ1csQUFFbEI7QUFITyxBQUNKOzs7QUFJSixJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQUQsQUFBVSxPQUFTLEFBQzVDOztxQkFDa0IseUJBQUEsQUFBQyxNQUFELEFBQU0sT0FBTixBQUFZLElBQUssQUFDN0I7ZUFBVSxxQ0FBQSxBQUFnQixNQUExQixBQUFVLEFBQXFCLEFBQy9CO1VBQU0sNkNBQU4sQUFBc0QsQUFDdEQ7c0JBQUEsQUFBTSxJQUFOLEFBQVU7Z0JBQUksQUFDSixBQUNSOztnQkFDUyxPQUhYLEFBQWMsQUFFSixBQUNRLEFBR3JCO0FBSmEsQUFDTjtBQUhVLEFBQ1o7QUFMUixBQUFNLEFBYVA7QUFiTyxBQUNKO0FBRkosQUFpQkE7O2tCQUFlLEFBQVEsZ0VBQVIsQUFBdUIsaUJBQXZCLEFBQXdDLG9CQUF2RCxBQUFlLEFBQTREIiwiZmlsZSI6Imxpa2UuanMiLCJzb3VyY2VSb290IjoiQzoveGFtcHAvaHRkb2NzL1JlYWN0L05ldy1mb2xkZXIifQ==