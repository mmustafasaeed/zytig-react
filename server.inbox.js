require("source-map-support").install();
exports.ids = [19];
exports.modules = {

/***/ 260:
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
  
  var _Inbox = __webpack_require__(261);
  
  var _Inbox2 = _interopRequireDefault(_Inbox);
  
  var _flatAvatar = __webpack_require__(39);
  
  var _flatAvatar2 = _interopRequireDefault(_flatAvatar);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Inbox';
  
  var Inbox = function (_Component) {
    (0, _inherits3.default)(Inbox, _Component);
  
    function Inbox() {
      (0, _classCallCheck3.default)(this, Inbox);
      return (0, _possibleConstructorReturn3.default)(this, (Inbox.__proto__ || (0, _getPrototypeOf2.default)(Inbox)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Inbox, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'conter-wrapper animate' },
          _react2.default.createElement(
            'div',
            { className: 'inbox-container-wrap ' + _Inbox2.default.inboxContainerWrap },
            _react2.default.createElement(
              'div',
              { className: 'inbox-container ' + _Inbox2.default.inboxContainer },
              _react2.default.createElement(
                'div',
                { className: 'col email-options ps-container ' + _Inbox2.default.emailOptions },
                _react2.default.createElement(
                  'div',
                  { className: 'padding-15' },
                  _react2.default.createElement(
                    'div',
                    { className: 'butt-container ' + _Inbox2.default.buttContainer },
                    _react2.default.createElement(
                      'a',
                      {
                        className: 'btn btn-primary btn-block btn-rounded ' + _Inbox2.default.btnBlock + ' ' + _Inbox2.default.btnStyle
                      },
                      'Compose'
                    )
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'main-options ' + _Inbox2.default.mainOptions },
                    _react2.default.createElement(
                      'li',
                      { className: 'activeli ' + _Inbox2.default.activeLi },
                      _react2.default.createElement(
                        'a',
                        null,
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          ' \xA0 Inbox'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'badge pull-right' },
                          '10'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        null,
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          ' \xA0 Junk Mail'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        null,
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          ' \xA0 Drafts'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'badge pull-right' },
                          '16'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        null,
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          ' \xA0 Sent'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        null,
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          ' \xA0 Trash'
                        )
                      )
                    ),
                    _react2.default.createElement('hr', { className: 'poor ' + _Inbox2.default.poor }),
                    _react2.default.createElement(
                      'h5',
                      null,
                      'LABELS'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        null,
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          ' \xA0 Clients',
                          _react2.default.createElement('i', {
                            className: 'fa fa-stop pull-right faorange ' + _Inbox2.default.faStop + ' ' + _Inbox2.default.faOrange
                          })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        null,
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          ' \xA0 Social',
                          _react2.default.createElement('i', {
                            className: 'fa fa-stop pull-right fayellow ' + _Inbox2.default.faStop + ' ' + _Inbox2.default.faYellow
                          })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        null,
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          ' \xA0 Family',
                          _react2.default.createElement('i', {
                            className: 'fa fa-stop pull-right facyan ' + _Inbox2.default.faStop + ' ' + _Inbox2.default.faCyan
                          })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        null,
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          ' \xA0 Friends',
                          _react2.default.createElement('i', {
                            className: 'fa fa-stop pull-right fapurple ' + _Inbox2.default.faStop + ' ' + _Inbox2.default.faPurple
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'message-list-wrapper ' + _Inbox2.default.messageListWrapper },
              _react2.default.createElement(
                'div',
                { className: 'searchbox ' + _Inbox2.default.searchBox },
                _react2.default.createElement(
                  'span',
                  { className: 'sebox ' + _Inbox2.default.seBox },
                  'Inbox'
                ),
                ' (14 unread)',
                _react2.default.createElement('i', { className: 'fa fa-envelope-o' }),
                _react2.default.createElement('input', {
                  type: 'text',
                  className: 'form-control',
                  id: 'exampleInputEmail1',
                  placeholder: 'Search Inbox...'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'wrap-list ' + _Inbox2.default.wrapList },
                _react2.default.createElement(
                  'div',
                  { className: 'messages-list ' + _Inbox2.default.messagesList },
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      { className: 'messages-item ' + _Inbox2.default.messagesItem },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement(
                          'div',
                          { className: 'leftist ' + _Inbox2.default.leftist },
                          _react2.default.createElement('i', { className: 'fa fa-star' }),
                          _react2.default.createElement(
                            'label',
                            { className: 'checkbox1 ' + _Inbox2.default.checkbox1, htmlFor: 'Option45' },
                            _react2.default.createElement('input', { id: 'Option45', type: 'checkbox', className: '' }),
                            _react2.default.createElement('span', null)
                          )
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-subject ' + _Inbox2.default.messagesItemSubject },
                          'Nicole Bell'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'date-class text-muted pull-right ' + _Inbox2.default.dateClass },
                          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                          '\xA07th Jan'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-content ' + _Inbox2.default.messagesItemContent },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'messages-item ' + _Inbox2.default.messagesItem },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement(
                          'div',
                          { className: 'leftist ' + _Inbox2.default.leftist },
                          _react2.default.createElement('i', { className: 'fa fa-star' }),
                          _react2.default.createElement(
                            'label',
                            { className: 'checkbox1 ' + _Inbox2.default.checkbox1, htmlFor: 'Option45' },
                            _react2.default.createElement('input', { id: 'Option45', type: 'checkbox', className: '' }),
                            _react2.default.createElement('span', null)
                          )
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-subject ' + _Inbox2.default.messagesItemSubject },
                          'Nicole Bell'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'date-class text-muted pull-right ' + _Inbox2.default.dateClass },
                          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                          '\xA07th Jan'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-content ' + _Inbox2.default.messagesItemContent },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'messages-item ' + _Inbox2.default.messagesItem },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement(
                          'div',
                          { className: 'leftist ' + _Inbox2.default.leftist },
                          _react2.default.createElement('i', { className: 'fa fa-star' }),
                          _react2.default.createElement(
                            'label',
                            { className: 'checkbox1 ' + _Inbox2.default.checkbox1, htmlFor: 'Option45' },
                            _react2.default.createElement('input', { id: 'Option45', type: 'checkbox', className: '' }),
                            _react2.default.createElement('span', null)
                          )
                        ),
                        _react2.default.createElement(
                          'span',
                          {
                            className: 'messages-item-subject ' + _Inbox2.default.messagesItemSubject
                          },
                          'Nicole Bell'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'date-class text-muted pull-right ' + _Inbox2.default.dateClass },
                          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                          '\xA07th Jan'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-content ' + _Inbox2.default.messagesItemContent },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'messages-item ' + _Inbox2.default.messagesItem + ' ' + _Inbox2.default.activeMessage },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement(
                          'div',
                          { className: 'leftist ' + _Inbox2.default.leftist },
                          _react2.default.createElement('i', { className: 'fa fa-star' }),
                          _react2.default.createElement(
                            'label',
                            { className: 'checkbox1 ' + _Inbox2.default.checkbox1, htmlFor: 'Option45' },
                            _react2.default.createElement('input', { id: 'Option45', type: 'checkbox', className: '' }),
                            _react2.default.createElement('span', null)
                          )
                        ),
                        _react2.default.createElement(
                          'span',
                          {
                            className: 'messages-item-subject ' + _Inbox2.default.messagesItemSubject
                          },
                          'Nicole Bell'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'date-class text-muted pull-right ' + _Inbox2.default.dateClass },
                          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                          '\xA07th Jan'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-content ' + _Inbox2.default.messagesItemContent },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'messages-item ' + _Inbox2.default.messagesItem },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement(
                          'div',
                          { className: 'leftist ' + _Inbox2.default.leftist },
                          _react2.default.createElement('i', { className: 'fa fa-star ' + _Inbox2.default.faStarred }),
                          _react2.default.createElement(
                            'label',
                            { className: 'checkbox1 ' + _Inbox2.default.checkbox1, htmlFor: 'Option45' },
                            _react2.default.createElement('input', { id: 'Option45', type: 'checkbox', className: '' }),
                            _react2.default.createElement('span', null)
                          )
                        ),
                        _react2.default.createElement(
                          'span',
                          {
                            className: 'messages-item-subject ' + _Inbox2.default.messagesItemSubject
                          },
                          'Nicole Bell'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'date-class text-muted pull-right ' + _Inbox2.default.dateClass },
                          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                          '\xA07th Jan'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-content ' + _Inbox2.default.messagesItemContent },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'messages-item ' + _Inbox2.default.messagesItem },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement(
                          'div',
                          { className: 'leftist ' + _Inbox2.default.leftist },
                          _react2.default.createElement('i', { className: 'fa fa-star' }),
                          _react2.default.createElement(
                            'label',
                            { className: 'checkbox1 ' + _Inbox2.default.checkbox1, htmlFor: 'Option45' },
                            _react2.default.createElement('input', { id: 'Option45', type: 'checkbox', className: '' }),
                            _react2.default.createElement('span', null)
                          )
                        ),
                        _react2.default.createElement(
                          'span',
                          {
                            className: 'messages-item-subject ' + _Inbox2.default.messagesItemSubject
                          },
                          'Nicole Bell'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'date-class text-muted pull-right ' + _Inbox2.default.dateClass },
                          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                          '\xA07th Jan'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-content ' + _Inbox2.default.messagesItemContent },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'messages-item ' + _Inbox2.default.messagesItem },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement(
                          'div',
                          { className: 'leftist ' + _Inbox2.default.leftist },
                          _react2.default.createElement('i', { className: 'fa fa-star' }),
                          _react2.default.createElement(
                            'label',
                            { className: 'checkbox1 ' + _Inbox2.default.checkbox1, htmlFor: 'Option45' },
                            _react2.default.createElement('input', { id: 'Option45', type: 'checkbox', className: '' }),
                            _react2.default.createElement('span', null)
                          )
                        ),
                        _react2.default.createElement(
                          'span',
                          {
                            className: 'messages-item-subject ' + _Inbox2.default.messagesItemSubject
                          },
                          'Nicole Bell'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'date-class text-muted pull-right ' + _Inbox2.default.dateClass },
                          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                          '\xA07th Jan'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-content ' + _Inbox2.default.messagesItemContent },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'messages-item ' + _Inbox2.default.messagesItem },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement(
                          'div',
                          { className: 'leftist ' + _Inbox2.default.leftist },
                          _react2.default.createElement('i', { className: 'fa fa-star' }),
                          _react2.default.createElement(
                            'label',
                            { className: 'checkbox1 ' + _Inbox2.default.checkbox1, htmlFor: 'Option45' },
                            _react2.default.createElement('input', { id: 'Option45', type: 'checkbox', className: '' }),
                            _react2.default.createElement('span', null)
                          )
                        ),
                        _react2.default.createElement(
                          'span',
                          {
                            className: 'messages-item-subject ' + _Inbox2.default.messagesItemSubject
                          },
                          'Nicole Bell'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'date-class text-muted pull-right ' + _Inbox2.default.dateClass },
                          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                          '\xA07th Jan'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-content ' + _Inbox2.default.messagesItemContent },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'messages-item ' + _Inbox2.default.messagesItem },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement(
                          'div',
                          { className: 'leftist ' + _Inbox2.default.leftist },
                          _react2.default.createElement('i', { className: 'fa fa-star' }),
                          _react2.default.createElement(
                            'label',
                            { className: 'checkbox1 ' + _Inbox2.default.checkbox1, htmlFor: 'Option45' },
                            _react2.default.createElement('input', { id: 'Option45', type: 'checkbox', className: '' }),
                            _react2.default.createElement('span', null)
                          )
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-subject ' + _Inbox2.default.messagesItemSubject },
                          'Nicole Bell'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'date-class text-muted pull-right ' + _Inbox2.default.dateClass },
                          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                          '\xA07th Jan'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-content ' + _Inbox2.default.messagesItemContent },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'messages-item ' + _Inbox2.default.messagesItem },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement(
                          'div',
                          { className: 'leftist ' + _Inbox2.default.leftist },
                          _react2.default.createElement('i', { className: 'fa fa-star' }),
                          _react2.default.createElement(
                            'label',
                            { className: 'checkbox1 ' + _Inbox2.default.checkbox1, htmlFor: 'Option45' },
                            _react2.default.createElement('input', { id: 'Option45', type: 'checkbox', className: '' }),
                            _react2.default.createElement('span', null)
                          )
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-subject ' + _Inbox2.default.messagesItemSubject },
                          'Nicole Bell'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'date-class text-muted pull-right ' + _Inbox2.default.dateClass },
                          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                          '\xA07th Jan'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-content ' + _Inbox2.default.messagesItemContent },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'messages-item ' + _Inbox2.default.messagesItem },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement(
                          'div',
                          { className: 'leftist ' + _Inbox2.default.leftist },
                          _react2.default.createElement('i', { className: 'fa fa-star' }),
                          _react2.default.createElement(
                            'label',
                            { className: 'checkbox1 ' + _Inbox2.default.checkbox1, htmlFor: 'Option45' },
                            _react2.default.createElement('input', { id: 'Option45', type: 'checkbox', className: '' }),
                            _react2.default.createElement('span', null)
                          )
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-subject ' + _Inbox2.default.messagesItemSubject },
                          'Nicole Bell'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'date-class text-muted pull-right ' + _Inbox2.default.dateClass },
                          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                          '\xA07th Jan'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'messages-item-content ' + _Inbox2.default.messagesItemContent },
                          _react2.default.createElement(
                            'p',
                            null,
                            'Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,'
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'text-wrapper bg-white ' + _Inbox2.default.textWrapper },
              _react2.default.createElement(
                'div',
                { className: 'wrap-message ' + _Inbox2.default.wrapMessage },
                _react2.default.createElement(
                  'div',
                  { className: 'n0-scroll' },
                  _react2.default.createElement(
                    'div',
                    { className: 'message-topic ' + _Inbox2.default.messageTopic },
                    _react2.default.createElement('i', { className: 'fa fa-star m-r-xs text-primary' }),
                    ' Development Files',
                    _react2.default.createElement(
                      'span',
                      { className: 'pull-right text-muted ' + _Inbox2.default.pullRight },
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement('i', { className: 'fa fa-reply' })
                      ),
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement('i', { className: 'fa fa-trash-o' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'message-sender ' + _Inbox2.default.messageSender },
                    _react2.default.createElement('img', {
                      className: 'img-circle sender-img m-r-xs ' + _Inbox2.default.senderImg,
                      src: _flatAvatar2.default,
                      alt: ''
                    }),
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefaut();
                        } },
                      'Kumar Sanket'
                    ),
                    ' to',
                    _react2.default.createElement(
                      'a',
                      { href: '', onClick: function onClick(e) {
                          e.preventDefaut();
                        } },
                      'me'
                    ),
                    ' \xA0',
                    _react2.default.createElement('i', { className: 'fa fa-caret-square-o-down' }),
                    _react2.default.createElement(
                      'small',
                      { className: 'pull-right m-t-sm' },
                      _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
                      ' \xA0',
                      _react2.default.createElement(
                        'a',
                        { href: '', onClick: function onClick(e) {
                            e.preventDefaut();
                          } },
                        '(2)'
                      ),
                      '\xA0\xA0 Today 7:30 AM'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'message-content ' + _Inbox2.default.messageContent },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Hi Peter,'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Thanks for the e-mail. It is always nice to hear from people, especially from you, Scott.'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'I have not got any reply, a positive or negative one, from Seibido yet.',
                    _react2.default.createElement('br', null),
                    'Let\'s wait and hope that it will make a BOOK.'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Have you finished your paperwork for Kaken and writing academic articles?',
                    _react2.default.createElement('br', null),
                    'If you have some free time in the near future, I want to meet you and explain to you our next project.'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Why not drink out in Hiroshima if we are accepted?',
                    _react2.default.createElement('br', null),
                    'We need to celebrate ourselves, don\'t we?',
                    _react2.default.createElement('br', null),
                    'Let\'s have a small end-of-the-year party!'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Sincerely, K. Nakagawa'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'messagefooter ' + _Inbox2.default.messageFooter },
                  _react2.default.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'btn btn-primary btn-rounded pull-right ' + _Inbox2.default.pullRight + ' ' + _Inbox2.default.btnStyle
                    },
                    _react2.default.createElement('i', { className: 'fa fa-reply' }),
                    ' Reply'
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Inbox;
  }(_react.Component);
  
  Inbox.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(_Inbox2.default)(Inbox);

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(262);
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
        module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../../node_modules/postcss-loader/index.js?pack=default!./Inbox.css", function() {
          content = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../../node_modules/postcss-loader/index.js?pack=default!./Inbox.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, ".Inbox_inboxContainerWrap_22m {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 5px\n}\n\n.Inbox_inboxContainerWrap_22m .Inbox_inboxContainer_3es, .Inbox_inboxContainerWrap_22m .Inbox_messageListWrapper_1H0, .Inbox_inboxContainerWrap_22m .Inbox_textWrapper_AHz, .Inbox_inboxContainerWrap_22m .Inbox_composerContainer_2BI {\n  display: table-cell;\n  vertical-align: top\n}\n\n.Inbox_inboxContainerWrap_22m .Inbox_inboxContainer_3es {\n  width: 15%\n}\n\n.Inbox_emailOptions_3gu {\n}\n\n.Inbox_emailOptions_3gu .Inbox_emailOptionsTitle_irN {\n  opacity: 0.92\n}\n\n.Inbox_emailOptions_3gu .Inbox_mainOptions_L84 {\n  padding-left: 0;\n  list-style-type: none\n}\n\n.Inbox_emailOptions_3gu .Inbox_mainOptions_L84 li {\n  font-size: 15px;\n  line-height: 40px;\n  padding-top: 3px\n}\n\n.Inbox_emailOptions_3gu .Inbox_mainOptions_L84 a {\n  color: #424242;\n  opacity: 0.9;\n  .transition: all .2s linear\n}\n\n.Inbox_emailOptions_3gu .Inbox_mainOptions_L84 a:hover, .Inbox_emailOptions_3gu .Inbox_mainOptions_L84 a:active, .Inbox_emailOptions_3gu .Inbox_mainOptions_L84 a:focus {\n  color: #FFFFFF;\n  text-decoration: none\n}\n\n.Inbox_emailOptions_3gu .Inbox_mainOptions_L84 .badge {\n  margin-top: 9px\n}\n\n.Inbox_wrapList_3l2 {\n  list-style-type: none;\n  position: relative\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev {\n  max-height: 400px;\n  overflow: auto\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_messageItem_QtL:hover {\n  opacity: 0.9\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_messagesItem_9OF {\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_messagesItem_9OF .fa {\n  color: #ccc;\n  font-size: 11px\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_messagesItem_9OF .Inbox_faStarred_1o7 {\n  color: #3ca2e0;\n  font-size: 11px\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_messagesItem_9OF .Inbox_dateClass_1Qk {\n  font-size: 11px;\n  margin-top: 3px\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_messagesItem_9OF p {\n  font-size: 11.5px;\n  line-height: 14px\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_messagesItem_9OF a:hover {\n  text-decoration: none\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_name_2po {\n  font-size: 18px;\n  opacity: 0.7\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_text_lqZ {\n  float: right;\n  font-size: 12px;\n  margin-top: -40px;\n  opacity: 0.7\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_messagesItemSubject_3WS {\n  font-size: 13px;\n  font-weight: 600;\n  color: #555\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_messagesItemContent_2q0 {\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_messagesItemContent_2q0 p {\n  width: 240px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 0;\n  line-height: 18px\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_fa_19j:hover {\n  color: red\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_leftist_1Ik {\n  width: 8px;\n  float: left;\n  margin-left: -17px;\n  margin-top: -2px\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_leftist_1Ik .Inbox_checkbox1_30u {\n  margin-left: -2px\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_leftist_1Ik .Inbox_checkbox1_30u span {\n  height: 12px;\n  width: 12px\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesList_3Ev .Inbox_leftist_1Ik .Inbox_checkbox1_30u span::before {\n  font-size: 14px;\n  line-height: 11px;\n  border: solid 1px #ddd\n}\n\n.Inbox_wrapList_3l2 ul {\n  padding-left: 0px\n}\n\n.Inbox_wrapList_3l2 a {\n  color: #424242\n}\n\n.Inbox_wrapList_3l2 li.Inbox_activeMessage_ioV {\n  background: #3ca2e0;\n  color: #F3F3F3 !important;\n  /* ****(*&(*&*(&*(&(*&(*&*(&*(&*(&(*&*(&*&^*^*& please check css))))))))))) ********/\n\n  .Inbox_leftist_1Ik .Inbox_fa_19j {\n    color: #fff\n  }\n}\n\n.Inbox_wrapList_3l2 li.Inbox_activeMessage_ioV .Inbox_messagesItemSubject_3WS, .Inbox_wrapList_3l2 li.Inbox_activeMessage_ioV .Inbox_dateClass_1Qk, .Inbox_wrapList_3l2 li.Inbox_activeMessage_ioV .Inbox_fa_19j {\n  color: #fff\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesSearch_2Od {\n  margin-bottom: 20px\n}\n\n.Inbox_wrapList_3l2 .Inbox_messagesItem_9OF {\n  padding-top: 10px;\n  border-bottom: 1px solid #C6C6C6;\n  padding-left: 30px;\n  padding-right: 10px;\n  height: 60px\n}\n\n.Inbox_wrapList_3l2 .Inbox_wrapOptions_2UL {\n  position: absolute;\n  left: 16px;\n  right: 30px;\n  height: 50px;\n  background-color: #fff;\n  z-index: 1;\n  top: 0\n}\n\n.Inbox_wrapList_3l2 .Inbox_wrapOptions_2UL input.Inbox_formControl_1pF {\n  padding-left: 10px\n}\n\n.Inbox_inboxContainer_3es {\n  border-radius: 5px 0 0 5px;\n  min-width: 170px;\n  background: #4C4C4C;\n  color: #E7E7E7\n}\n\n.Inbox_inboxContainer_3es .Inbox_buttContainer_1RU {\n  padding: 16px\n}\n\n.Inbox_inboxContainer_3es .Inbox_buttContainer_1RU .Inbox_btnBlock__zb {\n  height: 30px;\n  font-size: 13px\n}\n\n.Inbox_inboxContainer_3es .Inbox_buttContainer_1RU .Inbox_btnStyle_3GZ {\n  border-radius: 50px;\n  border-color: #3ca2e0;\n  background-color: #3ca2e0\n}\n\n.Inbox_inboxContainer_3es .Inbox_buttContainer_1RU .Inbox_btnStyle_3GZ:hover {\n  border-color: #2089c9;\n  background-color: #2089c9\n}\n\n.Inbox_inboxContainer_3es .Inbox_poor_1r0 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  opacity: 0.7;\n  border-top: 1px solid #848484\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 {\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 h5 {\n  margin-top: 15px;\n  margin-bottom: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  padding-left: 13px;\n  opacity: 0.5\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 li.Inbox_activeLi_3md {\n  background-color: #3f3f3f\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 li.Inbox_activeLi_3md .badge {\n  background: #5cb85c\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 li {\n  padding-left: 5px;\n  padding-right: 10px\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 li .Inbox_faStop_32m {\n  margin-top: 10px\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 li .Inbox_faOrange_3R0 {\n  color: #FFB457\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 li .Inbox_faYellow_3P8 {\n  color: #FFFA9B\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 li .Inbox_faCyan_2vK {\n  color: #8AEFE6\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 li .Inbox_faPurple_1ed {\n  color: #DD8BFF\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 li .badge {\n  background: #de6764\n}\n\n.Inbox_inboxContainer_3es ul.Inbox_mainOptions_L84 li a {\n  color: #E7E7E7;\n  font-size: 13px\n}\n\n.Inbox_messageListWrapper_1H0 {\n  width: 300px;\n  background: #E9E9E9;\n  overflow: hidden;\n  position: relative;\n  padding-top: 107px;\n  border-right: solid 1px #ddd\n}\n\n.Inbox_messageListWrapper_1H0 .Inbox_searchBox_3Fw {\n  height: 107px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 15px;\n  text-align: center;\n  font-size: 15px;\n  opacity: 0.8\n}\n\n.Inbox_messageListWrapper_1H0 .Inbox_searchBox_3Fw :gloabl(.fa) {\n  font-size: 13px;\n  opacity: 0.7\n}\n\n.Inbox_messageListWrapper_1H0 .Inbox_searchBox_3Fw .form-control {\n  margin-top: 6px\n}\n\n.Inbox_messageListWrapper_1H0 .Inbox_searchBox_3Fw .Inbox_seBox_huf {\n  font-size: 26px\n}\n\n.Inbox_messageListWrapper_1H0 .Inbox_wrapList_3l2 {\n  background: #F5F5F5\n}\n\n.Inbox_textWrapper_AHz {\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm {\n  overflow: hidden\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm .Inbox_messageTopic_PTh {\n  padding: 15px;\n  border-bottom: 1px solid #DEDEDE;\n  font-size: 18px;\n  line-height: 20px;\n  color: #565656\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm .Inbox_messageTopic_PTh .Inbox_pullRight_3qe {\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm .Inbox_messageTopic_PTh .Inbox_pullRight_3qe .fa {\n  font-size: 14px;\n  padding-left: 16px;\n  color: #B9B9B9\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm .Inbox_messageTopic_PTh .Inbox_pullRight_3qe a {\n  color: inherit\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm .Inbox_messageTopic_PTh .Inbox_pullRight_3qe a:hover {\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm .Inbox_messageTopic_PTh .Inbox_pullRight_3qe a:hover :gloabl(.fa-trash-o) {\n  color: #de6764\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm .Inbox_messageTopic_PTh .Inbox_pullRight_3qe a:hover .fa-reply {\n  color: #5cb85c\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm .Inbox_messageSender_26b {\n  padding: 5px 15px;\n  border-bottom: 1px solid #DEDEDE;\n  color: #B5B5B5\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm .Inbox_messageSender_26b .fa-caret-o-down {\n  font-size: 13px\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm .Inbox_messageSender_26b a {\n  font-size: 14px\n}\n\n.Inbox_textWrapper_AHz .Inbox_wrapMessage_1vm .Inbox_messageSender_26b .Inbox_senderImg_5dn {\n  width: 40px;\n  border: 1px solid #ddd\n}\n\n.Inbox_textWrapper_AHz .Inbox_messageContent_31t {\n  padding: 15px;\n  overflow: auto\n}\n\n.Inbox_textWrapper_AHz .Inbox_messageFooter_3PC {\n  height: 70px;\n  padding-top: 10px;\n  padding-right: 15px\n}\n\n.Inbox_textWrapper_AHz .Inbox_messageFooter_3PC .Inbox_btnStyle_3GZ {\n  font-size: 13px;\n  height: 30px;\n  width: 100px\n}\n\n@media (max-width: 1120px) {\n  .Inbox_textWrapper_AHz {\n    display: none !important;\n  }\n  .Inbox_inboxContainer_3es {\n    width: 30%;\n  }\n  .Inbox_messageListWrapper_1H0 {\n    width: 70%;\n  }\n}\n\n@media (max-width: 550px) {\n  .Inbox_messageListWrapper_1H0 {\n    display: none;\n  }\n  .Inbox_inboxContainer_3es {\n    width: 100%;\n  }\n}\n", "", {"version":3,"sources":["/./routes/dashboard/Mail/Inbox/Inbox.css"],"names":[],"mappings":"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","file":"Inbox.css","sourcesContent":[".inboxContainerWrap {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 5px;\n  & .inboxContainer, & .messageListWrapper, & .textWrapper, & .composerContainer {\n    display: table-cell;\n    vertical-align: top;\n  }\n  & .inboxContainer {\n    width: 15%;\n  }\n}\n\n.emailOptions {\n  & .emailOptionsTitle {\n    opacity: 0.92;\n  }\n  & .mainOptions {\n    padding-left: 0;\n    list-style-type: none;\n    & li {\n      font-size: 15px;\n      line-height: 40px;\n      padding-top: 3px;\n    }\n\n    & a {\n      color : #424242;\n      opacity: 0.9;\n      .transition: all .2s linear;\n      &:hover, &:active, &:focus {\n        color: #FFFFFF;\n        text-decoration: none;\n      }\n    }\n\n    & :global(.badge) {\n      margin-top: 9px;\n    }\n  }\n}\n\n.wrapList {\n  list-style-type: none;\n  position: relative;\n  & .messagesList {\n    max-height: 400px;\n    overflow: auto;\n    & .messageItem:hover {\n      opacity: 0.9;\n    }\n    & .messagesItem {\n      & :global(.fa) {\n        color: #ccc;\n        font-size: 11px;\n      }\n      & .faStarred {\n        color: #3ca2e0;\n        font-size: 11px;\n      }\n      & .dateClass {\n        font-size: 11px;\n        margin-top: 3px;\n      }\n      & p {\n        font-size: 11.5px;\n        line-height: 14px;\n      }\n      & a:hover {\n        text-decoration: none;\n      }\n    }\n    & .name {\n      font-size: 18px;\n      opacity: 0.7;\n    }\n    & .text {\n      float: right;\n      font-size: 12px;\n      margin-top: -40px;\n      opacity: 0.7;\n    }\n    & .messagesItemSubject {\n      font-size: 13px;\n      font-weight: 600;\n      color: #555;\n    }\n    & .messagesItemContent {\n      & p {\n        width: 240px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-bottom: 0;\n        line-height: 18px;\n      }\n    }\n    & .fa:hover {\n      color: red;\n    }\n    & .leftist {\n      width: 8px;\n      float: left;\n      margin-left: -17px;\n      margin-top: -2px;\n      & .checkbox1 {\n        margin-left: -2px;\n        & span {\n          height: 12px;\n          width: 12px;\n          &::before {\n            font-size: 14px;\n            line-height: 11px;\n            border: solid 1px #ddd;\n          }\n        }\n      }\n    }\n  }\n  & ul {\n    padding-left: 0px;\n  }\n  & a {\n    color: #424242;\n  }\n  & li.activeMessage {\n    & .messagesItemSubject, & .dateClass, & .fa {\n      color: #fff;\n    }\n    background: #3ca2e0;\n    color: #F3F3F3 !important;\n/* ****(*&(*&*(&*(&(*&(*&*(&*(&*(&(*&*(&*&^*^*& please check css))))))))))) ********/\n    .leftist .fa {\n      color: #fff;\n    }\n  }\n  & .messagesSearch {\n    margin-bottom: 20px;\n  }\n  & .messagesItem {\n    padding-top: 10px;\n    border-bottom: 1px solid #C6C6C6;\n    padding-left: 30px;\n    padding-right: 10px;\n    height: 60px;\n  }\n  & .wrapOptions {\n    position: absolute;\n    left: 16px;\n    right: 30px;\n    height: 50px;\n    background-color: #fff;\n    z-index: 1;\n    top:0;\n    & input.formControl {\n      padding-left: 10px;\n    }\n  }\n}\n\n.inboxContainer {\n  border-radius: 5px 0 0 5px;\n  min-width: 170px;\n  background: #4C4C4C;\n  color: #E7E7E7;\n  & .buttContainer {\n    padding: 16px;\n    & .btnBlock {\n      height: 30px;\n      font-size: 13px;\n    }\n    & .btnStyle {\n      border-radius: 50px;\n      border-color: #3ca2e0;\n      background-color: #3ca2e0;\n      &:hover {\n        border-color: #2089c9;\n        background-color: #2089c9;\n      }\n    }\n  }\n\n  & .poor {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    opacity: 0.7;\n    border-top: 1px solid #848484;\n  }\n\n  & ul.mainOptions {\n    & h5 {\n      margin-top: 15px;\n      margin-bottom: 5px;\n      font-size: 13px;\n      font-weight: 600;\n      padding-left: 13px;\n      opacity: 0.5;\n    }\n    & li.activeLi {\n      background-color: #3f3f3f;\n      & :global(.badge) {\n        background: #5cb85c;\n      }\n    }\n    & li {\n      padding-left: 5px;\n      padding-right: 10px;\n      & .faStop {\n        margin-top: 10px;\n      }\n      & .faOrange {\n        color: #FFB457;\n      }\n      & .faYellow {\n        color: #FFFA9B;\n      }\n      & .faCyan {\n        color: #8AEFE6;\n      }\n      & .faPurple {\n        color: #DD8BFF;\n      }\n      & :global(.badge) {\n        background: #de6764;\n      }\n      & a {\n        color: #E7E7E7;\n        font-size: 13px;\n       }\n    }\n  }\n}\n\n.messageListWrapper {\n  width: 300px;\n  background: #E9E9E9;\n  overflow: hidden;\n  position: relative;\n  padding-top: 107px;\n  border-right: solid 1px #ddd;\n  & .searchBox {\n    height: 107px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    & :gloabl(.fa) {\n      font-size: 13px;\n      opacity: 0.7;\n    }\n    & :global(.form-control) {\n      margin-top: 6px;\n    }\n    padding: 15px;\n    text-align: center;\n    font-size: 15px;\n    opacity: 0.8;\n    & .seBox {\n      font-size: 26px;\n    }\n  }\n  & .wrapList {\n    background: #F5F5F5;\n  }\n}\n\n.textWrapper {\n  & .wrapMessage {\n    overflow: hidden;\n    & .messageTopic {\n    padding: 15px;\n    border-bottom: 1px solid #DEDEDE;\n    font-size: 18px;\n    line-height: 20px;\n    color: #565656;\n    & .pullRight {\n      & :global(.fa) {\n        font-size: 14px;\n        padding-left: 16px;\n        color: #B9B9B9;\n      }\n      & a {\n        color: inherit;\n        &:hover {\n          & :gloabl(.fa-trash-o) {\n            color: #de6764;\n          }\n          & :global(.fa-reply) {\n            color: #5cb85c;\n          }\n        }\n      }\n    }\n  }\n  & .messageSender {\n      padding: 5px 15px;\n      border-bottom: 1px solid #DEDEDE;\n      color: #B5B5B5;\n      & :global(.fa-caret-o-down) {\n        font-size: 13px;\n      }\n      & a {\n        font-size: 14px;\n      }\n      & .senderImg {\n          width: 40px;\n          border: 1px solid #ddd;\n      }\n\n    }\n  }\n  & .messageContent {\n    padding: 15px;\n    overflow: auto;\n  }\n  & .messageFooter {\n      height: 70px;\n    padding-top: 10px;\n    padding-right: 15px;\n    & .btnStyle {\n      font-size: 13px;\n      height: 30px;\n      width: 100px;\n    }\n  }\n}\n\n@media (max-width: 1120px) {\n  .textWrapper {\n    display: none !important;\n  }\n  .inboxContainer {\n    width: 30%;\n  }\n  .messageListWrapper {\n    width: 70%;\n  }\n}\n@media (max-width: 550px) {\n  .messageListWrapper {\n    display: none;\n  }\n  .inboxContainer {\n    width: 100%;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"inboxContainerWrap": "Inbox_inboxContainerWrap_22m",
  	"inboxContainer": "Inbox_inboxContainer_3es",
  	"messageListWrapper": "Inbox_messageListWrapper_1H0",
  	"textWrapper": "Inbox_textWrapper_AHz",
  	"composerContainer": "Inbox_composerContainer_2BI",
  	"emailOptions": "Inbox_emailOptions_3gu",
  	"emailOptionsTitle": "Inbox_emailOptionsTitle_irN",
  	"mainOptions": "Inbox_mainOptions_L84",
  	"wrapList": "Inbox_wrapList_3l2",
  	"messagesList": "Inbox_messagesList_3Ev",
  	"messageItem": "Inbox_messageItem_QtL",
  	"messagesItem": "Inbox_messagesItem_9OF",
  	"faStarred": "Inbox_faStarred_1o7",
  	"dateClass": "Inbox_dateClass_1Qk",
  	"name": "Inbox_name_2po",
  	"text": "Inbox_text_lqZ",
  	"messagesItemSubject": "Inbox_messagesItemSubject_3WS",
  	"messagesItemContent": "Inbox_messagesItemContent_2q0",
  	"fa": "Inbox_fa_19j",
  	"leftist": "Inbox_leftist_1Ik",
  	"checkbox1": "Inbox_checkbox1_30u",
  	"activeMessage": "Inbox_activeMessage_ioV",
  	"messagesSearch": "Inbox_messagesSearch_2Od",
  	"wrapOptions": "Inbox_wrapOptions_2UL",
  	"formControl": "Inbox_formControl_1pF",
  	"buttContainer": "Inbox_buttContainer_1RU",
  	"btnBlock": "Inbox_btnBlock__zb",
  	"btnStyle": "Inbox_btnStyle_3GZ",
  	"poor": "Inbox_poor_1r0",
  	"activeLi": "Inbox_activeLi_3md",
  	"faStop": "Inbox_faStop_32m",
  	"faOrange": "Inbox_faOrange_3R0",
  	"faYellow": "Inbox_faYellow_3P8",
  	"faCyan": "Inbox_faCyan_2vK",
  	"faPurple": "Inbox_faPurple_1ed",
  	"searchBox": "Inbox_searchBox_3Fw",
  	"seBox": "Inbox_seBox_huf",
  	"wrapMessage": "Inbox_wrapMessage_1vm",
  	"messageTopic": "Inbox_messageTopic_PTh",
  	"pullRight": "Inbox_pullRight_3qe",
  	"messageSender": "Inbox_messageSender_26b",
  	"senderImg": "Inbox_senderImg_5dn",
  	"messageContent": "Inbox_messageContent_31t",
  	"messageFooter": "Inbox_messageFooter_3PC"
  };

/***/ }

};;
//# sourceMappingURL=server.inbox.js.map