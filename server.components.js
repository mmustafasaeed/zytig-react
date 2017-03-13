require("source-map-support").install();
exports.ids = [7];
exports.modules = {

/***/ 212:
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
  
  var _reactDatepicker = __webpack_require__(213);
  
  var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);
  
  var _moment = __webpack_require__(73);
  
  var _moment2 = _interopRequireDefault(_moment);
  
  var _reactBootstrap = __webpack_require__(60);
  
  var _FormControl = __webpack_require__(214);
  
  var _FormControl2 = _interopRequireDefault(_FormControl);
  
  var _InputGroup = __webpack_require__(215);
  
  var _InputGroup2 = _interopRequireDefault(_InputGroup);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Components = __webpack_require__(216);
  
  var _Components2 = _interopRequireDefault(_Components);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Form Component';
  
  var FormComponent = function (_Component) {
    (0, _inherits3.default)(FormComponent, _Component);
  
    function FormComponent(props) {
      (0, _classCallCheck3.default)(this, FormComponent);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (FormComponent.__proto__ || (0, _getPrototypeOf2.default)(FormComponent)).call(this, props));
  
      _this.state = {
        switchState: true,
        startDate: (0, _moment2.default)()
      };
      _this.handleChange = _this.handleChange.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(FormComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'handleChange',
      value: function handleChange(date) {
        this.setState({
          startDate: date
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'row animate', id: 'formComponent' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              {
                header: _react2.default.createElement(
                  'span',
                  null,
                  'Components'
                ),
                bsStyle: 'primary'
              },
              _react2.default.createElement(
                _reactBootstrap.Form,
                { horizontal: true },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'normal' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    ' Normal '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: '' })
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'password' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    ' Password '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'password', placeholder: 'password' })
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'helpText' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    ' Help Text '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: 'Help Text' }),
                    _react2.default.createElement(
                      _reactBootstrap.HelpBlock,
                      null,
                      'Example block-level help text here.'
                    )
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'placeholder' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    ' Place Holder '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'input', placeholder: 'placeholder' })
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'lineForm' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    ' Line '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'input', placeholder: 'line', className: _Components2.default.underline })
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'disabledForm' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    ' Disabled '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'input', placeholder: 'Disabled Input Form', disabled: true })
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'staticForm' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    ' Static Text '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(
                      _FormControl.Static,
                      null,
                      'email@example.com'
                    )
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'checkboxAndRadio' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2, style: { marginTop: '13px' } },
                    'Checkbox and Radio'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(
                      _reactBootstrap.Checkbox,
                      null,
                      'Option one is this and that\u2014be sure to include why it\'s great'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Checkbox,
                      { disabled: true },
                      'Option two is disabled'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Radio,
                      null,
                      'Option one is this and that\u2014be sure to include why it\'s great'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Radio,
                      null,
                      'Option two can be something else and selecting it will deselect option one'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Radio,
                      { disabled: true },
                      'Option three is disabled'
                    )
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 2, className: 'text-right' },
                    ' Button Switch '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(
                      'label',
                      { className: 'switch', htmlFor: 'toggleCheckboxSquare' },
                      _react2.default.createElement('input', { id: 'toggleCheckboxSquare', type: 'checkbox' }),
                      _react2.default.createElement('div', { className: 'slider' })
                    ),
                    ' \xA0',
                    _react2.default.createElement(
                      'label',
                      { className: 'switch', htmlFor: 'toggleCheckboxRound' },
                      _react2.default.createElement('input', { id: 'toggleCheckboxRound', type: 'checkbox' }),
                      _react2.default.createElement('div', { className: 'slider round' })
                    )
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { htmlFor: 'inputtext', sm: 2, className: 'm-t-0' },
                    'Custom Checkboxes and Radio Buttons'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 2 },
                    _react2.default.createElement(
                      'label',
                      { className: 'checkbox1', htmlFor: 'Option' },
                      _react2.default.createElement('input', { id: 'Option', type: 'checkbox', className: '' }),
                      _react2.default.createElement('span', null)
                    ),
                    _react2.default.createElement(
                      'label',
                      { className: 'radio1', htmlFor: 'Option1' },
                      _react2.default.createElement('input', { id: 'Option1', name: 'one', type: 'radio', className: '' }),
                      _react2.default.createElement('span', null)
                    ),
                    _react2.default.createElement(
                      'label',
                      { className: 'radio1', htmlFor: 'Option2' },
                      _react2.default.createElement('input', { id: 'Option2', name: 'one', type: 'radio', className: '' }),
                      _react2.default.createElement('span', null)
                    ),
                    _react2.default.createElement(
                      'label',
                      { className: 'radio1', htmlFor: 'Option3' },
                      _react2.default.createElement('input', { id: 'Option3', name: 'one', type: 'radio', className: '' }),
                      _react2.default.createElement('span', null)
                    )
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'select' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    ' Select '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(
                      _FormControl2.default,
                      { componentClass: 'select', placeholder: 'select' },
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '1'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '2'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '3'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '4'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '5'
                      )
                    )
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'multipleSelect' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    ' Multiple Select '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(
                      _FormControl2.default,
                      { componentClass: 'select', placeholder: ' Multiple Select', multiple: true },
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '1'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '2'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '3'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '4'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '5'
                      )
                    )
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'inputSuccess', validationState: 'success' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Input with success'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: '' })
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'inputWarning', validationState: 'warning' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Input with warning'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: '' })
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'inputDanger', validationState: 'error' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Input with danger'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: '' })
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'controlSize' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    'Control Sizing'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10, id: 'columnSize' },
                    _react2.default.createElement(
                      _reactBootstrap.FormGroup,
                      { controlId: 'controlSizeLarge', bsSize: 'lg' },
                      _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: 'Large Input Form' })
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.FormGroup,
                      { controlId: 'controlSizeNormal' },
                      _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: 'Normal Input Form' })
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.FormGroup,
                      { controlId: 'controlSizeLarge', bsSize: 'sm' },
                      _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: 'Small Input Form' })
                    )
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'columnSize' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    'Column Sizing'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 2 },
                    _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: 'col-sm-2' })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 3 },
                    _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: 'col-sm-3' })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 5 },
                    _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: 'col-sm-5' })
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'inputGroup' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    ' Input Group '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(
                      _InputGroup2.default,
                      null,
                      _react2.default.createElement(
                        _InputGroup.Addon,
                        null,
                        '@'
                      ),
                      _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: 'UserName' })
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      _InputGroup2.default,
                      null,
                      _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: '' }),
                      _react2.default.createElement(
                        _InputGroup.Addon,
                        null,
                        '.00'
                      )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      _InputGroup2.default,
                      null,
                      _react2.default.createElement(
                        _InputGroup.Addon,
                        null,
                        '$'
                      ),
                      _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: '' }),
                      _react2.default.createElement(
                        _InputGroup.Addon,
                        null,
                        '.00'
                      )
                    )
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'buttonAddons' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right', sm: 2 },
                    ' Button Addons '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(
                      _InputGroup2.default,
                      null,
                      _react2.default.createElement(
                        _InputGroup.Button,
                        null,
                        _react2.default.createElement(
                          _reactBootstrap.Button,
                          null,
                          ' Go! '
                        ),
                        ' '
                      ),
                      _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: '' })
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      _InputGroup2.default,
                      null,
                      _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: '' }),
                      _react2.default.createElement(
                        _InputGroup.Button,
                        null,
                        _react2.default.createElement(
                          _reactBootstrap.Button,
                          null,
                          ' Go '
                        ),
                        ' '
                      )
                    )
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'datePicker' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { className: 'text-right mt-5', sm: 2, style: { marginTop: '13px' } },
                    'Date Picker'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 10 },
                    _react2.default.createElement(_reactDatepicker2.default, {
                      className: 'form-control',
                      selected: this.state.startDate,
                      onChange: this.handleChange
                    })
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return FormComponent;
  }(_react.Component);
  
  FormComponent.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(_Components2.default)(FormComponent);

/***/ },

/***/ 213:
/***/ function(module, exports) {

  module.exports = require("react-datepicker");

/***/ },

/***/ 214:
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/FormControl");

/***/ },

/***/ 215:
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/InputGroup");

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(217);
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
        module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../../node_modules/postcss-loader/index.js?pack=default!./Components.css", function() {
          content = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../../node_modules/postcss-loader/index.js?pack=default!./Components.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n/*======================================\nvariable for ani theme\n======================================*/\n\n}\n\n.Components_underline_1Qw {\n  background: none !important;\n  background-image: none;\n  border: 1px solid #c8c7cc;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-radius: 0 0 0 0 !important;\n  color: #5b5b60;\n  font-family: inherit;\n  font-size: 14px;\n  line-height: 1.2;\n  padding: 5px 4px;\n  -webkit-transition-duration: 0.1s;\n       -o-transition-duration: 0.1s;\n          transition-duration: 0.1s;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  -o-transition: border 300ms ease-out;\n  -webkit-transition: border 300ms ease-out;\n  transition: border 300ms ease-out\n}\n\n.Components_underline_1Qw:focus {\n  border-color: #3ca2e0\n\n}\n\n.Components_onOffSwitch_1eG{\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n\n  .Components_slider_yDV.Components_round_202 {\n    border-radius: 34px;\n  }\n\n\n\n}\n\n.Components_onOffSwitch_1eG .Components_onOffSwitchCheckbox_3nf {\n  display: none\n\n}\n\n.Components_onOffSwitch_1eG .Components_slider_yDV {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  -o-transition: .4s;\n  transition: .4s\n\n}\n\n.Components_onOffSwitch_1eG .Components_slider_yDV:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  -o-transition: .4s;\n  transition: .4s\n\n}\n\n.Components_onOffSwitch_1eG input:checked .Components_slider_yDV {\n  background-color: red\n\n}\n\n.Components_onOffSwitch_1eG input:focus .Components_slider_yDV {\n  -webkit-box-shadow: 0 0 1px red;\n          box-shadow: 0 0 1px red\n\n}\n\n.Components_onOffSwitch_1eG input:checked .Components_slider_yDV:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  -o-transform: translateX(26px);\n     transform: translateX(26px)\n\n}\n\n.Components_onOffSwitch_1eG .Components_slider_yDV.Components_round_202:before {\n  border-radius: 50%\n\n}\n\n/*.onOffSwitch {\n  position: relative;\n  display: inline-block;\n  width: 55px;\n  height: 34px;\n  user-select: none;\n  & .onOffSwitchCheckbox {\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 55px;\n    height: 28px;\n  }\n  & .onOffSwitchLabel {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    & .onOffSwitchInner {\n      display: block;\n      width: 200%;\n      margin-right: -100%;\n      transition: all 300ms linear;\n    }\n    & .onOffSwitchSwitch {\n      box-shadow: 0 0 0 1px rgba(0,0,0,0.1);\n      display: block; width: 26px; height:26px; margin: 0 1px 0 0;\n      background: #FFFFFF;\n      border-radius: 26px;\n      position: absolute; top: 1px; bottom: 0; right: 26px;\n      transition: all 300ms linear;\n    }\n  }\n}*/\n\n/*#formComponent {\n  & :global(.form-horizontal .form-group) {\n    margin-left: -5px;\n    margin-right: -5px;\n  }\n}*/\n\n.react-datepicker__input-container {\n  width: 100%;\n}", "", {"version":3,"sources":["/./components/variables.css","/./routes/dashboard/Forms/Components/Components.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;;AAE5D;;wCAEwC;;CAQvC;;ACvCD;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,0BAA0B;EAC1B,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,kCAAkC;EAClC,eAAe;EACf,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,kCAA0B;OAA1B,6BAA0B;UAA1B,0BAA0B;EAC1B,oCAA4B;UAA5B,4BAA4B;EAE5B,qCAAqC;EACrC,0CAA0C;EAC1C,iCAAkC;CAInC;;AAHC;EACE,qBAAmC;;CACpC;;AAIH;EACE,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,aAAa;;EA2Cb;IACE,oBAAoB;GACrB;;;;CAQF;;AAnDC;EACE,aAAc;;CACf;;AAED;EACE,mBAAmB;EACnB,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,uBAAuB;EACvB,wBAAwB;EACxB,mBAAgB;EAAhB,eAAgB;;CAYjB;;AAXC;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,wBAAwB;EACxB,wBAAwB;EACxB,mBAAgB;EAAhB,eAAgB;;CACjB;;AAGH;EACE,qBAAsB;;CACvB;;AAED;EACI,gCAAwB;UAAxB,uBAAwB;;CAC3B;;AAED;EACE,oCAAoC;EACpC,gCAAgC;EAChC,+BAA4B;KAA5B,2BAA4B;;CAC7B;;AAMD;EACE,kBAAmB;;CACpB;;AAQH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAiCG;;AAMH;;;;;GAKG;;AAEH;EACE,YAAY;CACb","file":"Components.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n/*======================================\nvariable for ani theme\n======================================*/\n\n  --nav-width       : 235px;\n  --brand-primary   : #3ca2e0;\n  --brand-secondary : #7BB77C;\n  --brand-danger    : #de6764;\n  --brand-black     : #ffffff\n\n}\n","@import '../../../../components/variables.css';\n\n.underline {\n  background: none !important;\n  background-image: none;\n  border: 1px solid #c8c7cc;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-radius: 0 0 0 0 !important;\n  color: #5b5b60;\n  font-family: inherit;\n  font-size: 14px;\n  line-height: 1.2;\n  padding: 5px 4px;\n  transition-duration: 0.1s;\n  box-shadow: none !important;\n  -moz-transition: border 300ms ease-out;\n  -o-transition: border 300ms ease-out;\n  -webkit-transition: border 300ms ease-out;\n  transition: border 300ms ease-out;\n  &:focus {\n    border-color: var(--brand-primary);\n  }\n}\n\n\n.onOffSwitch{\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n\n  & .onOffSwitchCheckbox {\n    display: none;\n  }\n\n  & .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n    &:before {\n      position: absolute;\n      content: \"\";\n      height: 26px;\n      width: 26px;\n      left: 4px;\n      bottom: 4px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n  }\n\n  & input:checked .slider {\n    background-color: red;\n  }\n\n  & input:focus .slider {\n      box-shadow: 0 0 1px red;\n  }\n\n  & input:checked .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n  .slider.round {\n    border-radius: 34px;\n  }\n\n  & .slider.round:before {\n    border-radius: 50%;\n  }\n\n\n\n}\n\n\n\n/*.onOffSwitch {\n  position: relative;\n  display: inline-block;\n  width: 55px;\n  height: 34px;\n  user-select: none;\n  & .onOffSwitchCheckbox {\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 55px;\n    height: 28px;\n  }\n  & .onOffSwitchLabel {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    & .onOffSwitchInner {\n      display: block;\n      width: 200%;\n      margin-right: -100%;\n      transition: all 300ms linear;\n    }\n    & .onOffSwitchSwitch {\n      box-shadow: 0 0 0 1px rgba(0,0,0,0.1);\n      display: block; width: 26px; height:26px; margin: 0 1px 0 0;\n      background: #FFFFFF;\n      border-radius: 26px;\n      position: absolute; top: 1px; bottom: 0; right: 26px;\n      transition: all 300ms linear;\n    }\n  }\n}*/\n\n\n\n\n\n/*#formComponent {\n  & :global(.form-horizontal .form-group) {\n    margin-left: -5px;\n    margin-right: -5px;\n  }\n}*/\n\n:global(.react-datepicker__input-container) {\n  width: 100%;\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"underline": "Components_underline_1Qw",
  	"onOffSwitch": "Components_onOffSwitch_1eG",
  	"slider": "Components_slider_yDV",
  	"round": "Components_round_202",
  	"onOffSwitchCheckbox": "Components_onOffSwitchCheckbox_3nf"
  };

/***/ }

};;
//# sourceMappingURL=server.components.js.map