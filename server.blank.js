require("source-map-support").install();
exports.ids = [21];
exports.modules = {

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(30);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(31);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(32);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(33);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(34);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Blank Page';
  
  var Blank = function (_Component) {
    (0, _inherits3.default)(Blank, _Component);
  
    function Blank() {
      (0, _classCallCheck3.default)(this, Blank);
      return (0, _possibleConstructorReturn3.default)(this, (Blank.__proto__ || (0, _getPrototypeOf2.default)(Blank)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Blank, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement('div', { className: 'animate' });
      }
    }]);
    return Blank;
  }(_react.Component);
  
  Blank.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = Blank;

/***/ }

};;
//# sourceMappingURL=server.blank.js.map