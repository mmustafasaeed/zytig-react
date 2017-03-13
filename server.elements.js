require("source-map-support").install();
exports.ids = [8];
exports.modules = {

/***/ 214:
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/FormControl");

/***/ },

/***/ 219:
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
  
  var _FormControl = __webpack_require__(214);
  
  var _FormControl2 = _interopRequireDefault(_FormControl);
  
  var _reactBootstrap = __webpack_require__(60);
  
  var _Elements = __webpack_require__(220);
  
  var _Elements2 = _interopRequireDefault(_Elements);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import NProgress from 'nprogress';
  var title = 'Form Elements';
  
  // import s from '../../../../components/common/styles/widgets/underLine.css';
  
  var FormElements = function (_Component) {
    (0, _inherits3.default)(FormElements, _Component);
  
    function FormElements() {
      (0, _classCallCheck3.default)(this, FormElements);
      return (0, _possibleConstructorReturn3.default)(this, (FormElements.__proto__ || (0, _getPrototypeOf2.default)(FormElements)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(FormElements, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        // NProgress.done();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'row animate ' + _Elements2.default.formElements },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              {
                header: _react2.default.createElement(
                  'span',
                  null,
                  'Default Form'
                ),
                bsStyle: 'primary'
              },
              _react2.default.createElement(
                _reactBootstrap.Form,
                null,
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'defaultEmail' },
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'Text Input'
                  ),
                  _react2.default.createElement(_FormControl2.default, { type: 'email', placeholder: 'Enter Email' })
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'defaultPassword' },
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'Password'
                  ),
                  _react2.default.createElement(_FormControl2.default, { type: 'password', placeholder: 'Enter Password' })
                ),
                _react2.default.createElement(
                  _reactBootstrap.Checkbox,
                  null,
                  ' Remember Me '
                ),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { type: 'submit' },
                  ' Submit '
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              {
                header: _react2.default.createElement(
                  'span',
                  null,
                  'Horizontal Form'
                ),
                bsStyle: 'success'
              },
              _react2.default.createElement(
                _reactBootstrap.Form,
                { horizontal: true },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'formHorizontalEmail' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    'Email'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'email', placeholder: 'Email' })
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'formHorizontalPassword' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    'Password'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'password', placeholder: 'Password' })
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { smOffset: 2, sm: 10 },
                    _react2.default.createElement(
                      _reactBootstrap.Checkbox,
                      null,
                      'Remember me'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { smOffset: 2, sm: 10 },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      { type: 'submit' },
                      'Sign in'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              {
                header: _react2.default.createElement(
                  'span',
                  null,
                  'Inline Form'
                ),
                bsStyle: 'info'
              },
              _react2.default.createElement(
                _reactBootstrap.Form,
                { inline: true },
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { sm: 4 },
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'defaultEmail' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Text Input'
                    ),
                    _react2.default.createElement(_FormControl2.default, { type: 'email', placeholder: 'Enter Email' })
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { sm: 4 },
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'defaultPassword' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Password'
                    ),
                    _react2.default.createElement(_FormControl2.default, { type: 'password', placeholder: 'Enter Password' })
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { sm: 4 },
                  _react2.default.createElement(
                    _reactBootstrap.Checkbox,
                    null,
                    ' Remember Me '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { type: 'submit' },
                    ' Submit '
                  )
                )
              )
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
                  'UnderLine Form'
                ),
                bsStyle: 'danger'
              },
              _react2.default.createElement(
                _reactBootstrap.Form,
                null,
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'defaultEmail' },
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'Text Input'
                  ),
                  _react2.default.createElement(_FormControl2.default, { type: 'email', placeholder: 'Enter Email', className: _Elements2.default.underline })
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'defaultPassword' },
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'Password'
                  ),
                  _react2.default.createElement(_FormControl2.default, {
                    type: 'password',
                    placeholder: 'Enter Password',
                    className: _Elements2.default.underline
                  })
                ),
                _react2.default.createElement(
                  _reactBootstrap.Checkbox,
                  null,
                  ' Remember Me '
                ),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { type: 'submit' },
                  ' Submit '
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              {
                header: _react2.default.createElement(
                  'span',
                  null,
                  'Horizontal UnderLine Form'
                ),
                bsStyle: 'warning'
              },
              _react2.default.createElement(
                _reactBootstrap.Form,
                { horizontal: true },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'formHorizontalEmail' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    'Email'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'email', placeholder: 'Email', className: _Elements2.default.underline })
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'formHorizontalPassword' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    'Password'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'password', placeholder: 'Password', className: _Elements2.default.underline })
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { smOffset: 2, sm: 10 },
                    _react2.default.createElement(
                      _reactBootstrap.Checkbox,
                      null,
                      'Remember me'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { smOffset: 2, sm: 10 },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      { type: 'submit' },
                      'Sign in'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              {
                header: _react2.default.createElement(
                  'span',
                  null,
                  'Inline UnderLine Form'
                ),
                bsStyle: 'info'
              },
              _react2.default.createElement(
                _reactBootstrap.Form,
                { inline: true },
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { sm: 4 },
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'defaultEmail' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Text Input'
                    ),
                    _react2.default.createElement(_FormControl2.default, { type: 'email', placeholder: 'Enter Email', className: _Elements2.default.underline })
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { sm: 4 },
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'defaultPassword' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Password'
                    ),
                    _react2.default.createElement(_FormControl2.default, {
                      type: 'password',
                      placeholder: 'Enter Password',
                      className: _Elements2.default.underline
                    })
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { sm: 4 },
                  _react2.default.createElement(
                    _reactBootstrap.Checkbox,
                    null,
                    ' Remember Me '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { type: 'submit' },
                    ' Submit '
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return FormElements;
  }(_react.Component);
  
  FormElements.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(_Elements2.default)(FormElements);

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(221);
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
        module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../../node_modules/postcss-loader/index.js?pack=default!./Elements.css", function() {
          content = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../../node_modules/postcss-loader/index.js?pack=default!./Elements.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n/*======================================\nvariable for ani theme\n======================================*/\n\n}\n\n.Elements_underline_2Gt {\n  background: none !important;\n  background-image: none;\n  border: 1px solid #c8c7cc;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-radius: 0 0 0 0 !important;\n  color: #5b5b60;\n  font-family: inherit;\n  font-size: 14px;\n  line-height: 1.2;\n  padding: 5px 4px;\n  -webkit-transition-duration: 0.1s;\n       -o-transition-duration: 0.1s;\n          transition-duration: 0.1s;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  -o-transition: border 300ms ease-out;\n  -webkit-transition: border 300ms ease-out;\n  transition: border 300ms ease-out\n}\n\n.Elements_underline_2Gt:focus {\n  border-color: #3ca2e0\n\n}\n\n.Elements_formElements_1fD {\n}\n\n.Elements_formElements_1fD .btn {\n  border-radius: 0\n\n}\n\n@media (min-width: 768px) {\n  .form-inline .control-label {\n    margin-right: 5px;\n    }\n  .form-inline .checkbox {\n    margin-right: 5px;\n  }\n}\n\n@media (max-width: 768px) {\n  .Elements_formElements_1fD {\n  }\n  .Elements_formElements_1fD .form-horizontal .form-group > div {\n    text-align: left !important\n\n  }\n}\n", "", {"version":3,"sources":["/./components/variables.css","/./routes/dashboard/Forms/Elements/Elements.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;;AAE5D;;wCAEwC;;CAQvC;;ACvCD;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,0BAA0B;EAC1B,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,kCAAkC;EAClC,eAAe;EACf,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,kCAA0B;OAA1B,6BAA0B;UAA1B,0BAA0B;EAC1B,oCAA4B;UAA5B,4BAA4B;EAE5B,qCAAqC;EACrC,0CAA0C;EAC1C,iCAAkC;CAInC;;AAHC;EACE,qBAAmC;;CACpC;;AAGH;CAIC;;AAHC;EACE,gBAAiB;;CAClB;;AAIH;EACE;IACE,kBAAkB;KACjB;EACH;IACE,kBAAkB;GACnB;CACF;;AAED;EACE;GAIC;EAHC;IACE,2BAA4B;;GAC7B;CAEJ","file":"Elements.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n/*======================================\nvariable for ani theme\n======================================*/\n\n  --nav-width       : 235px;\n  --brand-primary   : #3ca2e0;\n  --brand-secondary : #7BB77C;\n  --brand-danger    : #de6764;\n  --brand-black     : #ffffff\n\n}\n","@import '../../../../components/variables.css';\n\n.underline {\n  background: none !important;\n  background-image: none;\n  border: 1px solid #c8c7cc;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-radius: 0 0 0 0 !important;\n  color: #5b5b60;\n  font-family: inherit;\n  font-size: 14px;\n  line-height: 1.2;\n  padding: 5px 4px;\n  transition-duration: 0.1s;\n  box-shadow: none !important;\n  -moz-transition: border 300ms ease-out;\n  -o-transition: border 300ms ease-out;\n  -webkit-transition: border 300ms ease-out;\n  transition: border 300ms ease-out;\n  &:focus {\n    border-color: var(--brand-primary);\n  }\n}\n\n.formElements {\n  & :global(.btn) {\n    border-radius: 0;\n  }\n}\n\n\n@media (min-width: 768px) {\n  :global(.form-inline .control-label) {\n    margin-right: 5px;\n    }\n  :global(.form-inline .checkbox) {\n    margin-right: 5px;\n  }\n}\n\n@media (max-width: 768px) {\n  .formElements {\n    & :global(.form-horizontal .form-group > div) {\n      text-align: left !important;\n    }\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"underline": "Elements_underline_2Gt",
  	"formElements": "Elements_formElements_1fD"
  };

/***/ }

};;
//# sourceMappingURL=server.elements.js.map