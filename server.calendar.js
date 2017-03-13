require("source-map-support").install();
exports.ids = [24];
exports.modules = {

/***/ 281:
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
  
  var _FullCalendar = __webpack_require__(71);
  
  var _FullCalendar2 = _interopRequireDefault(_FullCalendar);
  
  var _rcSelect = __webpack_require__(72);
  
  var _rcSelect2 = _interopRequireDefault(_rcSelect);
  
  var _moment = __webpack_require__(73);
  
  var _moment2 = _interopRequireDefault(_moment);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import zhCN from 'rc-calendar/lib/locale/zh_CN';
  // import enUS from 'rc-calendar/lib/locale/en_US';
  // import 'moment/locale/zh-cn';
  // import 'moment/locale/en-gb';
  
  
  // const cn = location.search.indexOf('cn') !== -1;
  
  var title = 'Calendar';
  var now = (0, _moment2.default)();
  
  var defaultCalendarValue = now.clone();
  defaultCalendarValue.add(-1, 'month');
  
  var SidebarCalendar = function (_Component) {
    (0, _inherits3.default)(SidebarCalendar, _Component);
  
    function SidebarCalendar(props) {
      (0, _classCallCheck3.default)(this, SidebarCalendar);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (SidebarCalendar.__proto__ || (0, _getPrototypeOf2.default)(SidebarCalendar)).call(this, props));
  
      _this.state = {
        type: 'month'
      };
      _this.onTypeChange = _this.onTypeChange.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(SidebarCalendar, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'onTypeChange',
      value: function onTypeChange(type) {
        this.setState({
          type: type
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'animate', style: { zIndex: 1000, position: 'relative' } },
          _react2.default.createElement(_FullCalendar2.default, {
            style: { margin: 10 },
            Select: _rcSelect2.default,
            fullscreen: true,
            defaultValue: now
          })
        );
      }
    }]);
    return SidebarCalendar;
  }(_react.Component);
  
  SidebarCalendar.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = SidebarCalendar;

/***/ }

};;
//# sourceMappingURL=server.calendar.js.map