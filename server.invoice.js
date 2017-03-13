require("source-map-support").install();
exports.ids = [23];
exports.modules = {

/***/ 277:
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
  
  var _Invoice = __webpack_require__(278);
  
  var _Invoice2 = _interopRequireDefault(_Invoice);
  
  var _Link = __webpack_require__(27);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Invoice';
  
  var Invoice = function (_Component) {
    (0, _inherits3.default)(Invoice, _Component);
  
    function Invoice() {
      (0, _classCallCheck3.default)(this, Invoice);
      return (0, _possibleConstructorReturn3.default)(this, (Invoice.__proto__ || (0, _getPrototypeOf2.default)(Invoice)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Invoice, [{
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
            _reactBootstrap.Panel,
            null,
            _react2.default.createElement(
              'div',
              { className: _Invoice2.default.invoice },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6' },
                  _react2.default.createElement(
                    _Link2.default,
                    { to: '/' },
                    _react2.default.createElement(
                      'span',
                      { className: ' ' + _Invoice2.default.text + ' text-muted' },
                      '\xA0Ani Theme'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6 text-right' },
                  _react2.default.createElement(
                    'p',
                    { className: 'text-dark' },
                    '#1233219 / 01 Jan 2014 ',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'small',
                      { className: 'text-light' },
                      ' Lorem ipsum dolor sit amet '
                    )
                  )
                )
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-4' },
                  _react2.default.createElement(
                    'h4',
                    null,
                    'Client:'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Well,
                    null,
                    _react2.default.createElement(
                      'address',
                      null,
                      _react2.default.createElement(
                        'strong',
                        { className: 'text-dark' },
                        'Customer Company, Inc.'
                      ),
                      _react2.default.createElement('br', null),
                      '1 Infinite Loop',
                      _react2.default.createElement('br', null),
                      'Cupertino, CA 95014',
                      _react2.default.createElement('br', null),
                      _react2.default.createElement(
                        'abbr',
                        { title: 'Phone' },
                        'P:'
                      ),
                      ' (123) 456-7890'
                    ),
                    _react2.default.createElement(
                      'address',
                      null,
                      _react2.default.createElement(
                        'strong',
                        { className: 'text-dark' },
                        'E-mail:'
                      ),
                      '\xA0',
                      _react2.default.createElement(
                        'a',
                        { href: 'mailto:#' },
                        'info@customer.com'
                      )
                    )
                  )
                ),
                _react2.default.createElement('div', { className: 'col-md-4' }),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-4 pull-right payment-detals-wrap' },
                  _react2.default.createElement(
                    'h4',
                    null,
                    'Payment Details:'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'list-unstyled invoice-details' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'strong',
                        null,
                        'V.A.T Reg #:'
                      ),
                      ' 233243444'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'strong',
                        null,
                        'Account Name:'
                      ),
                      ' Company Ltd'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'strong',
                        null,
                        'SWIFT code:'
                      ),
                      ' 1233F4343ABCDEW'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'strong',
                        null,
                        'DATE:'
                      ),
                      ' 01/01/2014'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'strong',
                        null,
                        'DUE:'
                      ),
                      ' 11/02/2014'
                    )
                  )
                )
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-12' },
                  _react2.default.createElement(
                    _reactBootstrap.Table,
                    { bordered: true, striped: true },
                    _react2.default.createElement(
                      'thead',
                      null,
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'th',
                          null,
                          ' # '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          ' Item '
                        ),
                        _react2.default.createElement(
                          'th',
                          { className: 'hidden-480' },
                          ' Description '
                        ),
                        _react2.default.createElement(
                          'th',
                          { className: 'hidden-480' },
                          ' Quantity '
                        ),
                        _react2.default.createElement(
                          'th',
                          { className: 'hidden-480' },
                          ' Unit Cost '
                        ),
                        _react2.default.createElement(
                          'th',
                          null,
                          ' Total '
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
                          ' 1 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          ' Lorem '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' Drem psum dolor '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' 12 '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' $35 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          ' $1152 '
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          ' 2 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          ' Ipsum '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' Consectetuer adipiscing elit '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' 21 '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' $469 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          ' $6159 '
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          ' 3 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          ' Dolor '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' Olor sit amet adipiscing eli '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' 24 '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' $144 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          ' $8270 '
                        )
                      ),
                      _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                          'td',
                          null,
                          ' 4 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          ' Sit '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' Laoreet dolore magna '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' 194 '
                        ),
                        _react2.default.createElement(
                          'td',
                          { className: 'hidden-480' },
                          ' $317 '
                        ),
                        _react2.default.createElement(
                          'td',
                          null,
                          ' $966 '
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
                  { className: 'col-sm-12 invoice-block' },
                  _react2.default.createElement(
                    'ul',
                    { className: 'list-unstyled amounts text-small', style: { textAlign: 'right' } },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'strong',
                        null,
                        'Sub-Total:'
                      ),
                      ' $12,876'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'strong',
                        null,
                        'Discount:'
                      ),
                      ' 9.9%'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'strong',
                        null,
                        'VAT:'
                      ),
                      ' 22%'
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'text-extra-large' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        'Total:'
                      ),
                      ' $11,400'
                    )
                  ),
                  _react2.default.createElement(
                    'a',
                    { className: 'btn btn-rounded btn-primary btn-o hidden-print pull-right' },
                    'Submit Your Invoice ',
                    _react2.default.createElement('i', { className: 'fa fa-check' })
                  ),
                  ' \xA0\xA0\xA0',
                  _react2.default.createElement(
                    'a',
                    {
                      onClick: function onClick(e) {
                        e.preventDefaut();
                      },
                      className: 'btn btn-bordered btn-hover hidden-print pull-right'
                    },
                    'Print ',
                    _react2.default.createElement('i', { className: 'fa fa-print' })
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Invoice;
  }(_react.Component);
  
  Invoice.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(_Invoice2.default)(Invoice);

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(279);
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
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../node_modules/postcss-loader/index.js?pack=default!./Invoice.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../node_modules/postcss-loader/index.js?pack=default!./Invoice.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, ".Invoice_text_39X {\n  font-size: 30px;\n}\n\n.Invoice_invoice_XBV {\n}\n\n.Invoice_invoice_XBV .btn {\n  margin-right: 5px;\n  border-radius: 30px;\n}\n\n.Invoice_invoice_XBV .btn-primary {\n  background: #3ca2e0;\n  color: #FFF;\n  border-color: #3ca2e0;\n}\n\n.Invoice_invoice_XBV .btn-bordered {\n  background: #fff;\n  border-width: 2px;\n  border-color: #3ca2e0;\n}\n\n.Invoice_invoice_XBV .btn-bordered.btn-primary {\n  border-color: #3ca2e0;\n  color: #3ca2e0;\n}\n\n.Invoice_invoice_XBV .btn-bordered.btn-hover:hover {\n  background: #3ca2e0;\n  color: #fff;\n}\n\n.Invoice_invoice_XBV .btn-bordered.btn-o:hover {\n  background: #2089c9;\n  color: #fff;\n}\n\n.Invoice_invoice_XBV .btn-rounded {\n  border-radius: 50px;\n}\n", "", {"version":3,"sources":["/./routes/dashboard/Invoice/Invoice.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;CACjB;;AAED;CAkCC;;AAjCC;EACE,kBAAkB;EAClB,oBAAoB;CACrB;;AACD;EACE,oBAAoB;EACpB,YAAY;EACZ,sBAAsB;CACvB;;AAED;EACE,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;CACvB;;AAED;EACE,sBAAsB;EACtB,eAAe;CAChB;;AAED;EACI,oBAAoB;EACpB,YAAY;CACf;;AACD;EACI,oBAAoB;EACpB,YAAY;CACf;;AAED;EACI,oBAAoB;CACvB","file":"Invoice.css","sourcesContent":[".text {\n  font-size: 30px;\n}\n\n.invoice {\n  & :global(.btn) {\n    margin-right: 5px;\n    border-radius: 30px;\n  }\n  & :global(.btn-primary) {\n    background: #3ca2e0;\n    color: #FFF;;\n    border-color: #3ca2e0;\n  }\n\n  & :global(.btn-bordered) {\n    background: #fff;\n    border-width: 2px;\n    border-color: #3ca2e0;\n  }\n\n  & :global(.btn-bordered.btn-primary) {\n    border-color: #3ca2e0;\n    color: #3ca2e0;\n  }\n\n  & :global(.btn-bordered.btn-hover:hover) {\n      background: #3ca2e0;\n      color: #fff;\n  }\n  & :global(.btn-bordered.btn-o:hover) {\n      background: #2089c9;\n      color: #fff;\n  }\n\n  & :global(.btn-rounded) {\n      border-radius: 50px;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"text": "Invoice_text_39X",
  	"invoice": "Invoice_invoice_XBV"
  };

/***/ }

};;
//# sourceMappingURL=server.invoice.js.map