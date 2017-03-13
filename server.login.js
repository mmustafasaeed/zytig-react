require("source-map-support").install();
exports.ids = [2];
exports.modules = {

/***/ 192:
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
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(60);
  
  var _Link = __webpack_require__(27);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Login = __webpack_require__(193);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  var _flatAvatar = __webpack_require__(39);
  
  var _flatAvatar2 = _interopRequireDefault(_flatAvatar);
  
  var _history = __webpack_require__(35);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Log In'; /**
                         * React Starter Kit (https://www.reactstarterkit.com/)
                         *
                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                         *
                         * This source code is licensed under the MIT license found in the
                         * LICENSE.txt file in the root directory of this source tree.
                         */
  
  var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);
  
    function Login(props) {
      (0, _classCallCheck3.default)(this, Login);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));
  
      _this.state = {
        loginID: '',
        password: '',
        isSubmitted: false
      };
      _this.handleLogin = _this.handleLogin.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(Login, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        [].slice.call(document.querySelectorAll('button.progress-login')).forEach(function (bttn) {
          new ProgressButton(bttn, { // eslint-disable-line
            callback: function callback(instance) {
              var progress = 0;
              var interval = setInterval(function () {
                progress = Math.min(progress + Math.random() * 0.1, 1);
                instance._setProgress(progress); // eslint-disable-line
  
                if (progress === 1) {
                  instance._stop(1); // eslint-disable-line
                  clearInterval(interval);
                  setTimeout(function () {
                    _history2.default.push('/');
                  }, 500);
                }
              }, 200);
            }
          });
        });
        // [].slice.call(document.querySelectorAll('button.progress-button')).forEach((bttn) => {
        //   new ProgressButton(bttn, { //eslint-disable-line
        //     callback: (instance) => {
        //       let progress = 0;
        //       const interval = setInterval(() => {
        //         progress = Math.min(progress + (Math.random() * 0.1), 1);
        //         instance._setProgress(progress); //eslint-disable-line
        //         if (progress === 1) {
        //           instance._stop(1); // eslint-disable-line
        //           clearInterval(interval);
        //           History.push('/');
        //         }
        //       }, 200);
        //     },
        //   });
        // });
      }
    }, {
      key: 'handleLogin',
      value: function handleLogin(e) {
        e.preventDefault();
        return false;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'login-page animate ' + _Login2.default.loginPage },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4' },
              _react2.default.createElement('img', { src: _flatAvatar2.default, alt: 'flat Avatar', className: 'user-avatar' }),
              _react2.default.createElement(
                'h1',
                null,
                'Zytig '
              ),
              _react2.default.createElement(
                'form',
                { role: 'form', onSubmit: this.handleLogin },
                _react2.default.createElement(
                  'div',
                  { className: _Login2.default.formContent },
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                      id: '',
                      type: 'text',
                      placeholder: 'Email',
                      className: _Login2.default.inputStyle
                    })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                      id: '',
                      type: 'text',
                      placeholder: 'Password',
                      className: _Login2.default.inputStyle
                    })
                  )
                ),
                _react2.default.createElement(
                  'button',
                  {
                    type: 'submit',
                    className: 'btn btn-white btn-outline btn-lg btn-rounded progress-login\n                  progress-button ' + _Login2.default.btn,
                    'data-style': 'fill', 'data-horizontal': true
                  },
                  'Log in'
                ),
                _react2.default.createElement(
                  'span',
                  null,
                  '\xA0\xA0'
                ),
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/signup' },
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                      type: 'submit',
                      className: 'btn btn-white btn-outline btn-lg btn-rounded ' + _Login2.default.btn
                    },
                    'Register'
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Login;
  }(_react.Component);
  
  Login.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  
  
  Login.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Login2.default)(Login);

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(194);
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
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Login.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Login.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n/*======================================\nvariable for ani theme\n======================================*/\n\n}\n.Login_loginPage_3Cm {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #3ca2e0;\n  text-align: center;\n  color: #fff;\n  padding: 3em\n}\n.Login_loginPage_3Cm h1 {\n  font-weight: 300;\n  font-size: 36px;\n  margin-top: 20px;\n  margin-bottom: 10px\n\n}\n.Login_loginPage_3Cm h1 small {\n  color: rgba(255,255,255,0.7)\n\n}\n.Login_loginPage_3Cm .form-group {\n  padding: 8px 0\n\n}\n.Login_loginPage_3Cm .Login_formContent_XqS {\n  padding: 40px 0\n\n}\n.Login_loginPage_3Cm .Login_inputStyle_2ie {\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.4);\n  color: #FFF;\n  border-radius: 0;\n  height: 46px;\n  adding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333\n\n}\n.Login_loginPage_3Cm .Login_inputStyle_2ie::-webkit-input-placeholder {\n  color: #FFF\n\n}\n.Login_loginPage_3Cm .Login_inputStyle_2ie::-moz-placeholder {\n  color: #FFF\n\n}\n.Login_loginPage_3Cm .Login_inputStyle_2ie:-ms-input-placeholder {\n  color: #FFF\n\n}\n.Login_loginPage_3Cm .Login_inputStyle_2ie::placeholder {\n  color: #FFF\n\n}\n.Login_loginPage_3Cm .Login_inputStyle_2ie:focus {\n  border-bottom: 2px solid #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none\n\n}\n.Login_loginPage_3Cm .Login_btn_1kg {\n  -webkit-box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8) inset;\n          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8) inset;\n  background: none;\n  border-color: transparent;\n  font-weight: 400;\n  border-radius: 50px;\n  text-transform: none;\n  font-size: 18px;\n  line-height: 45px;\n  padding: 0 25px;\n  color: rgba(255, 255, 255, 0.8)\n\n}\n.Login_loginPage_3Cm .Login_btn_1kg:hover, .Login_loginPage_3Cm .Login_btn_1kg:focus {\n  -webkit-box-shadow: 0 0 0 2px #fff inset;\n          box-shadow: 0 0 0 2px #fff inset;\n  color: #fff;\n  background: none\n\n}\n", "", {"version":3,"sources":["/./routes/login/Login.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;;AAE5D;;wCAEwC;;CAQvC;AD/BD;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,eAAe;EACf,oBAAiC;EACjC,mBAAmB;EACnB,YAAY;EACZ,YAAa;CAyDd;AAvDC;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAoB;;CAIrB;AAHC;EACE,4BAA6B;;CAC9B;AAGH;EACE,cAAe;;CAChB;AAED;EACE,eAAgB;;CACjB;AAED;EACE,iBAAiB;EACjB,aAAa;EACb,yBAAiB;UAAjB,iBAAiB;EACjB,kDAAkD;EAClD,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,sBAAuB;;CAQxB;AAPC;EACE,WAAY;;CACb;AAFD;EACE,WAAY;;CACb;AAFD;EACE,WAAY;;CACb;AAFD;EACE,WAAY;;CACb;AACD;EACE,8BAA8B;EAC9B,yBAAiB;UAAjB,gBAAiB;;CAClB;AAGH;EACE,6DAAqD;UAArD,qDAAqD;EACrD,iBAAiB;EACjB,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,+BAA0B;;CAM3B;AALC;EACE,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,gBAAiB;;CAClB","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.loginPage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: var(--brand-primary);\n  text-align: center;\n  color: #fff;\n  padding: 3em;\n\n  & h1 {\n    font-weight: 300;\n    font-size: 36px;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    & small {\n      color: rgba(255,255,255,0.7);\n    }\n  }\n\n  & :global(.form-group) {\n    padding: 8px 0;\n  }\n\n  & .formContent {\n    padding: 40px 0;\n  }\n\n  & .inputStyle {\n    background: none;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.4);\n    color: #FFF;\n    border-radius: 0;\n    height: 46px;\n    adding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    &::placeholder {\n      color: #FFF;\n    }\n    &:focus {\n      border-bottom: 2px solid #fff;\n      box-shadow: none;\n    }\n  }\n\n  & .btn {\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8) inset;\n    background: none;\n    border-color: transparent;\n    font-weight: 400;\n    border-radius: 50px;\n    text-transform: none;\n    font-size: 18px;\n    line-height: 45px;\n    padding: 0 25px;\n    color: color(#FFF a(80%));\n    &:hover, &:focus {\n      box-shadow: 0 0 0 2px #fff inset;\n      color: #fff;\n      background: none;\n    }\n  }\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n/*======================================\nvariable for ani theme\n======================================*/\n\n  --nav-width       : 235px;\n  --brand-primary   : #3ca2e0;\n  --brand-secondary : #7BB77C;\n  --brand-danger    : #de6764;\n  --brand-black     : #ffffff\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"loginPage": "Login_loginPage_3Cm",
  	"formContent": "Login_formContent_XqS",
  	"inputStyle": "Login_inputStyle_2ie",
  	"btn": "Login_btn_1kg"
  };

/***/ }

};;
//# sourceMappingURL=server.login.js.map