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

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\buttons\\comments\\answer_unlike.js';


var Answer_UnLike = function (_Component) {
  (0, _inherits3.default)(Answer_UnLike, _Component);

  function Answer_UnLike() {
    (0, _classCallCheck3.default)(this, Answer_UnLike);

    return (0, _possibleConstructorReturn3.default)(this, (Answer_UnLike.__proto__ || (0, _getPrototypeOf2.default)(Answer_UnLike)).apply(this, arguments));
  }

  (0, _createClass3.default)(Answer_UnLike, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ delegate: false });
    }
  }, {
    key: 'UnLike',
    value: function UnLike() {
      var props = this.props;
      var content = props.content;

      this.props.Sb_UnLike_Answer(content.unlike, content.id);
      this.setState({ delegate: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var content = props.content;

      return _react2.default.createElement('button', { type: 'button', className: 'right like', name: 'button', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('h3', { className: 'Number right', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, content.unlike), _react2.default.createElement('img', { src: 'http://localhost:4000/icon/img/minus11.svg', onClick: this.UnLike.bind(this), className: 'Negative right', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);

  return Answer_UnLike;
}(_react.Component);

function mapStateToProps(state) {
  return {
    Answer: state.Answer
  };
}
// checked code daynmic component //

var mapDisPatchToProps = function mapDisPatchToProps(dispatch, props) {
  return {
    Sb_UnLike_Answer: function Sb_UnLike_Answer(unlike, id) {
      dispatch((0, _store_comments.dp_unlike_answer_comment)(unlike, id));
      var url = 'http://localhost:4000/answer_comments/' + id;
      _axios2.default.put(url, {
        method: 'PUT',
        data: {
          unlike: unlike - 1
        }
      });
    }
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store_comments.store_Comments, mapStateToProps, mapDisPatchToProps)(Answer_UnLike);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJ1dHRvbnNcXGNvbW1lbnRzXFxhbnN3ZXJfdW5saWtlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInN0b3JlX0NvbW1lbnRzIiwiZHBfdW5saWtlX2Fuc3dlcl9jb21tZW50IiwiYXhpb3MiLCJBbnN3ZXJfVW5MaWtlIiwic2V0U3RhdGUiLCJkZWxlZ2F0ZSIsInByb3BzIiwiY29udGVudCIsIlNiX1VuTGlrZV9BbnN3ZXIiLCJ1bmxpa2UiLCJpZCIsIlVuTGlrZSIsImJpbmQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIkFuc3dlciIsIm1hcERpc1BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidXJsIiwicHV0IiwibWV0aG9kIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPOzs7O0FBQ1AsQUFDSSxBQUNBLEFBRUU7O0FBQ0wsQUFBTzs7Ozs7Ozs7O0lBR0QsQTs7Ozs7Ozs7Ozs7eUNBQ2lCLEFBQ25CO1dBQUEsQUFBSyxTQUFTLEVBQUMsVUFBZixBQUFjLEFBQVUsQUFDekI7Ozs7NkJBQ1MsQUFDUjtVQUFNLFFBQVUsS0FBaEIsQUFBcUIsQUFDckI7VUFBTSxVQUFVLE1BQWhCLEFBQXNCLEFBRXRCOztXQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFpQixRQUE1QixBQUFvQyxRQUFPLFFBQTNDLEFBQW1ELEFBQ25EO1dBQUEsQUFBSyxTQUFTLEVBQUMsVUFBZixBQUFjLEFBQVUsQUFDekI7Ozs7NkJBQ1MsQUFDUDtVQUFNLFFBQVUsS0FBaEIsQUFBcUIsQUFDckI7VUFBTSxVQUFVLE1BQWhCLEFBQXNCLEFBRXBCOzs2QkFDRSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0MsY0FBYSxNQUE3QyxBQUFrRDtvQkFBbEQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUE4QjtBQUE5QjtpQkFERixBQUNFLEFBQXNDLEFBQ3RDLGdEQUFLLEtBQUwsQUFBUyw4Q0FBNkMsU0FBUyxLQUFBLEFBQUssT0FBTCxBQUFZLEtBQTNFLEFBQStELEFBQWlCLE9BQU8sV0FBdkYsQUFBaUc7b0JBQWpHO3NCQUZGLEFBRUUsQUFDQTtBQURBO2lEQUNLLFdBQUwsQUFBZTtvQkFBZjtzQkFKSixBQUNFLEFBR0UsQUFHUDtBQUhPOzs7Ozs7QSxBQW5CaUI7O0FBd0I3QixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsT0FBTyxBQUM5Qjs7WUFDVSxNQURWLEFBQU0sQUFDVSxBQUVqQjtBQUhPLEFBQ0o7O0FBR0o7O0FBRUEsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFELEFBQVUsT0FBUyxBQUM1Qzs7c0JBQ21CLDBCQUFBLEFBQUMsUUFBRCxBQUFRLElBQUssQUFDNUI7ZUFBVSw4Q0FBQSxBQUF5QixRQUFuQyxBQUFVLEFBQWdDLEFBQ3hDO1VBQU0saURBQU4sQUFBMEQsQUFDMUQ7c0JBQUEsQUFBTSxJQUFOLEFBQVU7Z0JBQUksQUFDSixBQUNSOztrQkFDVyxTQUhiLEFBQWMsQUFFSixBQUNZLEFBR3pCO0FBSmEsQUFDTjtBQUhVLEFBQ1o7QUFMUixBQUFNLEFBYVA7QUFiTyxBQUNKO0FBRkosQUFpQkE7O2tCQUFlLEFBQVEsZ0VBQVIsQUFBdUIsaUJBQXZCLEFBQXdDLG9CQUF2RCxBQUFlLEFBQTREIiwiZmlsZSI6ImFuc3dlcl91bmxpa2UuanMiLCJzb3VyY2VSb290IjoiQzoveGFtcHAvaHRkb2NzL1JlYWN0L05ldy1mb2xkZXIifQ==