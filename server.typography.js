require("source-map-support").install();
exports.ids = [4];
exports.modules = {

/***/ 204:
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
  
  // import Link from '../../../components/Link';
  
  var title = 'Typography';
  
  var Typography = function (_Component) {
    (0, _inherits3.default)(Typography, _Component);
  
    function Typography() {
      (0, _classCallCheck3.default)(this, Typography);
      return (0, _possibleConstructorReturn3.default)(this, (Typography.__proto__ || (0, _getPrototypeOf2.default)(Typography)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Typography, [{
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
              { className: 'col-md-6 col-lg-8' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Typography'
                  ),
                  bsStyle: 'primary'
                },
                _react2.default.createElement(
                  'h1',
                  null,
                  'Heading 1 ',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'h2',
                  null,
                  'Heading 2 ',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Heading 3 ',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Heading 4 ',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'h5',
                  null,
                  'Heading 5 ',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'h6',
                  null,
                  'Heading 6 ',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Sub-heading'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'lead' },
                  'This is an example of lead body copy.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'This is an example of standard paragraph text. This is an example of',
                  _react2.default.createElement(
                    'a',
                    { href: '', onClick: function onClick(e) {
                        e.preventDefault();
                      } },
                    ' link anchor text'
                  ),
                  'within body copy.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'small',
                    null,
                    'This is an example of small, fine print text.'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'strong',
                    null,
                    'This is an example of strong, bold text.'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'em',
                    null,
                    'This is an example of emphasized, italic text.'
                  ),
                  ' '
                ),
                ' ',
                _react2.default.createElement('br', null)
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'BlockQuotes'
                  ),
                  bsStyle: 'danger'
                },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Default Blockquote'
                ),
                _react2.default.createElement(
                  'blockquote',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Blockquote with Citation'
                ),
                _react2.default.createElement(
                  'blockquote',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  ),
                  _react2.default.createElement(
                    'small',
                    null,
                    'Someone famous in ',
                    _react2.default.createElement(
                      'cite',
                      { title: 'Source Title' },
                      'Source Title'
                    ),
                    ' '
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Right Aligned Blockquote'
                ),
                _react2.default.createElement(
                  'blockquote',
                  { className: 'pull-right' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Wells'
                  ) },
                _react2.default.createElement(
                  _reactBootstrap.Well,
                  { bsSize: 'small', className: 'no-margin' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam perferendis molestias, quibusdam veritatis laborum eius ex. Quaerat harum voluptatibus recusandae consequatur? Id, repudiandae! Dolor blanditiis voluptate porro, perferendis voluptas, ad!'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Code'
                  ), bsStyle: 'warning' },
                _react2.default.createElement(
                  'p',
                  null,
                  'This is an example of an inline code element within body copy. Wrap inline code within a ',
                  _react2.default.createElement(
                    'code',
                    null,
                    '<code>...</code>'
                  ),
                  'tag.'
                ),
                _react2.default.createElement(
                  'pre',
                  { className: 'no-margin' },
                  'This is an example of preformatted text.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-4 col-md-6' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Unordered Lists'
                  ),
                  bsStyle: 'info'
                },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur '
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'elit. Necessitatibus quidem similique'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'lorem ipsum dolor sit amet',
                    _react2.default.createElement(
                      'ul',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        'on debitis'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        'error odio'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        ' n dolore magni'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Ordered Lists'
                  ),
                  bsStyle: 'warning'
                },
                _react2.default.createElement(
                  'ol',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item lorem ipsum dolor'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item lorem ipsum dolor'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item lorem ipsum dolor'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item lorem ipsum dolor'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Unstyled List'
                  ),
                  bsStyle: 'primary'
                },
                _react2.default.createElement(
                  'ul',
                  { className: 'list-unstyled' },
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item lorem ipsum'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item lorem ipsum'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item lorem ipsum'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Inline List'
                  ),
                  bsStyle: 'danger'
                },
                _react2.default.createElement(
                  'ul',
                  { className: 'list-inline' },
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'List Item'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Emphasis Classes'
                  ),
                  bsStyle: 'info'
                },
                _react2.default.createElement(
                  'p',
                  { className: 'text-muted' },
                  'This is an example of muted text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-primary' },
                  'This is an example of primary text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-success' },
                  'This is an example of success text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-info' },
                  'This is an example of info text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-warning' },
                  'This is an example of warning text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-danger' },
                  'This is an example of danger text.'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    'Alignment Helpers'
                  ),
                  bsStyle: 'primary'
                },
                _react2.default.createElement(
                  'p',
                  { className: 'text-left' },
                  'Left aligned text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-center' },
                  'Center aligned text.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-right' },
                  'Right aligned text.'
                )
              )
            )
          )
        );
      }
    }]);
    return Typography;
  }(_react.Component);
  
  Typography.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = Typography;

/***/ }

};;
//# sourceMappingURL=server.typography.js.map