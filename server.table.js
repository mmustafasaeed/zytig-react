require("source-map-support").install();
exports.ids = [6];
exports.modules = {

/***/ 210:
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
  
  var title = 'Table';
  
  var Tables = function (_Component) {
    (0, _inherits3.default)(Tables, _Component);
  
    function Tables() {
      (0, _classCallCheck3.default)(this, Tables);
      return (0, _possibleConstructorReturn3.default)(this, (Tables.__proto__ || (0, _getPrototypeOf2.default)(Tables)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Tables, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        // console.log(this.context);
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
                    'Regular Table'
                  ),
                  bsStyle: 'primary'
                },
                _react2.default.createElement(
                  _reactBootstrap.Table,
                  null,
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Name'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Email'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Address'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'John'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'john@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'London, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Andy'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'andygmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Merseyside, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Frank'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'frank@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Southampton, UK'
                      )
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
                    'Bordered Table'
                  ),
                  bsStyle: 'default'
                },
                _react2.default.createElement(
                  _reactBootstrap.Table,
                  { bordered: true },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Name'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Email'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Address'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'John'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'john@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'London, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Andy'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'andygmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Merseyside, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Frank'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'frank@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Southampton, UK'
                      )
                    )
                  )
                )
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
                    'Striped Table'
                  ),
                  bsStyle: 'info'
                },
                _react2.default.createElement(
                  _reactBootstrap.Table,
                  { striped: true },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Name'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Email'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Address'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'John'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'john@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'London, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Andy'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'andygmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Merseyside, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Frank'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'frank@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Southampton, UK'
                      )
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
                    'Hover Table'
                  ),
                  bsStyle: 'success'
                },
                _react2.default.createElement(
                  _reactBootstrap.Table,
                  { hover: true },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Name'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Email'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Address'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'John'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'john@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'London, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Andy'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'andygmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Merseyside, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Frank'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'frank@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Southampton, UK'
                      )
                    )
                  )
                )
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
                    'Condensed Table'
                  ),
                  bsStyle: 'danger'
                },
                _react2.default.createElement(
                  _reactBootstrap.Table,
                  { condensed: true },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Name'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Email'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Address'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'John'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'john@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'London, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Andy'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'andygmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Merseyside, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Frank'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'frank@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Southampton, UK'
                      )
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
                    'Condensed, Bordered, Striped Table'
                  ),
                  bsStyle: 'warning'
                },
                _react2.default.createElement(
                  _reactBootstrap.Table,
                  { condensed: true, bordered: true, striped: true },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Name'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Email'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Address'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'John'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'john@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'London, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Andy'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'andygmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Merseyside, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Frank'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'frank@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Southampton, UK'
                      )
                    )
                  )
                )
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
                    'Coloured Table'
                  ),
                  bsStyle: 'default'
                },
                _react2.default.createElement(
                  _reactBootstrap.Table,
                  { bordered: true, className: 'white' },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Name'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Email'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Address'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      { className: 'success' },
                      _react2.default.createElement(
                        'td',
                        null,
                        'John'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'john@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'London, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      { className: 'info' },
                      _react2.default.createElement(
                        'td',
                        null,
                        'Andy'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'andy@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Merseyside, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      { className: 'warning' },
                      _react2.default.createElement(
                        'td',
                        null,
                        'Frank'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'frank@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Southampton, UK'
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      { className: 'danger' },
                      _react2.default.createElement(
                        'td',
                        null,
                        'Rickie'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'rickie@gmail.com'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Burnley, UK'
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Tables;
  }(_react.Component);
  
  Tables.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = Tables;

/***/ }

};;
//# sourceMappingURL=server.table.js.map