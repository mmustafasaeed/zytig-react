require("source-map-support").install();
exports.ids = [3];
exports.modules = {

/***/ 196:
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
  
  var _SignUp = __webpack_require__(197);
  
  var _SignUp2 = _interopRequireDefault(_SignUp);
  
  var _Link = __webpack_require__(27);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _history = __webpack_require__(35);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _flatAvatar = __webpack_require__(39);
  
  var _flatAvatar2 = _interopRequireDefault(_flatAvatar);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Sign Up';
  // import withStyles from 'isomorphic-style-loader/lib/withStyles';
  
  var SignUp = function (_Component) {
    (0, _inherits3.default)(SignUp, _Component);
  
    function SignUp(props) {
      (0, _classCallCheck3.default)(this, SignUp);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (SignUp.__proto__ || (0, _getPrototypeOf2.default)(SignUp)).call(this, props));
  
      _this.register = _this.register.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(SignUp, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'register',
      value: function register(e) {
        e.preventDefault();
        _history2.default.push('/');
        return false;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'animate ' + _SignUp2.default.signUp },
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
                { role: 'form', onSubmit: this.register },
                _react2.default.createElement(
                  'div',
                  { className: _SignUp2.default.formContent },
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                      id: '',
                      type: 'text',
                      placeholder: 'Full Name',
                      className: _SignUp2.default.inputStyle
                    })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                      id: '',
                      type: 'text',
                      placeholder: 'Email',
                      className: _SignUp2.default.inputStyle
                    })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                      id: '',
                      type: 'text',
                      placeholder: 'Password',
                      className: _SignUp2.default.inputStyle
                    })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                      id: '',
                      type: 'text',
                      placeholder: 'Repeat Password',
                      className: _SignUp2.default.inputStyle
                    })
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  {
                    type: 'submit',
                    className: 'btn btn-white btn-outline btn-lg btn-rounded progress-login ' + _SignUp2.default.btn
                  },
                  'Register'
                ),
                _react2.default.createElement(
                  'span',
                  null,
                  '\xA0\xA0'
                ),
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/login' },
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                      type: 'submit',
                      className: 'btn btn-white btn-outline btn-lg btn-rounded progress-login ' + _SignUp2.default.btn
                    },
                    'Log in'
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return SignUp;
  }(_react.Component);
  
  SignUp.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(_SignUp2.default)(SignUp);

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(198);
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
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./SignUp.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./SignUp.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n/*======================================\nvariable for ani theme\n======================================*/\n\n}\n.SignUp_signUp_153 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #3ca2e0;\n  text-align: center;\n  color: #fff;\n  padding: 3em\n}\n.SignUp_signUp_153 h1 {\n  font-weight: 300;\n  font-size: 36px;\n  margin-top: 20px;\n  margin-bottom: 10px\n\n}\n.SignUp_signUp_153 h1 small {\n  color: rgba(255,255,255,0.7)\n\n}\n.SignUp_signUp_153 .form-group {\n  padding: 8px 0\n\n}\n.SignUp_signUp_153 .SignUp_formContent_1eY {\n  padding: 40px 0\n\n}\n.SignUp_signUp_153 .SignUp_inputStyle_2kg {\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.4);\n  color: #FFF;\n  border-radius: 0;\n  height: 46px;\n  adding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333\n\n}\n.SignUp_signUp_153 .SignUp_inputStyle_2kg::-webkit-input-placeholder {\n  color: #FFF\n\n}\n.SignUp_signUp_153 .SignUp_inputStyle_2kg::-moz-placeholder {\n  color: #FFF\n\n}\n.SignUp_signUp_153 .SignUp_inputStyle_2kg:-ms-input-placeholder {\n  color: #FFF\n\n}\n.SignUp_signUp_153 .SignUp_inputStyle_2kg::placeholder {\n  color: #FFF\n\n}\n.SignUp_signUp_153 .SignUp_inputStyle_2kg:focus {\n  border-bottom: 2px solid #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none\n\n}\n.SignUp_signUp_153 .SignUp_btn_1nL {\n  -webkit-box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8) inset;\n          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8) inset;\n  background: none;\n  border-color: transparent;\n  font-weight: 400;\n  border-radius: 50px;\n  text-transform: none;\n  font-size: 18px;\n  line-height: 45px;\n  padding: 0 25px;\n  color: rgba(255, 255, 255, 0.8)\n\n}\n.SignUp_signUp_153 .SignUp_btn_1nL:hover, .SignUp_signUp_153 .SignUp_btn_1nL:focus {\n  color: #FFF;\n  -webkit-box-shadow: 0 0 0 2px #FFF inset;\n          box-shadow: 0 0 0 2px #FFF inset;\n  background: none\n\n}\n", "", {"version":3,"sources":["/./routes/signUp/SignUp.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;;AAE5D;;wCAEwC;;CAQvC;AD/BD;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,eAAe;EACf,oBAAiC;EACjC,mBAAmB;EACnB,YAAY;EACZ,YAAa;CAyDd;AAvDC;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAoB;;CAIrB;AAHC;EACE,4BAA6B;;CAC9B;AAGH;EACE,cAAe;;CAChB;AAED;EACE,eAAgB;;CACjB;AAED;EACE,iBAAiB;EACjB,aAAa;EACb,yBAAiB;UAAjB,iBAAiB;EACjB,kDAAkD;EAClD,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,sBAAuB;;CAQxB;AAPC;EACE,WAAY;;CACb;AAFD;EACE,WAAY;;CACb;AAFD;EACE,WAAY;;CACb;AAFD;EACE,WAAY;;CACb;AACD;EACE,8BAA8B;EAC9B,yBAAiB;UAAjB,gBAAiB;;CAClB;AAGH;EACE,6DAAqD;UAArD,qDAAqD;EACrD,iBAAiB;EACjB,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,+BAA0B;;CAM3B;AALC;EACE,YAAY;EACZ,yCAAiC;UAAjC,iCAAiC;EACjC,gBAAiB;;CAClB","file":"SignUp.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.signUp {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: var(--brand-primary);\n  text-align: center;\n  color: #fff;\n  padding: 3em;\n\n  & h1 {\n    font-weight: 300;\n    font-size: 36px;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    & small {\n      color: rgba(255,255,255,0.7);\n    }\n  }\n\n  & :global(.form-group) {\n    padding: 8px 0;\n  }\n\n  & .formContent {\n    padding: 40px 0;\n  }\n\n  & .inputStyle {\n    background: none;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.4);\n    color: #FFF;\n    border-radius: 0;\n    height: 46px;\n    adding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    &::placeholder {\n      color: #FFF;\n    }\n    &:focus {\n      border-bottom: 2px solid #fff;\n      box-shadow: none;\n    }\n  }\n\n  & .btn {\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8) inset;\n    background: none;\n    border-color: transparent;\n    font-weight: 400;\n    border-radius: 50px;\n    text-transform: none;\n    font-size: 18px;\n    line-height: 45px;\n    padding: 0 25px;\n    color: color(#FFF a(80%));\n    &:hover, &:focus {\n      color: #FFF;\n      box-shadow: 0 0 0 2px #FFF inset;\n      background: none;\n    }\n  }\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n/*======================================\nvariable for ani theme\n======================================*/\n\n  --nav-width       : 235px;\n  --brand-primary   : #3ca2e0;\n  --brand-secondary : #7BB77C;\n  --brand-danger    : #de6764;\n  --brand-black     : #ffffff\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"signUp": "SignUp_signUp_153",
  	"formContent": "SignUp_formContent_1eY",
  	"inputStyle": "SignUp_inputStyle_2kg",
  	"btn": "SignUp_btn_1nL"
  };

/***/ }

};;
//# sourceMappingURL=server.signup.js.map