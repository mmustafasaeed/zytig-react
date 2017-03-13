require("source-map-support").install();
exports.ids = [14];
exports.modules = {

/***/ 240:
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
  
  var title = 'Progress Bar';
  
  var ProgressBarsPage = function (_Component) {
    (0, _inherits3.default)(ProgressBarsPage, _Component);
  
    function ProgressBarsPage(props) {
      (0, _classCallCheck3.default)(this, ProgressBarsPage);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ProgressBarsPage.__proto__ || (0, _getPrototypeOf2.default)(ProgressBarsPage)).call(this, props));
  
      _this.state = {
        value2: 81,
        color1: 'danger',
        message1: 'Danger !!! Watch out !!!',
        value1: 20,
        value3: 17,
        value4: 24,
        value5: 11,
        color2: 'info',
        color3: 'danger',
        color4: 'warning'
      };
      _this.randomizeValues = _this.randomizeValues.bind(_this);
      _this.randomStackValues = _this.randomStackValues.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(ProgressBarsPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'randomizeValues',
      value: function randomizeValues() {
        this.setState({ value1: Math.floor(Math.random() * 200) });
        this.setState({ value2: Math.floor(Math.random() * 100) });
        if (this.state.value2 < 30) {
          this.setState({ color1: 'success' });
          this.setState({ message1: 'success' });
        } else if (this.state.value2 < 50) {
          this.setState({ color1: 'info' });
          this.setState({ message1: 'info' });
        } else if (this.state.value2 < 70) {
          this.setState({ color1: 'warning' });
          this.setState({ message1: 'Warning !!! Watch out !!!' });
        } else {
          this.setState({ color1: 'danger' });
          this.setState({ message1: 'Danger !!! Watch out !!!' });
        }
      }
    }, {
      key: 'randomStackValues',
      value: function randomStackValues() {
        this.setState({ value3: Math.floor(Math.random() * 30) });
        this.setState({ value4: Math.floor(Math.random() * 30) });
        this.setState({ value5: Math.floor(Math.random() * 40) });
        if (this.state.value3 < 15) {
          this.setState({ color2: 'info' });
        } else {
          this.setState({ color2: 'success' });
        }
        if (this.state.value3 < 15) {
          this.setState({ color2: 'primary' });
        } else {
          this.setState({ color2: 'warning' });
        }
  
        if (this.state.value3 < 15) {
          this.setState({ color2: 'success' });
        } else {
          this.setState({ color2: 'danger' });
        }
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
                    'Progress Bars'
                  ),
                  bsStyle: 'success'
                },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Regular'
                ),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { now: 47 }),
                _react2.default.createElement(
                  'h4',
                  null,
                  'With label'
                ),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { now: 63, label: '63%' }),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Stacked'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ProgressBar,
                  null,
                  _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'success', now: 22, key: 1 }),
                  _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'danger', now: 12, key: 2 }),
                  _react2.default.createElement(_reactBootstrap.ProgressBar, { active: true, bsStyle: 'warning', now: 27, key: 3 })
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
                    'Contextual Progressbars'
                  ),
                  bsStyle: 'info'
                },
                _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'success', now: 97 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { now: 63 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'info', now: 52 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'warning', now: 31 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'danger', now: 16 })
              )
            )
          ),
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
                    'Striped Progresbars'
                  )
                },
                _react2.default.createElement(_reactBootstrap.ProgressBar, { striped: true, bsStyle: 'success', now: 97 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { striped: true, bsStyle: 'info', now: 52 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { striped: true, now: 63 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { striped: true, bsStyle: 'warning', now: 31 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { striped: true, bsStyle: 'danger', now: 16 })
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
                    'Animated Progresbars'
                  ),
                  bsStyle: 'danger'
                },
                _react2.default.createElement(_reactBootstrap.ProgressBar, { active: true, now: 65 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { active: true, bsStyle: 'success', now: 92 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { active: true, bsStyle: 'info', now: 77 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { active: true, bsStyle: 'warning', now: 34 }),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { active: true, bsStyle: 'danger', now: 22 })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-12' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'ReactJS Dynamic Progressbars'
                  ),
                  bsStyle: 'warning'
                },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Dynamic\xA0',
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsSize: 'small', onClick: this.randomizeValues },
                    'Randomize'
                  )
                ),
                _react2.default.createElement(_reactBootstrap.ProgressBar, { max: 200, now: this.state.value1, label: this.state.value1 + '/200' }),
                _react2.default.createElement(
                  'small',
                  null,
                  _react2.default.createElement(
                    'em',
                    null,
                    'No animation'
                  )
                ),
                _react2.default.createElement(_reactBootstrap.ProgressBar, {
                  bsStyle: 'success',
                  now: this.state.value2,
                  label: this.state.value2 + '%'
                }),
                _react2.default.createElement(
                  'small',
                  null,
                  _react2.default.createElement(
                    'em',
                    null,
                    'Object (changes type based on value)'
                  )
                ),
                _react2.default.createElement(_reactBootstrap.ProgressBar, {
                  active: true, bsStyle: this.state.color1,
                  now: this.state.value2,
                  label: this.state.message1
                }),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Stacked\xA0',
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsSize: 'small', onClick: this.randomStackValues },
                    'Randomize'
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.ProgressBar,
                  null,
                  _react2.default.createElement(_reactBootstrap.ProgressBar, {
                    bsStyle: this.state.color2,
                    now: this.state.value3,
                    label: this.state.value3 + '%'
                  }),
                  _react2.default.createElement(_reactBootstrap.ProgressBar, {
                    bsStyle: this.state.color3,
                    now: this.state.value4,
                    label: this.state.value4 + '%'
                  }),
                  _react2.default.createElement(_reactBootstrap.ProgressBar, {
                    bsStyle: this.state.color4,
                    now: this.state.value5,
                    label: this.state.value5 + '%'
                  })
                )
              )
            )
          )
        );
      }
    }]);
    return ProgressBarsPage;
  }(_react.Component);
  
  ProgressBarsPage.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = ProgressBarsPage;

/***/ }

};;
//# sourceMappingURL=server.progressbars.js.map