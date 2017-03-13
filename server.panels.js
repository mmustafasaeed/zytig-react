require("source-map-support").install();
exports.ids = [12];
exports.modules = {

/***/ 233:
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
  
  var _reactBootstrap = __webpack_require__(60);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Panel';
  
  var dogPicture = __webpack_require__(234);
  
  var PanelsPage = function (_Component) {
    (0, _inherits3.default)(PanelsPage, _Component);
  
    function PanelsPage() {
      (0, _classCallCheck3.default)(this, PanelsPage);
      return (0, _possibleConstructorReturn3.default)(this, (PanelsPage.__proto__ || (0, _getPrototypeOf2.default)(PanelsPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(PanelsPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'animate' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-6' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Primary title'
                  ),
                  bsStyle: 'primary'
                },
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { bsStyle: 'primary', className: 'btn-rounded pull-right' },
                  'Click here!'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Danger Panel'
                  ),
                  bsStyle: 'danger'
                },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Lorem Ipsum'
                ),
                _react2.default.createElement('img', {
                  className: 'img-responsive img-thumbnail pull-right',
                  src: dogPicture, alt: ''
                }),
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Header'
                  ),
                  bsStyle: 'success'
                },
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-6' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Hello World!'
                  ),
                  bsStyle: 'info'
                },
                _react2.default.createElement(
                  'blockquote',
                  null,
                  'Start by doing what\'s necessary; then do what\'s possible; and suddenly you are doing the impossible. ',
                  _react2.default.createElement(
                    'small',
                    null,
                    ' Francis of Assisi '
                  )
                ),
                _react2.default.createElement(
                  'blockquote',
                  { className: 'pull-right' },
                  'Start by doing what\'s necessary; then do what\'s possible; and suddenly you are doing the impossible. ',
                  _react2.default.createElement(
                    'small',
                    null,
                    ' Francis of Assisi '
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Warning'
                  ),
                  bsStyle: 'warning'
                },
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Default Header'
                  ),
                  bsStyle: 'default'
                },
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              )
            )
          )
        );
      }
    }]);
    return PanelsPage;
  }(_react.Component);
  
  PanelsPage.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = PanelsPage;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "common/images/dog.jpg?29970139c079d9be0b6d8a53a4d47fce";

/***/ }

};;
//# sourceMappingURL=server.panels.js.map