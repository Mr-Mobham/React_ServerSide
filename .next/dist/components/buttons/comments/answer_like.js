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

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\buttons\\comments\\answer_like.js';


var Answer_Like = function (_Component) {
  (0, _inherits3.default)(Answer_Like, _Component);

  function Answer_Like() {
    (0, _classCallCheck3.default)(this, Answer_Like);

    return (0, _possibleConstructorReturn3.default)(this, (Answer_Like.__proto__ || (0, _getPrototypeOf2.default)(Answer_Like)).apply(this, arguments));
  }

  (0, _createClass3.default)(Answer_Like, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ delegate: false });
    }
  }, {
    key: 'Like',
    value: function Like() {
      var props = this.props;
      var content = props.content;

      this.props.Sb_Like_Comment(content.like_comment, content.id);
      this.setState({ delegate: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var content = props.content;

      return _react2.default.createElement('button', { type: 'button', className: 'right like', name: 'button', onClick: this.Like.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('h3', { className: 'Number right', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, content.like_comment), _react2.default.createElement('svg', { version: '1.1', fill: '#358500', className: 'Negative right', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', x: '0px', y: '0px', width: '16px', height: '16px', viewBox: '0 0 16 16', enableBackground: 'new 0 0 16 16', xmlSpace: 'preserve', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('path', { d: 'M8.5,1C4.358,1,1,4.358,1,8.5C1,12.643,4.358,16,8.5,16c4.143,0,7.5-3.357,7.5-7.5C16,4.358,12.643,1,8.5,1z M12.5,9H9v3.5\r C9,12.775,8.775,13,8.5,13C8.224,13,8,12.775,8,12.5V9H4.5C4.224,9,4,8.775,4,8.5C4,8.224,4.224,8,4.5,8H8V4.5\r C8,4.224,8.224,4,8.5,4C8.775,4,9,4.224,9,4.5V8h3.5C12.775,8,13,8.224,13,8.5C13,8.775,12.775,9,12.5,9z', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }));
    }
  }]);

  return Answer_Like;
}(_react.Component);

function mapStateToProps(state) {
  return {
    Commets: state.Commets
  };
}

var mapDisPatchToProps = function mapDisPatchToProps(dispatch, props) {
  return {
    Sb_Like_Comment: function Sb_Like_Comment(like, id) {
      dispatch((0, _store_comments.dp_like_answer_comment)(like, id));
      var url = 'http://localhost:4000/answer_comments/' + id;
      console.log(url);
      _axios2.default.put(url, {
        method: 'PUT',
        data: {
          like: like + 1
        }
      });
    }
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store_comments.store_Comments, mapStateToProps, mapDisPatchToProps)(Answer_Like);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJ1dHRvbnNcXGNvbW1lbnRzXFxhbnN3ZXJfbGlrZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdG9yZV9Db21tZW50cyIsImRwX2xpa2VfYW5zd2VyX2NvbW1lbnQiLCJheGlvcyIsIkFuc3dlcl9MaWtlIiwic2V0U3RhdGUiLCJkZWxlZ2F0ZSIsInByb3BzIiwiY29udGVudCIsIlNiX0xpa2VfQ29tbWVudCIsImxpa2VfY29tbWVudCIsImlkIiwiTGlrZSIsImJpbmQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIkNvbW1ldHMiLCJtYXBEaXNQYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImxpa2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwicHV0IiwibWV0aG9kIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPOzs7O0FBQ1AsQUFDSSxBQUNBLEFBRUU7O0FBQ0wsQUFBTzs7Ozs7Ozs7O0lBSUQsQTs7Ozs7Ozs7Ozs7eUNBQ2lCLEFBQ25CO1dBQUEsQUFBSyxTQUFTLEVBQUMsVUFBZixBQUFjLEFBQVUsQUFDekI7Ozs7MkJBQ08sQUFDTjtVQUFNLFFBQVUsS0FBaEIsQUFBcUIsQUFDckI7VUFBTSxVQUFVLE1BQWhCLEFBQXNCLEFBRXRCOztXQUFBLEFBQUssTUFBTCxBQUFXLGdCQUFnQixRQUEzQixBQUFtQyxjQUFhLFFBQWhELEFBQXdELEFBQ3hEO1dBQUEsQUFBSyxTQUFTLEVBQUMsVUFBZixBQUFjLEFBQVUsQUFDekI7Ozs7NkJBQ1MsQUFDUDtVQUFNLFFBQVUsS0FBaEIsQUFBcUIsQUFDckI7VUFBTSxVQUFVLE1BQWhCLEFBQXNCLEFBRXBCOzs2QkFDRSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0MsY0FBYSxNQUE3QyxBQUFrRCxVQUFTLFNBQVMsS0FBQSxBQUFLLEtBQUwsQUFBVSxLQUE5RSxBQUFvRSxBQUFlO29CQUFuRjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBLEFBQThCO0FBQTlCO2lCQURGLEFBQ0UsQUFBc0MsQUFDdEMsK0JBQUEsY0FBQSxTQUFLLFNBQUwsQUFBYSxPQUFNLE1BQW5CLEFBQXdCLFdBQVUsV0FBbEMsQUFBNEMsa0JBQWlCLE9BQTdELEFBQW1FLDhCQUE2QixZQUFoRyxBQUEyRyxnQ0FBK0IsR0FBMUksQUFBNEksT0FBTSxHQUFsSixBQUFvSixPQUFNLE9BQTFKLEFBQWdLLFFBQU8sUUFBdkssQUFBOEssUUFBTyxTQUFyTCxBQUE2TCxhQUFZLGtCQUF6TSxBQUEwTixpQkFBZ0IsVUFBMU8sQUFBbVA7b0JBQW5QO3NCQUFBLEFBQ0U7QUFERjtpREFDUSxHQUFOLEFBQVE7b0JBQVI7c0JBSEosQUFFRSxBQUNFLEFBSUY7QUFKRTtrREFJRyxXQUFMLEFBQWU7b0JBQWY7c0JBUkosQUFDRSxBQU9FLEFBR1A7QUFITzs7Ozs7O0EsQUF2QmU7O0FBNkIzQixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsT0FBTyxBQUM5Qjs7YUFDVyxNQURYLEFBQU0sQUFDVyxBQUVsQjtBQUhPLEFBQ0o7OztBQUlKLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBRCxBQUFVLE9BQVMsQUFDNUM7O3FCQUNrQix5QkFBQSxBQUFDLE1BQUQsQUFBTSxJQUFLLEFBQ3ZCO2VBQVUsNENBQUEsQUFBdUIsTUFBakMsQUFBVSxBQUE0QixBQUN0QztVQUFNLGlEQUFOLEFBQTBELEFBQzFEO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtzQkFBQSxBQUFNLElBQU4sQUFBVTtnQkFBSSxBQUNKLEFBQ1I7O2dCQUNTLE9BSFgsQUFBYyxBQUVKLEFBQ1EsQUFHckI7QUFKYSxBQUNOO0FBSFUsQUFDWjtBQU5SLEFBQU0sQUFjUDtBQWRPLEFBQ0o7QUFGSixBQWtCQTs7a0JBQWUsQUFBUSxnRUFBUixBQUF1QixpQkFBdkIsQUFBd0Msb0JBQXZELEFBQWUsQUFBNEQiLCJmaWxlIjoiYW5zd2VyX2xpa2UuanMiLCJzb3VyY2VSb290IjoiQzoveGFtcHAvaHRkb2NzL1JlYWN0L05ldy1mb2xkZXIifQ==