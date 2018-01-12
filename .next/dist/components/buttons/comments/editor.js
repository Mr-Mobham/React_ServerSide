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

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\buttons\\comments\\editor.js';


var Editor = function (_Component) {
  (0, _inherits3.default)(Editor, _Component);

  function Editor() {
    (0, _classCallCheck3.default)(this, Editor);

    return (0, _possibleConstructorReturn3.default)(this, (Editor.__proto__ || (0, _getPrototypeOf2.default)(Editor)).apply(this, arguments));
  }

  (0, _createClass3.default)(Editor, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        delegate: false
      });
    }
  }, {
    key: 'Text_Editor',
    value: function Text_Editor(event) {
      var props = this.props;
      var target = event.target;
      var value = target.value;

      if (value != '') {
        this.props.Sb_Answer_Data(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var display = props.display;
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, display ? _react2.default.createElement('textarea', { name: '', id: '', className: 'editor--textarea', cols: '30', rows: '10', onKeyUp: this.Text_Editor.bind(this), placeholder: '\u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }) : null);
    }
  }]);

  return Editor;
}(_react.Component);

function mapStateToProps(state) {
  return {
    Commets: state.Commets
  };
}

var mapDisPatchToProps = function mapDisPatchToProps(dispatch, props) {
  return {
    Sb_Answer_Data: function Sb_Answer_Data(data) {
      dispatch((0, _store_comments.dp_textarea)(data));
    }
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store_comments.store_Comments, mapStateToProps, mapDisPatchToProps)(Editor);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJ1dHRvbnNcXGNvbW1lbnRzXFxlZGl0b3IuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Iiwic3RvcmVfQ29tbWVudHMiLCJkcF90ZXh0YXJlYSIsImF4aW9zIiwiRWRpdG9yIiwic2V0U3RhdGUiLCJkZWxlZ2F0ZSIsImV2ZW50IiwicHJvcHMiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlNiX0Fuc3dlcl9EYXRhIiwiZGlzcGxheSIsIlRleHRfRWRpdG9yIiwiYmluZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiQ29tbWV0cyIsIm1hcERpc1BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPOzs7O0FBQ1AsQUFDSSxBQUNBLEFBRUU7O0FBQ0wsQUFBTzs7Ozs7Ozs7O0ksQUFLRDs7Ozs7Ozs7Ozs7eUNBQ2tCLEFBQ25CO1dBQUEsQUFBSztrQkFBTCxBQUFjLEFBQ0QsQUFFZDtBQUhlLEFBQ1o7Ozs7Z0MsQUFHUSxPQUFNLEFBQ2hCO1VBQU0sUUFBVSxLQUFoQixBQUFxQixBQUNyQjtVQUFNLFNBQVUsTUFBaEIsQUFBc0IsQUFDdEI7VUFBTSxRQUFVLE9BQWhCLEFBQXVCLEFBRXZCOztVQUFJLFNBQUosQUFBYSxJQUFJLEFBQ2Y7YUFBQSxBQUFLLE1BQUwsQUFBVyxlQUFYLEFBQTBCLEFBQzNCO0FBRUY7Ozs7NkJBQ1EsQUFDUDtVQUFNLFFBQVUsS0FBaEIsQUFBcUIsQUFDckI7VUFBTSxVQUFVLE1BQWhCLEFBQXNCLEFBQ3BCOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBRUU7QUFGRjtBQUFBLE9BQUEsd0RBR1ksTUFBVixBQUFlLElBQUcsSUFBbEIsQUFBcUIsSUFBRyxXQUF4QixBQUFrQyxvQkFBbUIsTUFBckQsQUFBMEQsTUFBSyxNQUEvRCxBQUFvRSxNQUFLLFNBQVMsS0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FBbkcsQUFBa0YsQUFBc0IsT0FBTyxhQUEvRztvQkFBQTtzQkFEQSxBQUNBO0FBQUE7T0FBQSxJQUpKLEFBQ0UsQUFJSyxBQUlWOzs7OztBQTVCaUIsQTs7QUErQnRCLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixPQUFPLEFBQzlCOzthQUNXLE1BRFgsQUFBTSxBQUNXLEFBRWxCO0FBSE8sQUFDSjs7O0FBSUosSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFELEFBQVUsT0FBUyxBQUM1Qzs7b0JBQ2lCLHdCQUFBLEFBQUMsTUFBTyxBQUNuQjtlQUFVLGlDQUFWLEFBQVUsQUFBWSxBQUN6QjtBQUhILEFBQU0sQUFNUDtBQU5PLEFBQ0o7QUFGSixBQVVBOztrQkFBZSxBQUFRLGdFQUFSLEFBQXVCLGlCQUF2QixBQUF3QyxvQkFBdkQsQUFBZSxBQUE0RCIsImZpbGUiOiJlZGl0b3IuanMiLCJzb3VyY2VSb290IjoiQzoveGFtcHAvaHRkb2NzL1JlYWN0L05ldy1mb2xkZXIifQ==