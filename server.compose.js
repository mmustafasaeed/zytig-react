require("source-map-support").install();
exports.ids = [20];
exports.modules = {

/***/ 264:
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
  
  var _Compose = __webpack_require__(265);
  
  var _Compose2 = _interopRequireDefault(_Compose);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import { PageHeader } from 'react-bootstrap';
  var title = 'Compose Message';
  // import Link from '../../../../components/Link';
  
  var Compose = function (_Component) {
    (0, _inherits3.default)(Compose, _Component);
  
    function Compose() {
      (0, _classCallCheck3.default)(this, Compose);
      return (0, _possibleConstructorReturn3.default)(this, (Compose.__proto__ || (0, _getPrototypeOf2.default)(Compose)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Compose, [{
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
            { className: 'inbox-container-wrap ' + _Compose2.default.inboxContainerWrap },
            _react2.default.createElement(
              'div',
              { className: 'inbox-container ' + _Compose2.default.inboxContainer },
              _react2.default.createElement(
                'div',
                { className: 'col email-options ps-container ' + _Compose2.default.emailOptions },
                _react2.default.createElement(
                  'div',
                  { className: 'padding-15' },
                  _react2.default.createElement(
                    'div',
                    { className: 'butt-container ' + _Compose2.default.buttContainer },
                    _react2.default.createElement(
                      'a',
                      {
                        className: 'btn btn-primary btn-block btn-rounded ' + _Compose2.default.btnBlock + ' ' + _Compose2.default.btnStyle
                      },
                      'Compose'
                    )
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'main-options ' + _Compose2.default.mainOptions },
                    _react2.default.createElement(
                      'li',
                      { className: 'activeli ' + _Compose2.default.activeLi },
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
                    _react2.default.createElement('hr', { className: 'poor ' + _Compose2.default.poor }),
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
                            className: 'fa fa-stop pull-right faorange ' + _Compose2.default.faStop + ' ' + _Compose2.default.faOrange
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
                            className: 'fa fa-stop pull-right fayellow ' + _Compose2.default.faStop + ' ' + _Compose2.default.faYellow
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
                            className: 'fa fa-stop pull-right facyan ' + _Compose2.default.faStop + ' ' + _Compose2.default.faCyan
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
                            className: 'fa fa-stop pull-right fapurple ' + _Compose2.default.faStop + ' ' + _Compose2.default.faPurple
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
              { className: 'compose-container ' + _Compose2.default.composeContainer },
              _react2.default.createElement(
                'div',
                { className: 'wrap-compose ' + _Compose2.default.wrapCompose },
                _react2.default.createElement(
                  'div',
                  { className: 'mail-header ' + _Compose2.default.mailHeader },
                  _react2.default.createElement(
                    'h4',
                    null,
                    'New Email'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'receipient ' + _Compose2.default.receipient },
                  _react2.default.createElement(
                    'strong',
                    { className: _Compose2.default.to },
                    'TO '
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'label label-primary ' + _Compose2.default.labelPrimary },
                    'john@doe.com'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'subject ' + _Compose2.default.subject },
                  _react2.default.createElement(
                    'strong',
                    { className: 'strong-header ' + _Compose2.default.strongHeader },
                    'SUBJECT'
                  ),
                  _react2.default.createElement(
                    'strong',
                    { className: 'subject ' + _Compose2.default.subject },
                    '[LOGO] Envelope'
                  )
                ),
                _react2.default.createElement('text-angular', { 'ng-model': 'htmlVariable' }),
                _react2.default.createElement('textarea', { rows: '19', className: 'form-control' }),
                _react2.default.createElement(
                  'div',
                  { className: 'send-footer ' + _Compose2.default.sendFooter },
                  _react2.default.createElement(
                    'button',
                    { type: 'button', className: 'btn btn-primary btn-rounded' },
                    'Send'
                  ),
                  '\xA0\xA0\xA0',
                  _react2.default.createElement(
                    'a',
                    { href: '' },
                    _react2.default.createElement('i', { className: 'fa fa-paperclip' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '' },
                    _react2.default.createElement('i', { className: 'fa fa-trash-o pull-right' })
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Compose;
  }(_react.Component);
  
  Compose.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(_Compose2.default)(Compose);

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(266);
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
        module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../../node_modules/postcss-loader/index.js?pack=default!./Compose.css", function() {
          content = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../../node_modules/postcss-loader/index.js?pack=default!./Compose.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, ".Compose_inboxContainerWrap_1FW {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 5px\n}\n\n.Compose_inboxContainerWrap_1FW .Compose_inboxContainer_2hO, .Compose_inboxContainerWrap_1FW .Compose_messageListWrapper_2eD, .Compose_inboxContainerWrap_1FW .Compose_textWrapper_1Zn, .Compose_inboxContainerWrap_1FW .Compose_composerContainer_dQv {\n  display: table-cell;\n  vertical-align: top\n}\n\n.Compose_inboxContainerWrap_1FW .Compose_inboxContainer_2hO {\n  width: 15%\n}\n\n.Compose_emailOptions_1qR {\n}\n\n.Compose_emailOptions_1qR .Compose_emailOptionsTitle_1gK {\n  opacity: 0.92\n}\n\n.Compose_emailOptions_1qR .Compose_mainOptions_LeA {\n  padding-left: 0;\n  list-style-type: none\n}\n\n.Compose_emailOptions_1qR .Compose_mainOptions_LeA li {\n  font-size: 15px;\n  line-height: 40px;\n  padding-top: 3px\n}\n\n.Compose_emailOptions_1qR .Compose_mainOptions_LeA a {\n  color: #424242;\n  opacity: 0.9;\n  .transition: all .2s linear\n}\n\n.Compose_emailOptions_1qR .Compose_mainOptions_LeA a:hover, .Compose_emailOptions_1qR .Compose_mainOptions_LeA a:active, .Compose_emailOptions_1qR .Compose_mainOptions_LeA a:focus {\n  color: #FFFFFF;\n  text-decoration: none\n}\n\n.Compose_emailOptions_1qR .Compose_mainOptions_LeA .badge {\n  margin-top: 9px\n}\n\n.Compose_wrapList_1yA {\n  list-style-type: none;\n  position: relative\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec {\n  max-height: 400px;\n  overflow: auto\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_messageItem_Dyk:hover {\n  opacity: 0.9\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_messagesItem_12M {\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_messagesItem_12M .fa {\n  color: #ccc;\n  font-size: 11px\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_messagesItem_12M .Compose_faStarred_1x- {\n  color: #3ca2e0;\n  font-size: 11px\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_messagesItem_12M .Compose_dateClass_F-Q {\n  font-size: 11px;\n  margin-top: 3px\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_messagesItem_12M p {\n  font-size: 11.5px;\n  line-height: 14px\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_messagesItem_12M a:hover {\n  text-decoration: none\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_name_1hJ {\n  font-size: 18px;\n  opacity: 0.7\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_text_Mv8 {\n  float: right;\n  font-size: 12px;\n  margin-top: -40px;\n  opacity: 0.7\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_messagesItemSubject_1Id {\n  font-size: 13px;\n  font-weight: 600;\n  color: #555\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_messagesItemContent_2Ci {\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_messagesItemContent_2Ci p {\n  width: 240px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 0;\n  line-height: 18px\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_fa_v0U:hover {\n  color: red\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_leftist_GTa {\n  width: 8px;\n  float: left;\n  margin-left: -17px;\n  margin-top: -2px\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_leftist_GTa .Compose_checkbox1_26p {\n  margin-left: -2px\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_leftist_GTa .Compose_checkbox1_26p span {\n  height: 12px;\n  width: 12px\n}\n\n.Compose_wrapList_1yA .Compose_messagesList_2ec .Compose_leftist_GTa .Compose_checkbox1_26p span::before {\n  font-size: 14px;\n  line-height: 11px;\n  border: solid 1px #ddd\n}\n\n.Compose_wrapList_1yA ul {\n  padding-left: 0px\n}\n\n.Compose_wrapList_1yA a {\n  color: #424242\n}\n\n.Compose_wrapList_1yA li.Compose_activeMessage_3HB {\n  background: #3ca2e0;\n  color: #F3F3F3 !important;\n  /* ****(*&(*&*(&*(&(*&(*&*(&*(&*(&(*&*(&*&^*^*& please check css))))))))))) ********/\n\n  .Compose_leftist_GTa .Compose_fa_v0U {\n    color: #fff\n  }\n}\n\n.Compose_wrapList_1yA li.Compose_activeMessage_3HB .Compose_messagesItemSubject_1Id, .Compose_wrapList_1yA li.Compose_activeMessage_3HB .Compose_dateClass_F-Q, .Compose_wrapList_1yA li.Compose_activeMessage_3HB .Compose_fa_v0U {\n  color: #fff\n}\n\n.Compose_wrapList_1yA .Compose_messagesSearch_1Ea {\n  margin-bottom: 20px\n}\n\n.Compose_wrapList_1yA .Compose_messagesItem_12M {\n  padding-top: 10px;\n  border-bottom: 1px solid #C6C6C6;\n  padding-left: 30px;\n  padding-right: 10px;\n  height: 60px\n}\n\n.Compose_wrapList_1yA .Compose_wrapOptions_1qF {\n  position: absolute;\n  left: 16px;\n  right: 30px;\n  height: 50px;\n  background-color: #fff;\n  z-index: 1;\n  top: 0\n}\n\n.Compose_wrapList_1yA .Compose_wrapOptions_1qF input.Compose_formControl_1ME {\n  padding-left: 10px\n}\n\n.Compose_messageListWrapper_2eD {\n  width: 300px;\n  background: #E9E9E9;\n  overflow: hidden;\n  position: relative;\n  padding-top: 107px;\n  border-right: solid 1px #ddd\n}\n\n.Compose_messageListWrapper_2eD .Compose_searchBox_2Vw {\n  height: 107px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 15px;\n  text-align: center;\n  font-size: 15px;\n  opacity: 0.8\n}\n\n.Compose_messageListWrapper_2eD .Compose_searchBox_2Vw :gloabl(.fa) {\n  font-size: 13px;\n  opacity: 0.7\n}\n\n.Compose_messageListWrapper_2eD .Compose_searchBox_2Vw .form-control {\n  margin-top: 6px\n}\n\n.Compose_messageListWrapper_2eD .Compose_searchBox_2Vw .Compose_seBox_3n- {\n  font-size: 26px\n}\n\n.Compose_messageListWrapper_2eD .Compose_wrapList_1yA {\n  background: #F5F5F5\n}\n\n.Compose_textWrapper_1Zn {\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js {\n  overflow: hidden\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js .Compose_messageTopic_2NJ {\n  padding: 15px;\n  border-bottom: 1px solid #DEDEDE;\n  font-size: 18px;\n  line-height: 20px;\n  color: #565656\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js .Compose_messageTopic_2NJ .Compose_pullRight_3vc {\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js .Compose_messageTopic_2NJ .Compose_pullRight_3vc .fa {\n  font-size: 14px;\n  padding-left: 16px;\n  color: #B9B9B9\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js .Compose_messageTopic_2NJ .Compose_pullRight_3vc a {\n  color: inherit\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js .Compose_messageTopic_2NJ .Compose_pullRight_3vc a:hover {\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js .Compose_messageTopic_2NJ .Compose_pullRight_3vc a:hover :gloabl(.fa-trash-o) {\n  color: #de6764\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js .Compose_messageTopic_2NJ .Compose_pullRight_3vc a:hover .fa-reply {\n  color: #5cb85c\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js .Compose_messageSender_1qd {\n  padding: 5px 15px;\n  border-bottom: 1px solid #DEDEDE;\n  color: #B5B5B5\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js .Compose_messageSender_1qd .fa-caret-o-down {\n  font-size: 13px\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js .Compose_messageSender_1qd a {\n  font-size: 14px\n}\n\n.Compose_textWrapper_1Zn .Compose_wrapMessage_1Js .Compose_messageSender_1qd .Compose_senderImg_3by {\n  width: 40px;\n  border: 1px solid #ddd\n}\n\n.Compose_textWrapper_1Zn .Compose_messageContent_1r5 {\n  padding: 15px;\n  overflow: auto\n}\n\n.Compose_textWrapper_1Zn .Compose_messageFooter_Hol {\n  height: 70px;\n  padding-top: 10px;\n  padding-right: 15px\n}\n\n.Compose_textWrapper_1Zn .Compose_messageFooter_Hol .Compose_btnStyle_1nR {\n  font-size: 13px;\n  height: 30px;\n  width: 100px\n}\n\n.Compose_inboxContainer_2hO {\n  border-radius: 5px 0 0 5px;\n  min-width: 170px;\n  background: #4C4C4C;\n  color: #E7E7E7\n}\n\n.Compose_inboxContainer_2hO .Compose_buttContainer_2J_ {\n  padding: 16px\n}\n\n.Compose_inboxContainer_2hO .Compose_buttContainer_2J_ .Compose_btnBlock_2kl {\n  height: 30px;\n  font-size: 13px\n}\n\n.Compose_inboxContainer_2hO .Compose_buttContainer_2J_ .Compose_btnStyle_1nR {\n  border-radius: 50px;\n  border-color: #3ca2e0;\n  background-color: #3ca2e0\n}\n\n.Compose_inboxContainer_2hO .Compose_buttContainer_2J_ .Compose_btnStyle_1nR:hover {\n  border-color: #2089c9;\n  background-color: #2089c9\n}\n\n.Compose_inboxContainer_2hO .Compose_poor_3DW {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  opacity: 0.7;\n  border-top: 1px solid #848484\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA {\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA h5 {\n  margin-top: 15px;\n  margin-bottom: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  padding-left: 13px;\n  opacity: 0.5\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA li.Compose_activeLi_1y6 {\n  background-color: #3f3f3f\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA li.Compose_activeLi_1y6 .badge {\n  background: #5cb85c\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA li {\n  padding-left: 5px;\n  padding-right: 10px\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA li .Compose_faStop_2Jh {\n  margin-top: 10px\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA li .Compose_faOrange_36g {\n  color: #FFB457\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA li .Compose_faYellow_2oR {\n  color: #FFFA9B\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA li .Compose_faCyan_3GN {\n  color: #8AEFE6\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA li .Compose_faPurple_3W2 {\n  color: #DD8BFF\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA li .badge {\n  background: #de6764\n}\n\n.Compose_inboxContainer_2hO ul.Compose_mainOptions_LeA li a {\n  color: #E7E7E7;\n  font-size: 13px\n}\n\n.Compose_composeContainer_2u5 {\n}\n\n.Compose_composeContainer_2u5 .Compose_wrapCompose_tHX {\n  overflow: hidden;\n  border: solid 1px #ddd;\n  border-radius: 0 5px 5px 0\n}\n\n.Compose_composeContainer_2u5 .Compose_mailHeader_2-S {\n  height: 50px;\n  border-bottom: 1px solid #D8D8D8;\n  padding: 15px;\n  background: #EFEFEF\n}\n\n.Compose_composeContainer_2u5 .Compose_mailHeader_2-S h4 {\n  margin-top: 3px;\n  font-size: 16px;\n  color: #616161\n}\n\n.Compose_composeContainer_2u5 .Compose_receipient_1Zs {\n  height: 45px;\n  padding: 11px 15px;\n  border-bottom: 1px solid #D8D8D8\n}\n\n.Compose_composeContainer_2u5 .Compose_receipient_1Zs .Compose_to_yiz {\n  opacity: 0.7;\n  font-size: 11.5px\n}\n\n.Compose_composeContainer_2u5 .Compose_receipient_1Zs .Compose_labelPrimary_3uA {\n  padding-top: 5px;\n  padding-left: 12px;\n  padding-bottom: 5px;\n  padding-right: 12px;\n  margin-left: 50px;\n  border-radius: 20px;\n  background-color: #3ca2e0\n}\n\n.Compose_composeContainer_2u5 .Compose_subject_3lI {\n  height: 37px;\n  padding: 8px 15px\n}\n\n.Compose_composeContainer_2u5 .Compose_subject_3lI strong.Compose_subject_3lI {\n  margin-left: 15px;\n  font-size: 12px\n}\n\n.Compose_composeContainer_2u5 .Compose_subject_3lI strong.Compose_strongHeader_1v7 {\n  opacity: 0.7;\n  font-size: 11.5px\n}\n\n.Compose_composeContainer_2u5 .Compose_sendFooter_1LN {\n  border-top: 1px solid #D8D8D8;\n  padding: 15px\n}\n\n.Compose_composeContainer_2u5 .Compose_sendFooter_1LN .btn {\n  width: 75px;\n  border-color: #3ca2e0;\n  border-radius: 50px;\n  color: #fff;\n  background-color: #3ca2e0\n}\n\n.Compose_composeContainer_2u5 .Compose_sendFooter_1LN .fa {\n  font-size: 19px\n}\n\n.Compose_composeContainer_2u5 .Compose_sendFooter_1LN .fa-trash-o {\n  color: red;\n  margin-top: 7px;\n  margin-right: 10px\n}\n\n.Compose_cke_1_3uH {\n  border-radius: 0 !important;\n}\n", "", {"version":3,"sources":["/./routes/dashboard/Mail/Compose/Compose.css"],"names":[],"mappings":"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","file":"Compose.css","sourcesContent":[".inboxContainerWrap {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 5px;\n  & .inboxContainer, & .messageListWrapper, & .textWrapper, & .composerContainer {\n    display: table-cell;\n    vertical-align: top;\n  }\n  & .inboxContainer {\n    width: 15%;\n  }\n}\n\n.emailOptions {\n  & .emailOptionsTitle {\n    opacity: 0.92;\n  }\n  & .mainOptions {\n    padding-left: 0;\n    list-style-type: none;\n    & li {\n      font-size: 15px;\n      line-height: 40px;\n      padding-top: 3px;\n    }\n\n    & a {\n      color : #424242;\n      opacity: 0.9;\n      .transition: all .2s linear;\n      &:hover, &:active, &:focus {\n        color: #FFFFFF;\n        text-decoration: none;\n      }\n    }\n\n    & :global(.badge) {\n      margin-top: 9px;\n    }\n  }\n}\n\n.wrapList {\n  list-style-type: none;\n  position: relative;\n  & .messagesList {\n    max-height: 400px;\n    overflow: auto;\n    & .messageItem:hover {\n      opacity: 0.9;\n    }\n    & .messagesItem {\n      & :global(.fa) {\n        color: #ccc;\n        font-size: 11px;\n      }\n      & .faStarred {\n        color: #3ca2e0;\n        font-size: 11px;\n      }\n      & .dateClass {\n        font-size: 11px;\n        margin-top: 3px;\n      }\n      & p {\n        font-size: 11.5px;\n        line-height: 14px;\n      }\n      & a:hover {\n        text-decoration: none;\n      }\n    }\n    & .name {\n      font-size: 18px;\n      opacity: 0.7;\n    }\n    & .text {\n      float: right;\n      font-size: 12px;\n      margin-top: -40px;\n      opacity: 0.7;\n    }\n    & .messagesItemSubject {\n      font-size: 13px;\n      font-weight: 600;\n      color: #555;\n    }\n    & .messagesItemContent {\n      & p {\n        width: 240px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-bottom: 0;\n        line-height: 18px;\n      }\n    }\n    & .fa:hover {\n      color: red;\n    }\n    & .leftist {\n      width: 8px;\n      float: left;\n      margin-left: -17px;\n      margin-top: -2px;\n      & .checkbox1 {\n        margin-left: -2px;\n        & span {\n          height: 12px;\n          width: 12px;\n          &::before {\n            font-size: 14px;\n            line-height: 11px;\n            border: solid 1px #ddd;\n          }\n        }\n      }\n    }\n  }\n  & ul {\n    padding-left: 0px;\n  }\n  & a {\n    color: #424242;\n  }\n  & li.activeMessage {\n    & .messagesItemSubject, & .dateClass, & .fa {\n      color: #fff;\n    }\n    background: #3ca2e0;\n    color: #F3F3F3 !important;\n/* ****(*&(*&*(&*(&(*&(*&*(&*(&*(&(*&*(&*&^*^*& please check css))))))))))) ********/\n    .leftist .fa {\n      color: #fff;\n    }\n  }\n  & .messagesSearch {\n    margin-bottom: 20px;\n  }\n  & .messagesItem {\n    padding-top: 10px;\n    border-bottom: 1px solid #C6C6C6;\n    padding-left: 30px;\n    padding-right: 10px;\n    height: 60px;\n  }\n  & .wrapOptions {\n    position: absolute;\n    left: 16px;\n    right: 30px;\n    height: 50px;\n    background-color: #fff;\n    z-index: 1;\n    top:0;\n    & input.formControl {\n      padding-left: 10px;\n    }\n  }\n}\n\n\n.messageListWrapper {\n  width: 300px;\n  background: #E9E9E9;\n  overflow: hidden;\n  position: relative;\n  padding-top: 107px;\n  border-right: solid 1px #ddd;\n  & .searchBox {\n    height: 107px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    & :gloabl(.fa) {\n      font-size: 13px;\n      opacity: 0.7;\n    }\n    & :global(.form-control) {\n      margin-top: 6px;\n    }\n    padding: 15px;\n    text-align: center;\n    font-size: 15px;\n    opacity: 0.8;\n    & .seBox {\n      font-size: 26px;\n    }\n  }\n  & .wrapList {\n    background: #F5F5F5;\n  }\n}\n\n.textWrapper {\n  & .wrapMessage {\n    overflow: hidden;\n    & .messageTopic {\n    padding: 15px;\n    border-bottom: 1px solid #DEDEDE;\n    font-size: 18px;\n    line-height: 20px;\n    color: #565656;\n    & .pullRight {\n      & :global(.fa) {\n        font-size: 14px;\n        padding-left: 16px;\n        color: #B9B9B9;\n      }\n      & a {\n        color: inherit;\n        &:hover {\n          & :gloabl(.fa-trash-o) {\n            color: #de6764;\n          }\n          & :global(.fa-reply) {\n            color: #5cb85c;\n          }\n        }\n      }\n    }\n  }\n  & .messageSender {\n      padding: 5px 15px;\n      border-bottom: 1px solid #DEDEDE;\n      color: #B5B5B5;\n      & :global(.fa-caret-o-down) {\n        font-size: 13px;\n      }\n      & a {\n        font-size: 14px;\n      }\n      & .senderImg {\n          width: 40px;\n          border: 1px solid #ddd;\n      }\n\n    }\n  }\n  & .messageContent {\n    padding: 15px;\n    overflow: auto;\n  }\n  & .messageFooter {\n      height: 70px;\n    padding-top: 10px;\n    padding-right: 15px;\n    & .btnStyle {\n      font-size: 13px;\n      height: 30px;\n      width: 100px;\n    }\n  }\n}\n\n\n.inboxContainer {\n  border-radius: 5px 0 0 5px;\n  min-width: 170px;\n  background: #4C4C4C;\n  color: #E7E7E7;\n  & .buttContainer {\n    padding: 16px;\n    & .btnBlock {\n      height: 30px;\n      font-size: 13px;\n    }\n    & .btnStyle {\n      border-radius: 50px;\n      border-color: #3ca2e0;\n      background-color: #3ca2e0;\n      &:hover {\n        border-color: #2089c9;\n        background-color: #2089c9;\n      }\n    }\n  }\n\n  & .poor {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    opacity: 0.7;\n    border-top: 1px solid #848484;\n  }\n\n  & ul.mainOptions {\n    & h5 {\n      margin-top: 15px;\n      margin-bottom: 5px;\n      font-size: 13px;\n      font-weight: 600;\n      padding-left: 13px;\n      opacity: 0.5;\n    }\n    & li.activeLi {\n      background-color: #3f3f3f;\n      & :global(.badge) {\n        background: #5cb85c;\n      }\n    }\n    & li {\n      padding-left: 5px;\n      padding-right: 10px;\n      & .faStop {\n        margin-top: 10px;\n      }\n      & .faOrange {\n        color: #FFB457;\n      }\n      & .faYellow {\n        color: #FFFA9B;\n      }\n      & .faCyan {\n        color: #8AEFE6;\n      }\n      & .faPurple {\n        color: #DD8BFF;\n      }\n      & :global(.badge) {\n        background: #de6764;\n      }\n      & a {\n        color: #E7E7E7;\n        font-size: 13px;\n      }\n    }\n  }\n}\n\n.composeContainer {\n  & .wrapCompose {\n    overflow: hidden;\n    border: solid 1px #ddd;\n    border-radius: 0 5px 5px 0;\n  }\n  & .mailHeader {\n    height: 50px;\n    border-bottom: 1px solid #D8D8D8;\n    padding: 15px;\n     background: #EFEFEF;\n    & h4 {\n        margin-top: 3px;\n        font-size: 16px;\n        color: #616161;\n     }\n  }\n  & .receipient {\n    height: 45px;\n    padding: 11px 15px;\n    border-bottom: 1px solid #D8D8D8;\n    & .to {\n      opacity: 0.7;\n      font-size: 11.5px;\n    }\n\n    & .labelPrimary {\n      padding-top: 5px;\n      padding-left: 12px;\n      padding-bottom: 5px;\n      padding-right: 12px;\n      margin-left: 50px;\n      border-radius: 20px;\n      background-color: #3ca2e0;\n    }\n  }\n  & .subject {\n    height: 37px;\n    padding: 8px 15px;\n    & strong.subject {\n      margin-left: 15px;\n      font-size: 12px;\n    }\n    & strong.strongHeader {\n      opacity: 0.7;\n      font-size: 11.5px;\n    }\n  }\n  & .sendFooter {\n    border-top: 1px solid #D8D8D8;\n    padding: 15px;\n    & :global(.btn) {\n      width: 75px;\n      border-color: #3ca2e0;\n      border-radius: 50px;\n      color: #fff;\n      background-color: #3ca2e0;\n    }\n    & :global(.fa) {\n      font-size: 19px;\n    }\n    & :global(.fa-trash-o) {\n      color: red;\n      margin-top: 7px;\n      margin-right: 10px;\n    }\n  }\n}\n\n.cke_1 {\n  border-radius: 0 !important;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"inboxContainerWrap": "Compose_inboxContainerWrap_1FW",
  	"inboxContainer": "Compose_inboxContainer_2hO",
  	"messageListWrapper": "Compose_messageListWrapper_2eD",
  	"textWrapper": "Compose_textWrapper_1Zn",
  	"composerContainer": "Compose_composerContainer_dQv",
  	"emailOptions": "Compose_emailOptions_1qR",
  	"emailOptionsTitle": "Compose_emailOptionsTitle_1gK",
  	"mainOptions": "Compose_mainOptions_LeA",
  	"wrapList": "Compose_wrapList_1yA",
  	"messagesList": "Compose_messagesList_2ec",
  	"messageItem": "Compose_messageItem_Dyk",
  	"messagesItem": "Compose_messagesItem_12M",
  	"faStarred": "Compose_faStarred_1x-",
  	"dateClass": "Compose_dateClass_F-Q",
  	"name": "Compose_name_1hJ",
  	"text": "Compose_text_Mv8",
  	"messagesItemSubject": "Compose_messagesItemSubject_1Id",
  	"messagesItemContent": "Compose_messagesItemContent_2Ci",
  	"fa": "Compose_fa_v0U",
  	"leftist": "Compose_leftist_GTa",
  	"checkbox1": "Compose_checkbox1_26p",
  	"activeMessage": "Compose_activeMessage_3HB",
  	"messagesSearch": "Compose_messagesSearch_1Ea",
  	"wrapOptions": "Compose_wrapOptions_1qF",
  	"formControl": "Compose_formControl_1ME",
  	"searchBox": "Compose_searchBox_2Vw",
  	"seBox": "Compose_seBox_3n-",
  	"wrapMessage": "Compose_wrapMessage_1Js",
  	"messageTopic": "Compose_messageTopic_2NJ",
  	"pullRight": "Compose_pullRight_3vc",
  	"messageSender": "Compose_messageSender_1qd",
  	"senderImg": "Compose_senderImg_3by",
  	"messageContent": "Compose_messageContent_1r5",
  	"messageFooter": "Compose_messageFooter_Hol",
  	"btnStyle": "Compose_btnStyle_1nR",
  	"buttContainer": "Compose_buttContainer_2J_",
  	"btnBlock": "Compose_btnBlock_2kl",
  	"poor": "Compose_poor_3DW",
  	"activeLi": "Compose_activeLi_1y6",
  	"faStop": "Compose_faStop_2Jh",
  	"faOrange": "Compose_faOrange_36g",
  	"faYellow": "Compose_faYellow_2oR",
  	"faCyan": "Compose_faCyan_3GN",
  	"faPurple": "Compose_faPurple_3W2",
  	"composeContainer": "Compose_composeContainer_2u5",
  	"wrapCompose": "Compose_wrapCompose_tHX",
  	"mailHeader": "Compose_mailHeader_2-S",
  	"receipient": "Compose_receipient_1Zs",
  	"to": "Compose_to_yiz",
  	"labelPrimary": "Compose_labelPrimary_3uA",
  	"subject": "Compose_subject_3lI",
  	"strongHeader": "Compose_strongHeader_1v7",
  	"sendFooter": "Compose_sendFooter_1LN",
  	"cke_1": "Compose_cke_1_3uH"
  };

/***/ }

};;
//# sourceMappingURL=server.compose.js.map