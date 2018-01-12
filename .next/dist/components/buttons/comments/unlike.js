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

var _jsxFileName = 'C:\\xampp\\htdocs\\React\\New-folder\\components\\buttons\\comments\\unlike.js';


var UnLike = function (_Component) {
  (0, _inherits3.default)(UnLike, _Component);

  function UnLike() {
    (0, _classCallCheck3.default)(this, UnLike);

    return (0, _possibleConstructorReturn3.default)(this, (UnLike.__proto__ || (0, _getPrototypeOf2.default)(UnLike)).apply(this, arguments));
  }

  (0, _createClass3.default)(UnLike, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ delegate: false });
    }
  }, {
    key: 'UnLike',
    value: function UnLike() {
      var props = this.props;
      var content = props.content;
      var index = props.index;

      this.props.Sb_UnLike_Comment(content.unlike, index, content.id);
      this.setState({ delegate: true });
      console.log(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var content = props.content;

      return _react2.default.createElement('button', { type: 'button', className: 'right like', name: 'button', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('h3', { className: 'Number right', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, content.unlike), _react2.default.createElement('img', { src: 'http://localhost:4000/icon/img/minus11.svg', onClick: this.UnLike.bind(this), className: 'Negative right', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement('div', { className: 'clear-fix', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }));
    }
  }]);

  return UnLike;
}(_react.Component);

function mapStateToProps(state) {
  return {
    Commets: state.Commets
  };
}

var mapDisPatchToProps = function mapDisPatchToProps(dispatch, props) {
  return {
    Sb_UnLike_Comment: function Sb_UnLike_Comment(unlike, index, id) {
      dispatch((0, _store_comments.dp_unlike_comment)(unlike, index));
      var url = 'http://localhost:4000/count_aswer/' + id;
      _axios2.default.put(url, {
        method: 'PUT',
        data: {
          unlike: unlike - 1
        }
      });
    }
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store_comments.store_Comments, mapStateToProps, mapDisPatchToProps)(UnLike);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJ1dHRvbnNcXGNvbW1lbnRzXFx1bmxpa2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Iiwic3RvcmVfQ29tbWVudHMiLCJkcF91bmxpa2VfY29tbWVudCIsImF4aW9zIiwiVW5MaWtlIiwic2V0U3RhdGUiLCJkZWxlZ2F0ZSIsInByb3BzIiwiY29udGVudCIsImluZGV4IiwiU2JfVW5MaWtlX0NvbW1lbnQiLCJ1bmxpa2UiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJDb21tZXRzIiwibWFwRGlzUGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ1cmwiLCJwdXQiLCJtZXRob2QiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU87Ozs7QUFDUCxBQUNJLEFBQ0EsQUFFRTs7QUFDTCxBQUFPOzs7Ozs7Ozs7SSxBQUdEOzs7Ozs7Ozs7Ozt5Q0FDaUIsQUFDbkI7V0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFmLEFBQWMsQUFBVSxBQUN6Qjs7Ozs2QkFDUyxBQUNSO1VBQU0sUUFBVSxLQUFoQixBQUFxQixBQUNyQjtVQUFNLFVBQVUsTUFBaEIsQUFBc0IsQUFDdEI7VUFBTSxRQUFVLE1BQWhCLEFBQXNCLEFBRXRCOztXQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFrQixRQUE3QixBQUFxQyxRQUFyQyxBQUE0QyxPQUFNLFFBQWxELEFBQTBELEFBQzFEO1dBQUEsQUFBSyxTQUFTLEVBQUMsVUFBZixBQUFjLEFBQVUsQUFDeEI7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNiOzs7OzZCQUNTLEFBQ1A7VUFBTSxRQUFVLEtBQWhCLEFBQXFCLEFBQ3JCO1VBQU0sVUFBVSxNQUFoQixBQUFzQixBQUVwQjs7NkJBQ0UsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFdBQXRCLEFBQWdDLGNBQWEsTUFBN0MsQUFBa0Q7b0JBQWxEO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFBOEI7QUFBOUI7aUJBREYsQUFDRSxBQUFzQyxBQUN0QyxnREFBSyxLQUFMLEFBQVMsOENBQTZDLFNBQVMsS0FBQSxBQUFLLE9BQUwsQUFBWSxLQUEzRSxBQUErRCxBQUFpQixPQUFPLFdBQXZGLEFBQWlHO29CQUFqRztzQkFGRixBQUVFLEFBQ0E7QUFEQTtpREFDSyxXQUFMLEFBQWU7b0JBQWY7c0JBSkosQUFDRSxBQUdFLEFBR1A7QUFITzs7Ozs7O0EsQUFyQlU7O0FBMEJ0QixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsT0FBTyxBQUM5Qjs7YUFDVyxNQURYLEFBQU0sQUFDVyxBQUVsQjtBQUhPLEFBQ0o7OztBQUlKLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBRCxBQUFVLE9BQVMsQUFDNUM7O3VCQUNvQiwyQkFBQSxBQUFDLFFBQUQsQUFBUSxPQUFSLEFBQWMsSUFBSyxBQUNqQztlQUFVLHVDQUFBLEFBQWtCLFFBQTVCLEFBQVUsQUFBeUIsQUFDbkM7VUFBTSw2Q0FBTixBQUFzRCxBQUN0RDtzQkFBQSxBQUFNLElBQU4sQUFBVTtnQkFBSSxBQUNKLEFBQ1I7O2tCQUNXLFNBSGIsQUFBYyxBQUVKLEFBQ1ksQUFHekI7QUFKYSxBQUNOO0FBSFUsQUFDWjtBQUxSLEFBQU0sQUFhUDtBQWJPLEFBQ0o7QUFGSixBQWlCQTs7a0JBQWUsQUFBUSxnRUFBUixBQUF1QixpQkFBdkIsQUFBd0Msb0JBQXZELEFBQWUsQUFBNEQiLCJmaWxlIjoidW5saWtlLmpzIiwic291cmNlUm9vdCI6IkM6L3hhbXBwL2h0ZG9jcy9SZWFjdC9OZXctZm9sZGVyIn0=