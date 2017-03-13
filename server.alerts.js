require("source-map-support").install();
exports.ids = [13];
exports.modules = {

/***/ 236:
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
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Alert = __webpack_require__(237);
  
  var _Alert2 = _interopRequireDefault(_Alert);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Alert';
  
  var AlertsPage = function (_Component) {
    (0, _inherits3.default)(AlertsPage, _Component);
  
    function AlertsPage(props) {
      (0, _classCallCheck3.default)(this, AlertsPage);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AlertsPage.__proto__ || (0, _getPrototypeOf2.default)(AlertsPage)).call(this, props));
  
      _this.state = {
        alertVisible1: true,
        alertVisible2: true,
        alertVisible3: true,
        alertVisible4: false,
        alertValue: '',
        addNewAlert: false,
        showGrowlDefault: false,
        showGrowlPrimary: false,
        showGrowlInfo: false,
        showGrowlWarning: false,
        showGrowlError: false
      };
      _this.handleAlertDismiss1 = _this.handleAlertDismiss1.bind(_this);
      _this.handleAlertShow1 = _this.handleAlertShow1.bind(_this);
      _this.handleAlertDismiss2 = _this.handleAlertDismiss2.bind(_this);
      _this.handleAlertShow2 = _this.handleAlertShow2.bind(_this);
      _this.handleAlertDismiss3 = _this.handleAlertDismiss3.bind(_this);
      _this.handleAlertShow3 = _this.handleAlertShow3.bind(_this);
      _this.handleAlertDismiss4 = _this.handleAlertDismiss4.bind(_this);
      _this.handleAlertShow4 = _this.handleAlertShow4.bind(_this);
      _this.addAlert = _this.addAlert.bind(_this);
      _this.toggleGrowl = _this.toggleGrowl.bind(_this);
      _this.closeGrowl = _this.closeGrowl.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(AlertsPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'handleAlertDismiss1',
      value: function handleAlertDismiss1() {
        this.setState({ alertVisible1: false });
      }
    }, {
      key: 'handleAlertShow1',
      value: function handleAlertShow1() {
        this.setState({ alertVisible1: true });
      }
    }, {
      key: 'handleAlertDismiss2',
      value: function handleAlertDismiss2() {
        this.setState({ alertVisible2: false });
      }
    }, {
      key: 'handleAlertShow2',
      value: function handleAlertShow2() {
        this.setState({ alertVisible2: true });
      }
    }, {
      key: 'handleAlertDismiss3',
      value: function handleAlertDismiss3() {
        this.setState({ alertVisible3: false });
      }
    }, {
      key: 'handleAlertShow3',
      value: function handleAlertShow3() {
        this.setState({ alertVisible3: true });
      }
    }, {
      key: 'handleAlertDismiss4',
      value: function handleAlertDismiss4() {
        this.setState({ alertVisible4: false });
      }
    }, {
      key: 'handleAlertShow4',
      value: function handleAlertShow4() {
        this.setState({ alertVisible4: true });
      }
    }, {
      key: 'addAlert',
      value: function addAlert(e) {
        e.preventDefault();
        this.setState({
          alertVisible4: true,
          addNewAlert: true
        });
      }
    }, {
      key: 'toggleGrowl',
      value: function toggleGrowl(e) {
        var that = this;
        switch (e.target.name) {
          case 'Default':
            this.setState({ showGrowlDefault: !this.state.showGrowlDefault });
            setTimeout(function () {
              that.setState({ showGrowlDefault: false });
            }, 5000);
            break;
          case 'Primary':
            this.setState({ showGrowlPrimary: !this.state.showGrowlPrimary });
            setTimeout(function () {
              that.setState({ showGrowlPrimary: false });
            }, 5000);
            break;
          case 'Info':
            this.setState({ showGrowlInfo: !this.state.showGrowlInfo });
            setTimeout(function () {
              that.setState({ showGrowlInfo: false });
            }, 5000);
            break;
          case 'Warning':
            this.setState({ showGrowlWarning: !this.state.showGrowlWarning });
            setTimeout(function () {
              that.setState({ showGrowlWarning: false });
            }, 5000);
            break;
          case 'Error':
            this.setState({ showGrowlError: !this.state.showGrowlError });
            setTimeout(function () {
              that.setState({ showGrowlError: false });
            }, 5000);
            break;
          default:
            this.setState({ showGrowlDefault: !this.state.showGrowlDefault });
            setTimeout(function () {
              that.setState({ showGrowlDefault: false });
            }, 5000);
        }
      }
    }, {
      key: 'closeGrowl',
      value: function closeGrowl(e) {
        switch (e.target.getAttribute('name')) {
          case 'Default':
            this.setState({ showGrowlDefault: false });
            break;
          case 'Primary':
            this.setState({ showGrowlPrimary: false });
            break;
          case 'Info':
            this.setState({ showGrowlInfo: false });
            break;
          case 'Warning':
            this.setState({ showGrowlWarning: false });
            break;
          case 'Error':
            this.setState({ showGrowlError: false });
            break;
          default:
            this.setState({ showGrowlDefault: false });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'animate' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                'Dismissable Alerts'
              ),
              bsStyle: 'primary'
            },
            this.state.alertVisible1 ? _react2.default.createElement(
              _reactBootstrap.Alert,
              { bsStyle: 'danger', onDismiss: this.handleAlertDismiss1 },
              _react2.default.createElement(
                'p',
                null,
                'Oh snap! Change a few things up and try submitting again.'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.handleAlertDismiss1 },
                  'Hide Alert'
                )
              )
            ) : _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.handleAlertShow1, className: _Alert2.default.showAlert },
              'Show Alert'
            ),
            this.state.alertVisible2 ? _react2.default.createElement(
              _reactBootstrap.Alert,
              { bsStyle: 'info', onDismiss: this.handleAlertDismiss2 },
              _react2.default.createElement(
                'p',
                null,
                'Ok! Not bad, but you can do better.'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.handleAlertDismiss2 },
                  'Hide Alert'
                )
              )
            ) : _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.handleAlertShow2, className: _Alert2.default.showAlert },
              'Show Alert'
            ),
            this.state.alertVisible3 ? _react2.default.createElement(
              _reactBootstrap.Alert,
              { bsStyle: 'success', onDismiss: this.handleAlertDismiss3 },
              _react2.default.createElement(
                'p',
                null,
                'Well done! You successfully read this important alert message.'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.handleAlertDismiss3 },
                  'Hide Alert'
                )
              )
            ) : _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.handleAlertShow3, className: _Alert2.default.showAlert },
              'Show Alert'
            ),
            this.state.alertVisible4 ? _react2.default.createElement(
              _reactBootstrap.Alert,
              {
                bsStyle: 'warning',
                onDismiss: this.handleAlertDismiss4,
                style: { display: this.state.addNewAlert ? '' : 'none' }
              },
              _react2.default.createElement(
                'p',
                null,
                'Oh snap! Change a few things up and try submitting again.'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.handleAlertDismiss4 },
                  'Hide Alert'
                )
              )
            ) : _react2.default.createElement(
              _reactBootstrap.Button,
              {
                onClick: this.handleAlertShow4,
                style: { display: this.state.addNewAlert ? '' : 'none' },
                className: _Alert2.default.showAlert
              },
              'Show Alert'
            ),
            _react2.default.createElement(
              _reactBootstrap.Form,
              { inline: true, onSubmit: this.addAlert },
              _react2.default.createElement(
                _reactBootstrap.Button,
                { type: 'submit' },
                ' Add Alert '
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                'Growl Alerts'
              ),
              bsStyle: 'info'
            },
            _react2.default.createElement(
              _reactBootstrap.ButtonToolbar,
              null,
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: 'default', onClick: this.toggleGrowl, name: 'Default' },
                'Show Growl'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: 'primary', onClick: this.toggleGrowl, name: 'Primary' },
                'Primary Growl'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: 'info', onClick: this.toggleGrowl, name: 'Info' },
                'Info Growl'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: 'warning', onClick: this.toggleGrowl, name: 'Warning' },
                'Warning Growl'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: 'danger', onClick: this.toggleGrowl, name: 'Error' },
                'Danger Growl'
              )
            ),
            _react2.default.createElement(
              'growl-notifications',
              null,
              _react2.default.createElement(
                'growl-notification',
                {
                  'class': 'fading',
                  style: { display: this.state.showGrowlDefault ? '' : 'none' }
                },
                _react2.default.createElement(
                  'a',
                  {
                    href: '',
                    onClick: this.closeGrowl, className: 'close'
                  },
                  _react2.default.createElement('i', { className: 'fa fa-times', name: 'Default' })
                ),
                'Default Noti'
              ),
              _react2.default.createElement(
                'growl-notification',
                {
                  'class': 'growl-primary fading',
                  style: { display: this.state.showGrowlPrimary ? '' : 'none' }
                },
                _react2.default.createElement(
                  'a',
                  {
                    href: '',
                    onClick: this.closeGrowl, className: 'close'
                  },
                  _react2.default.createElement('i', { className: 'fa fa-times', name: 'Primary' })
                ),
                'Primary Noti'
              ),
              _react2.default.createElement(
                'growl-notification',
                {
                  'class': 'growl-info fading',
                  style: { display: this.state.showGrowlInfo ? '' : 'none' }
                },
                _react2.default.createElement(
                  'a',
                  {
                    href: '',
                    onClick: this.closeGrowl, className: 'close'
                  },
                  _react2.default.createElement('i', { className: 'fa fa-times', name: 'Info' })
                ),
                'Info Noti'
              ),
              _react2.default.createElement(
                'growl-notification',
                {
                  'class': 'growl-warning',
                  style: { display: this.state.showGrowlWarning ? '' : 'none' }
                },
                _react2.default.createElement(
                  'a',
                  {
                    href: '',
                    onClick: this.closeGrowl, className: 'close'
                  },
                  _react2.default.createElement('i', { className: 'fa fa-times', name: 'Warning' })
                ),
                'Warning Notification'
              ),
              _react2.default.createElement(
                'growl-notification',
                {
                  'class': 'growl-error fading',
                  style: { display: this.state.showGrowlError ? '' : 'none' }
                },
                _react2.default.createElement(
                  'a',
                  {
                    href: '',
                    onClick: this.closeGrowl, className: 'close'
                  },
                  _react2.default.createElement('i', { className: 'fa fa-times', name: 'Error' })
                ),
                'Error Noti'
              )
            )
          )
        );
      }
    }]);
    return AlertsPage;
  }(_react.Component);
  
  AlertsPage.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(_Alert2.default)(AlertsPage);

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(238);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../../node_modules/postcss-loader/index.js?pack=default!./Alert.css", function() {
          content = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../../node_modules/postcss-loader/index.js?pack=default!./Alert.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, ".Alert_showAlert_7W8 {\n  margin-bottom: 10px;\n}\n\n\ngrowl-notifications {\n    position: fixed;\n    top: 60px;\n    right: 15px;\n    z-index: 1000;\n}\n\n\ngrowl-notifications {\n}\n\n\ngrowl-notifications growl-notification {\n  background: rgba(0,0,0,0.6);\n  color: white;\n  padding: 15px 30px;\n  width: 250px;\n  display: block;\n  border-radius: 5px;\n  margin-top: 15px;\n  border: 1px solid rgba(0,0,0,0.8);\n}\n\n\ngrowl-notifications growl-notification .close {\n  color: #fff;\n  font-size: 16px;\n  margin-right: -10px;\n  margin-top: 2px;\n}\n\n\ngrowl-notifications growl-notification.growl-primary {\n  color: #FFF;\n  background: #68b7e7;\n  border: 1px solid #2698dd;\n}\n\n\ngrowl-notifications growl-notification.growl-error {\n  color: #FFF;\n  background: #e7908e;\n  border: 1px solid #da524f;\n}\n\n\ngrowl-notifications growl-notification.growl-info {\n  color: #FFF;\n  background: #85d0e7;\n  border: 1px solid #46b8da;\n}\n\n\ngrowl-notifications growl-notification.growl-warning {\n  color: #FFF;\n  background: #f4c37d;\n  border: 1px solid #46b8da;\n}\n", "", {"version":3,"sources":["/./routes/dashboard/UIElement/Alerts/Alert.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;CACrB;;;AAGD;IACI,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,cAAc;CACjB;;;AAED;CAsCC;;;AArCC;EACE,4BAA4B;EAC5B,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,kCAAkC;CA4BnC;;;AA3BC;EACE,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;CACjB;;;AAED;EACE,YAAY;EACZ,oBAAoB;EACpB,0BAA0B;CAC3B;;;AACD;EACE,YAAY;EACZ,oBAAoB;EACpB,0BAA0B;CAC3B;;;AACD;EACE,YAAY;EACZ,oBAAoB;EACpB,0BAA0B;CAC3B;;;AACD;EACE,YAAY;EACZ,oBAAoB;EACpB,0BAA0B;CAC3B","file":"Alert.css","sourcesContent":[".showAlert {\n  margin-bottom: 10px;\n}\n\n\ngrowl-notifications {\n    position: fixed;\n    top: 60px;\n    right: 15px;\n    z-index: 1000;\n}\n\n:global(growl-notifications) {\n  & :global(growl-notification) {\n    background: rgba(0,0,0,0.6);\n    color: white;\n    padding: 15px 30px;\n    width: 250px;\n    display: block;\n    border-radius: 5px;\n    margin-top: 15px;\n    border: 1px solid rgba(0,0,0,0.8);\n    & :global(.close) {\n      color: #fff;\n      font-size: 16px;\n      margin-right: -10px;\n      margin-top: 2px;\n    }\n\n    &:global(.growl-primary) {\n      color: #FFF;\n      background: #68b7e7;\n      border: 1px solid #2698dd;\n    }\n    &:global(.growl-error) {\n      color: #FFF;\n      background: #e7908e;\n      border: 1px solid #da524f;\n    }\n    &:global(.growl-info) {\n      color: #FFF;\n      background: #85d0e7;\n      border: 1px solid #46b8da;\n    }\n    &:global(.growl-warning) {\n      color: #FFF;\n      background: #f4c37d;\n      border: 1px solid #46b8da;\n    }\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"showAlert": "Alert_showAlert_7W8"
  };

/***/ }

};;
//# sourceMappingURL=server.alerts.js.map