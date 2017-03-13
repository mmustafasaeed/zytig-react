require("source-map-support").install();
exports.ids = [15];
exports.modules = {

/***/ 242:
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
  
  var _Breadcrumb = __webpack_require__(243);
  
  var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
  
  var _Pager = __webpack_require__(244);
  
  var _Pager2 = _interopRequireDefault(_Pager);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Pagination';
  
  var Paginations = function (_Component) {
    (0, _inherits3.default)(Paginations, _Component);
  
    function Paginations(props) {
      (0, _classCallCheck3.default)(this, Paginations);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Paginations.__proto__ || (0, _getPrototypeOf2.default)(Paginations)).call(this, props));
  
      _this.state = {
        activePage1: 1,
        activePage2: 4,
        activePage3: 3
      };
      _this.handleSelect1 = _this.handleSelect1.bind(_this);
      _this.handleSelect2 = _this.handleSelect2.bind(_this);
      _this.handleSelect3 = _this.handleSelect3.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(Paginations, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'handleSelect1',
      value: function handleSelect1(selectedEvent) {
        this.setState({
          activePage1: selectedEvent
        });
      }
    }, {
      key: 'handleSelect2',
      value: function handleSelect2(selectedEvent) {
        this.setState({
          activePage2: selectedEvent
        });
      }
    }, {
      key: 'handleSelect3',
      value: function handleSelect3(selectedEvent) {
        this.setState({
          activePage3: selectedEvent
        });
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
                    ' Breadcrumb '
                  ),
                  bsStyle: 'success'
                },
                _react2.default.createElement(
                  'div',
                  { className: 'clearfix' },
                  _react2.default.createElement(
                    _Breadcrumb2.default,
                    null,
                    _react2.default.createElement(
                      _Breadcrumb.Item,
                      { active: true },
                      _react2.default.createElement('span', { className: 'fa fa-home' })
                    ),
                    _react2.default.createElement(
                      _Breadcrumb.Item,
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();
                        } },
                      'Library'
                    ),
                    _react2.default.createElement(
                      _Breadcrumb.Item,
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();
                        } },
                      'Data'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'clearfix' },
                  _react2.default.createElement(
                    _Breadcrumb2.default,
                    { className: 'pull-right' },
                    _react2.default.createElement(
                      _Breadcrumb.Item,
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();
                        } },
                      _react2.default.createElement('span', { className: 'fa fa-home' })
                    ),
                    _react2.default.createElement(
                      _Breadcrumb.Item,
                      { active: true },
                      'Library'
                    ),
                    _react2.default.createElement(
                      _Breadcrumb.Item,
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();
                        } },
                      'Data'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'clearfix' },
                  _react2.default.createElement(
                    _Breadcrumb2.default,
                    null,
                    _react2.default.createElement(
                      _Breadcrumb.Item,
                      { active: true },
                      _react2.default.createElement('span', { className: 'fa fa-home' })
                    ),
                    _react2.default.createElement(
                      _Breadcrumb.Item,
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();
                        } },
                      'Library'
                    ),
                    _react2.default.createElement(
                      _Breadcrumb.Item,
                      { href: '', onClick: function onClick(e) {
                          e.preventDefault();
                        } },
                      'Data'
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
                    'Pager'
                  ),
                  bsStyle: 'warning'
                },
                _react2.default.createElement(
                  _Pager2.default,
                  null,
                  _react2.default.createElement(
                    _Pager.Item,
                    { href: '', onClick: function onClick(e) {
                        e.preventDefault();
                      } },
                    'Previous'
                  ),
                  _react2.default.createElement(
                    _Pager.Item,
                    { href: '', onClick: function onClick(e) {
                        e.preventDefault();
                      } },
                    'Next'
                  )
                ),
                _react2.default.createElement(
                  _Pager2.default,
                  null,
                  _react2.default.createElement(
                    _Pager.Item,
                    { previous: true, href: '', onClick: function onClick(e) {
                        e.preventDefault();
                      } },
                    _react2.default.createElement('i', { className: 'fa fa-angle-double-left' }),
                    ' Previous'
                  ),
                  _react2.default.createElement(
                    _Pager.Item,
                    { next: true, href: '', onClick: function onClick(e) {
                        e.preventDefault();
                      } },
                    'Next ',
                    _react2.default.createElement('i', { className: 'fa fa-angle-double-right' })
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
                    'Pagination'
                  ),
                  bsStyle: 'info'
                },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reactBootstrap.Pagination, {
                    prev: true,
                    next: true,
                    first: true,
                    last: true,
                    activePage: this.state.activePage1,
                    items: 20,
                    maxButtons: 7,
                    bsSize: 'small',
                    onSelect: this.handleSelect1
                  })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'text-center' },
                  _react2.default.createElement(_reactBootstrap.Pagination, {
                    prev: true,
                    next: true,
                    first: true,
                    last: true,
                    activePage: this.state.activePage2,
                    items: 20,
                    maxButtons: 7,
                    bsSize: 'small',
                    onSelect: this.handleSelect2
                  })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'pull-right' },
                  _react2.default.createElement(_reactBootstrap.Pagination, {
                    prev: true,
                    next: true,
                    first: true,
                    last: true,
                    activePage: this.state.activePage3,
                    items: 20,
                    maxButtons: 7,
                    bsSize: 'small',
                    onSelect: this.handleSelect3
                  })
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Pagination Size'
                  ),
                  bsStyle: 'danger'
                },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reactBootstrap.Pagination, {
                    prev: true,
                    next: true,
                    first: true,
                    last: true,
                    items: 20,
                    maxButtons: 5,
                    bsSize: 'large'
                  })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reactBootstrap.Pagination, {
                    prev: true,
                    next: true,
                    first: true,
                    last: true,
                    items: 20,
                    maxButtons: 7,
                    bsSize: 'medium'
                  })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reactBootstrap.Pagination, {
                    prev: true,
                    next: true,
                    first: true,
                    last: true,
                    items: 20,
                    maxButtons: 7,
                    bsSize: 'small'
                  })
                )
              )
            )
          )
        );
      }
    }]);
    return Paginations;
  }(_react.Component);
  
  Paginations.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = Paginations;

/***/ },

/***/ 243:
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Breadcrumb");

/***/ },

/***/ 244:
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Pager");

/***/ }

};;
//# sourceMappingURL=server.paginations.js.map