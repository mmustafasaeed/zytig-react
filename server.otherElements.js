require("source-map-support").install();
exports.ids = [16];
exports.modules = {

/***/ 246:
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
  
  var _Carousel = __webpack_require__(247);
  
  var _Carousel2 = _interopRequireDefault(_Carousel);
  
  var _img = __webpack_require__(248);
  
  var _img2 = _interopRequireDefault(_img);
  
  var _img3 = __webpack_require__(249);
  
  var _img4 = _interopRequireDefault(_img3);
  
  var _img5 = __webpack_require__(250);
  
  var _img6 = _interopRequireDefault(_img5);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Other Elements';
  
  var OtherElements = function (_Component) {
    (0, _inherits3.default)(OtherElements, _Component);
  
    function OtherElements() {
      (0, _classCallCheck3.default)(this, OtherElements);
      return (0, _possibleConstructorReturn3.default)(this, (OtherElements.__proto__ || (0, _getPrototypeOf2.default)(OtherElements)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(OtherElements, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      } // eslint-disable-line
  
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'row animate' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-8 col-md-6' },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              {
                header: _react2.default.createElement(
                  'span',
                  null,
                  'List Group '
                ),
                bsStyle: 'primary'
              },
              _react2.default.createElement(
                _reactBootstrap.ListGroup,
                null,
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  null,
                  'Cras justo odio'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  null,
                  'Dapibus ac facilisis in'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  null,
                  'Morbi leo risus'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  null,
                  'Porta ac consectetur ac'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  null,
                  'Vestibulum at eros'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroup,
                null,
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  null,
                  'Cras justo odio',
                  _react2.default.createElement(
                    _reactBootstrap.Badge,
                    null,
                    '14'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroup,
                null,
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  { active: true },
                  'Cras justo odio'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  null,
                  'Dapibus ac facilisis in'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  null,
                  'Morbi leo risus'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  null,
                  'Porta ac consectetur ac'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  null,
                  'Vestibulum at eros'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroup,
                null,
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  { bsStyle: 'success' },
                  'Dapibus ac facilisis in'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  { bsStyle: 'info' },
                  'Morbi leo risus'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  { bsStyle: 'warning' },
                  'Porta ac consectetur ac'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  { bsStyle: 'danger' },
                  'Vestibulum at eros'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroup,
                null,
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  { header: 'List group item heading', active: true },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officiis totam eos optio!'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  { header: 'List group item heading' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officiis totam eos optio!'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  { header: 'List group item heading' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officiis totam eos optio!'
                )
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
                  'Labels & Badges'
                ),
                bsStyle: 'warning'
              },
              _react2.default.createElement(
                _reactBootstrap.Label,
                { bsStyle: 'default' },
                'labels'
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Label,
                { bsStyle: 'primary' },
                'labels'
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Label,
                { bsStyle: 'success' },
                'labels'
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Label,
                { bsStyle: 'info' },
                'labels'
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Label,
                { bsStyle: 'warning' },
                'labels'
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Label,
                { bsStyle: 'danger' },
                'labels'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _reactBootstrap.Badge,
                null,
                '35'
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Badge,
                null,
                '67'
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Badge,
                null,
                '12'
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Badge,
                null,
                '39'
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Badge,
                null,
                '07'
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Badge,
                null,
                '94'
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Badge,
                null,
                _react2.default.createElement('i', { className: 'fa fa-star' })
              ),
              '\xA0',
              _react2.default.createElement(
                _reactBootstrap.Badge,
                null,
                _react2.default.createElement('i', { className: 'fa fa-certificate' })
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              {
                header: _react2.default.createElement(
                  'span',
                  null,
                  'Carousel'
                ),
                bsStyle: 'warning',
                className: 'text-carousel bg-primary'
              },
              _react2.default.createElement(
                _Carousel2.default,
                { controls: false },
                _react2.default.createElement(
                  _Carousel.Item,
                  null,
                  'Success is not final, failure is not fatal: it is the courage to continue that counts.'
                ),
                _react2.default.createElement(
                  _Carousel.Item,
                  null,
                  'To succeed in life, you need two things: ignorance and confidence.'
                ),
                _react2.default.createElement(
                  _Carousel.Item,
                  null,
                  'Success is how high you bounce when you hit bottom.'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              {
                header: _react2.default.createElement(
                  'span',
                  null,
                  'Carousel Image Silder'
                ),
                bsStyle: 'info'
              },
              _react2.default.createElement(
                _Carousel2.default,
                null,
                _react2.default.createElement(
                  _Carousel.Item,
                  null,
                  _react2.default.createElement('img', { width: '100%', height: 200, alt: 'proPic1', src: _img2.default })
                ),
                _react2.default.createElement(
                  _Carousel.Item,
                  null,
                  _react2.default.createElement('img', { width: '100%', height: 200, alt: 'proIma2', src: _img4.default })
                ),
                _react2.default.createElement(
                  _Carousel.Item,
                  null,
                  _react2.default.createElement('img', { width: '100%', height: 200, alt: 'proIma3', src: _img6.default })
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              {
                header: _react2.default.createElement(
                  'span',
                  null,
                  'Tooltip & Popover'
                ),
                bsStyle: 'info'
              },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _reactBootstrap.ButtonToolbar,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.OverlayTrigger,
                    {
                      placement: 'left', overlay: _react2.default.createElement(
                        _reactBootstrap.Tooltip,
                        { id: 'tooltip-1' },
                        ' On the Left! '
                      )
                    },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      null,
                      ' Left Tooltip '
                    )
                  ),
                  '\xA0',
                  _react2.default.createElement(
                    _reactBootstrap.OverlayTrigger,
                    {
                      placement: 'top', overlay: _react2.default.createElement(
                        _reactBootstrap.Tooltip,
                        { id: 'tooltip-2' },
                        ' On the Top! '
                      )
                    },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      null,
                      ' Top Tooltip '
                    )
                  ),
                  '\xA0',
                  _react2.default.createElement(
                    _reactBootstrap.OverlayTrigger,
                    {
                      placement: 'bottom', overlay: _react2.default.createElement(
                        _reactBootstrap.Tooltip,
                        { id: 'tooltip-3' },
                        ' On the Bottom! '
                      )
                    },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      null,
                      ' Bottom Tooltip '
                    )
                  ),
                  '\xA0',
                  _react2.default.createElement(
                    _reactBootstrap.OverlayTrigger,
                    {
                      placement: 'right', overlay: _react2.default.createElement(
                        _reactBootstrap.Tooltip,
                        { id: 'tooltip-4' },
                        ' On the Right! '
                      )
                    },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      null,
                      ' Right Tooltip '
                    )
                  ),
                  '\xA0'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.ButtonToolbar,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.OverlayTrigger,
                      {
                        trigger: 'click',
                        placement: 'left',
                        overlay: _react2.default.createElement(
                          _reactBootstrap.Popover,
                          { id: 'popover-1' },
                          _react2.default.createElement(
                            'strong',
                            null,
                            'On the Left!'
                          )
                        )
                      },
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        null,
                        'Left Popover'
                      )
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.OverlayTrigger,
                      {
                        trigger: 'click',
                        placement: 'top',
                        overlay: _react2.default.createElement(
                          _reactBootstrap.Popover,
                          { id: 'popover-2' },
                          _react2.default.createElement(
                            'strong',
                            null,
                            'On the Top!'
                          )
                        )
                      },
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        null,
                        'Top Popover'
                      )
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.OverlayTrigger,
                      {
                        trigger: 'click',
                        placement: 'bottom',
                        overlay: _react2.default.createElement(
                          _reactBootstrap.Popover,
                          { id: 'popover-3' },
                          _react2.default.createElement(
                            'strong',
                            null,
                            'On the Bottom!'
                          )
                        )
                      },
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        null,
                        'Bottom Popover'
                      )
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.OverlayTrigger,
                      {
                        trigger: 'click',
                        placement: 'right',
                        overlay: _react2.default.createElement(
                          _reactBootstrap.Popover,
                          { id: 'popover-4' },
                          _react2.default.createElement(
                            'strong',
                            null,
                            'On the Right!'
                          )
                        )
                      },
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        null,
                        'Right Popover'
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
    return OtherElements;
  }(_react.Component);
  
  OtherElements.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = OtherElements;

/***/ },

/***/ 247:
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Carousel");

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "common/images/img1.jpg?77e52a3f59a4cb39efd723be9e08e1c6";

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "common/images/img2.jpg?547016c67a541e4cecdaabdf312702d9";

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "common/images/img3.jpg?8f6ab704784fa5a90085b0652c5c63b7";

/***/ }

};;
//# sourceMappingURL=server.otherElements.js.map