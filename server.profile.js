require("source-map-support").install();
exports.ids = [22];
exports.modules = {

/***/ 270:
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
  
  var _reactBootstrap = __webpack_require__(60);
  
  var _Profile = __webpack_require__(271);
  
  var _Profile2 = _interopRequireDefault(_Profile);
  
  var _profileCover = __webpack_require__(273);
  
  var _profileCover2 = _interopRequireDefault(_profileCover);
  
  var _flat = __webpack_require__(274);
  
  var _flat2 = _interopRequireDefault(_flat);
  
  var _flatAvatar = __webpack_require__(39);
  
  var _flatAvatar2 = _interopRequireDefault(_flatAvatar);
  
  var _colorful = __webpack_require__(275);
  
  var _colorful2 = _interopRequireDefault(_colorful);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import Link from '../../../components/Link';
  
  var title = 'Profile';
  
  var Profile = function (_Component) {
    (0, _inherits3.default)(Profile, _Component);
  
    function Profile() {
      (0, _classCallCheck3.default)(this, Profile);
      return (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || (0, _getPrototypeOf2.default)(Profile)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Profile, [{
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
            null,
            _react2.default.createElement(
              'div',
              { className: 'cover-wrapper ' + _Profile2.default.coverWrapper },
              _react2.default.createElement(
                'div',
                {
                  className: 'cover-photo ' + _Profile2.default.coverPhoto,
                  style: { backgroundImage: 'url(' + _profileCover2.default + ')' }
                },
                _react2.default.createElement(
                  'div',
                  { className: 'name-desg ' + _Profile2.default.nameDesg },
                  _react2.default.createElement(
                    'h3',
                    null,
                    'Kumar Sanket',
                    _react2.default.createElement(
                      'small',
                      null,
                      'CEO and Founder @Sahusoft'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'profile-photo-warp ' + _Profile2.default.profilePhotoWrapper },
                _react2.default.createElement('img', {
                  className: 'profile-photo img-responsive img-circle ' + _Profile2.default.profilePhoto,
                  src: _flat2.default, alt: ''
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'foobar ' + _Profile2.default.foobar },
                _react2.default.createElement(
                  'a',
                  { href: '' },
                  _react2.default.createElement('i', { className: 'fa fa-heart text-danger ' + _Profile2.default.faFooBar }),
                  ' 443'
                ),
                '\xA0\xA0\xA0',
                _react2.default.createElement(
                  'a',
                  { href: '' },
                  _react2.default.createElement('i', { className: 'fa fa-users ' + _Profile2.default.faFooBar }),
                  ' 443'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'probutton ' + _Profile2.default.probutton },
                  _react2.default.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'btn ' + _Profile2.default.btnProButton + ' ' + _Profile2.default.btnBordered + ' ' + _Profile2.default.btnPrimary
                    },
                    'Follow'
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'links pull-right ' + _Profile2.default.links },
                  _react2.default.createElement(
                    'a',
                    { href: '' },
                    _react2.default.createElement('i', { className: 'fa fa-twitter ' + _Profile2.default.faFooBar + ' ' + _Profile2.default.twitter })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '' },
                    _react2.default.createElement('i', { className: 'fa fa-facebook ' + _Profile2.default.faFooBar + ' ' + _Profile2.default.facebook })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '' },
                    _react2.default.createElement('i', { className: 'fa fa-google-plus ' + _Profile2.default.faFooBar + ' ' + _Profile2.default.googlePlus })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '' },
                    _react2.default.createElement('i', { className: 'fa fa-github ' + _Profile2.default.faFooBar + ' ' + _Profile2.default.github })
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _Profile2.default.contentWrapper },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'profile-body row ' + _Profile2.default.profileBody, id: 'profile-items' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-6' },
                    _react2.default.createElement(
                      'div',
                      { className: 'profile-comment prophoto ' + _Profile2.default.profileComment + ' ' + _Profile2.default.proPhoto },
                      _react2.default.createElement(
                        _reactBootstrap.Panel,
                        {
                          bsStyle: 'default',
                          footer: _react2.default.createElement(
                            'div',
                            { className: 'clearfix ' + _Profile2.default.panelFooter },
                            _react2.default.createElement(
                              'a',
                              { href: '' },
                              _react2.default.createElement('i', { className: 'fa fa-picture-o ' + _Profile2.default.fa })
                            ),
                            _react2.default.createElement(
                              'a',
                              { href: '' },
                              _react2.default.createElement('i', { className: 'fa fa-calendar ' + _Profile2.default.fa })
                            ),
                            _react2.default.createElement(
                              'a',
                              { href: '' },
                              _react2.default.createElement('i', { className: 'fa fa-video-camera ' + _Profile2.default.fa })
                            ),
                            _react2.default.createElement(
                              'button',
                              {
                                type: 'button',
                                className: 'btn btn-primary pull-right ' + _Profile2.default.btnPanel
                              },
                              'Send Message'
                            )
                          )
                        },
                        _react2.default.createElement('textarea', { name: '', id: '', cols: '54', rows: '4' })
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'prophoto ' + _Profile2.default.proPhoto },
                      _react2.default.createElement(
                        _reactBootstrap.Panel,
                        {
                          bsStyle: 'default',
                          className: _Profile2.default.panelWrapper,
                          header: _react2.default.createElement(
                            'h3',
                            { className: 'panel-title ' + _Profile2.default.panelTitile },
                            _react2.default.createElement('img', {
                              className: 'panel-photo img-responsive img-circle ' + _Profile2.default.panelPhoto,
                              src: _flatAvatar2.default, alt: ''
                            }),
                            'Kumar',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                              'span',
                              { className: 'text-muted ' + _Profile2.default.textMuted },
                              'Posted on 3rd March 2014'
                            )
                          )
                        },
                        _react2.default.createElement('img', { className: 'img-responsive', src: _colorful2.default, alt: '', height: '200' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'comment-links clearfix ' + _Profile2.default.commentLinks },
                          _react2.default.createElement(
                            'a',
                            { href: '' },
                            _react2.default.createElement('i', { className: 'fa fa-share-alt' }),
                            '22'
                          ),
                          _react2.default.createElement(
                            'a',
                            { href: '' },
                            _react2.default.createElement('i', { className: 'fa fa-comments-o' }),
                            '106'
                          ),
                          _react2.default.createElement(
                            'a',
                            { href: '' },
                            _react2.default.createElement('i', { className: 'fa fa-heart text-danger' }),
                            '862'
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-6' },
                    _react2.default.createElement(
                      'div',
                      { className: 'prophoto ' + _Profile2.default.proPhoto },
                      _react2.default.createElement(
                        _reactBootstrap.Panel,
                        {
                          bsStyle: 'default',
                          className: _Profile2.default.panelWrapper,
                          header: _react2.default.createElement(
                            'h3',
                            { className: 'panel-title ' + _Profile2.default.panelTitile },
                            _react2.default.createElement('img', {
                              className: 'panel-photo img-responsive img-circle ' + _Profile2.default.panelPhoto,
                              src: _flatAvatar2.default, alt: ''
                            }),
                            'Kumar',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                              'span',
                              { className: 'text-muted ' + _Profile2.default.textMuted },
                              'Posted on 3rd March 2014'
                            )
                          )
                        },
                        _react2.default.createElement(
                          'div',
                          { className: 'lorem ' + _Profile2.default.lorem },
                          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur harum aliquid tempore molestias nemo modi quas repellat. Accusantium praesentium, cupiditate tempore culpa voluptate laboriosam itaque error iste accusamus reprehenderit illum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est saepe voluptas, eligendi necessitatibus adipisci soluta, amet magnam, rerum, iure minima fuga praesentium nobis veniam quisquam illum repellat beatae. Consectetur, asperiores.'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'comment-links clearfix ' + _Profile2.default.commentLinks },
                          _react2.default.createElement(
                            'a',
                            { href: '' },
                            _react2.default.createElement('i', { className: 'fa fa-share-alt' }),
                            '22'
                          ),
                          _react2.default.createElement(
                            'a',
                            { href: '' },
                            _react2.default.createElement('i', { className: 'fa fa-comments-o' }),
                            '106'
                          ),
                          _react2.default.createElement(
                            'a',
                            { href: '' },
                            _react2.default.createElement('i', { className: 'fa fa-heart text-danger' }),
                            '862'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'comments-here media ' + _Profile2.default.commentsHere },
                          _react2.default.createElement(
                            'a',
                            { className: 'pull-left', href: '' },
                            _react2.default.createElement('img', {
                              className: 'media-object img-circle img-responsive',
                              src: _flatAvatar2.default, alt: 'Media Object'
                            })
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                              'a',
                              { href: '' },
                              _react2.default.createElement(
                                'h5',
                                { className: 'media-heading' },
                                'Kumar Pratik'
                              )
                            ),
                            _react2.default.createElement(
                              'span',
                              { className: 'timely pull-right text-muted ' + _Profile2.default.timely },
                              '3 hours ago'
                            ),
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic repudiandae exercitationem provident nihil consectetur.',
                            _react2.default.createElement(
                              'div',
                              { className: 'comment-like ' + _Profile2.default.commentsLikes },
                              _react2.default.createElement(
                                'a',
                                { href: '' },
                                _react2.default.createElement('i', { className: 'fa fa-comments-o' }),
                                '106'
                              ),
                              _react2.default.createElement(
                                'a',
                                { href: '' },
                                _react2.default.createElement('i', { className: 'fa fa-heart text-danger' }),
                                '862'
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-6' },
                    _react2.default.createElement(
                      'div',
                      { className: 'prophoto ' + _Profile2.default.proPhoto },
                      _react2.default.createElement(
                        _reactBootstrap.Panel,
                        {
                          bsStyle: 'default',
                          className: _Profile2.default.panelWrapper,
                          header: _react2.default.createElement(
                            'h3',
                            { className: 'panel-title ' + _Profile2.default.panelTitile },
                            _react2.default.createElement('img', {
                              className: 'panel-photo img-responsive img-circle ' + _Profile2.default.panelPhoto,
                              src: _flatAvatar2.default, alt: ''
                            }),
                            'Kumar',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                              'span',
                              { className: 'text-muted ' + _Profile2.default.textMuted },
                              'Posted on 3rd March 2014'
                            )
                          )
                        },
                        _react2.default.createElement('img', { className: 'img-responsive', src: _colorful2.default, alt: '', height: '200' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'comment-links clearfix ' + _Profile2.default.commentLinks },
                          _react2.default.createElement(
                            'a',
                            { href: '' },
                            _react2.default.createElement('i', { className: 'fa fa-share-alt' }),
                            '22'
                          ),
                          _react2.default.createElement(
                            'a',
                            { href: '' },
                            _react2.default.createElement('i', { className: 'fa fa-comments-o' }),
                            '106'
                          ),
                          _react2.default.createElement(
                            'a',
                            { href: '' },
                            _react2.default.createElement('i', { className: 'fa fa-heart text-danger' }),
                            '862'
                          )
                        )
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
    return Profile;
  }(_react.Component);
  
  Profile.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = (0, _withStyles2.default)(_Profile2.default)(Profile);

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(272);
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
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../node_modules/postcss-loader/index.js?pack=default!./Profile.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../node_modules/postcss-loader/index.js?pack=default!./Profile.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n/*======================================\nvariable for ani theme\n======================================*/\n\n}\n\n.Profile_coverWrapper_2Kx {\n  position: relative;\n  margin: -10px -10px 0 -10px\n}\n\n.Profile_coverWrapper_2Kx .Profile_coverPhoto_1Wm {\n  -webkit-background-size: cover;\n          background-size: cover;\n  height: 300px\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_coverPhoto_1Wm .Profile_nameDesg_8yE {\n  padding: 15px;\n  font-size: 13px;\n  color: white;\n  text-shadow: 1px 1px rgba(0,0,0, 0.6);\n  height: 300px;\n  font-weight: 300;\n  background: rgba(0,0,0,0.4)\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_coverPhoto_1Wm .Profile_nameDesg_8yE h3 {\n  font-weight: 300;\n  margin: 0\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_coverPhoto_1Wm .Profile_nameDesg_8yE h3 small {\n  display: block;\n  color: #eee;\n  margin-top: 8px;\n  font-size: 13px;\n  font-weight: 300\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_profilePhotoWrapper_2XN {\n  position: relative;\n\n  .img-circle {\n    border: 2px solid white\n\n  }\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_profilePhotoWrapper_2XN img.Profile_profilePhoto_3Yz {\n  width: 200px;\n  position: absolute;\n  right: 40px;\n  top: -150px\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx {\n  width: 100%;\n  background-color: white;\n  min-height: 45px;\n  font-size: 12px;\n  color: #ADADAD\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx a {\n  color: inherit\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx a:hover {\n  color: #3ca2e0\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_faFooBar_3-l {\n  font-size: 17px;\n  padding-left: 15px;\n  padding-top: 15px;\n  padding-right: 5px\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_probutton_Z16 {\n  margin-left: 3%\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_probutton_Z16 .Profile_btnProButton_28a {\n  width: 94px;\n  height: 31px;\n  margin-bottom: 8px;\n  font-size: 13px\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_probutton_Z16 .Profile_btnProButton_28a:hover {\n  background: #3ca2e0;\n  color: #ffffff\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_probutton_Z16 .Profile_btnBordered_DPZ {\n  border-radius: 30px;\n  background: #FFFFFF;\n  border-width: 2px\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_probutton_Z16 .Profile_btnPrimary_3dM {\n  border-color: #3ca2e0;\n  color: #3ca2e0\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_links_1_N {\n  margin-right: 250px\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_links_1_N .Profile_faFooBar_3-l {\n  padding-left: 12px\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_links_1_N a {\n  color: inherit\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_links_1_N a:hover {\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_links_1_N a:hover .Profile_twitter_2eQ {\n  color: #31DDFE\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_links_1_N a:hover .Profile_facebook_3L6 {\n  color: #274EFF\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_links_1_N a:hover .Profile_googlePlus_1vu {\n  color: #CD2138\n\n}\n\n.Profile_coverWrapper_2Kx .Profile_foobar_Qtx .Profile_links_1_N a:hover .Profile_github_u0Q {\n  color: #141414\n\n}\n\n.Profile_contentWrapper_3LK {\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT {\n  margin-top: 15px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_item_BZQ {\n  width: 25%\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_profileComment_Ltv, .Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_item_BZQ {\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_profileComment_Ltv .Profile_panelFooter_3at, .Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_item_BZQ .Profile_panelFooter_3at {\n  vertical-align: middle\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_profileComment_Ltv .Profile_panelFooter_3at a, .Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_item_BZQ .Profile_panelFooter_3at a {\n  color: inherit;\n  opacity: 0.4\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_profileComment_Ltv .Profile_panelFooter_3at a .Profile_fa_1Ho, .Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_item_BZQ .Profile_panelFooter_3at a .Profile_fa_1Ho {\n  font-size: 17px;\n  padding-left: 15px;\n  padding-top: 1%;\n  padding-right: 5px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_profileComment_Ltv .Profile_panelFooter_3at a:hover, .Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_item_BZQ .Profile_panelFooter_3at a:hover {\n  opacity: 1\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_profileComment_Ltv .Profile_panelFooter_3at .Profile_btnPanel_1n3, .Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_item_BZQ .Profile_panelFooter_3at .Profile_btnPanel_1n3 {\n  border-radius: 30px;\n  background-color: #3ca2e0\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_profileComment_Ltv .Profile_panelFooter_3at .Profile_btnPanel_1n3:hover, .Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_item_BZQ .Profile_panelFooter_3at .Profile_btnPanel_1n3:hover {\n  background-color: #2089c9;\n  border-color: #1b74aa\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_profileComment_Ltv textarea, .Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_item_BZQ textarea {\n  border: none;\n  width: 100%\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 {\n  position: relative\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 .Profile_panelPhoto_e0S {\n  position: absolute;\n  width: 50px;\n  left: -4px;\n  top: -4px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 .Profile_panelWrapper_1wU {\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 .Profile_panelWrapper_1wU .panel-heading {\n  background: inherit;\n  position: relative;\n  padding: 10px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 .Profile_panelWrapper_1wU .panel-body {\n  padding: 0\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 .Profile_panelWrapper_1wU .panel-body .Profile_lorem_2A_ {\n  padding: 15px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 .Profile_panelTitile_3uQ {\n  padding-left: 40px;\n  font-size: 15px;\n  font-weight: 400;\n  color: #444\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 .Profile_panelTitile_3uQ .Profile_textMuted_27B {\n  font-size: 11px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 .Profile_commentLinks_1_i {\n  border-top: 1px solid #D0D0D0;\n  padding: 10px;\n  font-size: 12px;\n  line-height: 14px;\n  color: #999;\n  text-align: right\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 .Profile_commentLinks_1_i .fa {\n  padding-right: 5px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 .Profile_commentLinks_1_i a {\n  color: inherit;\n  display: inline-block;\n  padding-left: 15px;\n  opacity: 0.8\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_proPhoto_2M6 .Profile_commentLinks_1_i a:hover {\n  opacity: 1\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_commentsHere_190 {\n  margin-top: 0;\n  border-top: 1px solid #D0D0D0;\n  padding: 10px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_commentsHere_190 .media-body {\n  font-size: 12px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_commentsHere_190 .media-body a {\n  color: inherit\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_commentsHere_190 .img-responsive {\n  width: 40px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_commentsHere_190 :gloabl(.media-heading) {\n  font-size: 14px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_commentsHere_190 .Profile_timely_3Ki {\n  font-size: 10px;\n  margin-top: -18px;\n  padding-right: 10px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_commentsHere_190 .Profile_commentsLikes_3VR {\n  margin-top: 5px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_commentsHere_190 .Profile_commentsLikes_3VR .fa {\n  padding-right: 5px\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_commentsHere_190 .Profile_commentsLikes_3VR a {\n  color: inherit;\n  display: inline-block;\n  padding-right: 15px;\n  opacity: 0.8\n\n}\n\n.Profile_contentWrapper_3LK .Profile_profileBody_1RT .Profile_commentsHere_190 .Profile_commentsLikes_3VR a:hover {\n  opacity: 1\n\n}\n\n@media (max-width: 992px) {\n  div.Profile_coverPhoto_1Wm, div.Profile_coverPhoto_1Wm .Profile_nameDesg_8yE {\n    height: 250px;\n  }\n  .Profile_coverWrapper_2Kx .Profile_profilePhotoWrapper_2XN img.Profile_profilePhoto_3Yz {\n    top: -200px;\n    width: 150px;\n  }\n  .Profile_foobar_Qtx {\n  }\n  .Profile_foobar_Qtx .Profile_links_1_N {\n    margin-right: 15px\n\n  }\n}\n\n@media (max-width: 400px) {\n  div.Profile_coverPhoto_1Wm, div.Profile_coverPhoto_1Wm .Profile_nameDesg_8yE {\n    text-align: center;\n  }\n  .Profile_coverWrapper_2Kx .Profile_profilePhotoWrapper_2XN img.Profile_profilePhoto_3Yz {\n    width: 140px;\n    top: -165px;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n  }\n  .Profile_foobar_Qtx {\n  }\n  .Profile_foobar_Qtx .pull-right {\n    float: none !important\n\n  }\n}\n", "", {"version":3,"sources":["/./components/variables.css","/./routes/dashboard/Profile/Profile.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;;AAE5D;;wCAEwC;;CAQvC;;ACvCD;EACE,mBAAmB;EACnB,2BAA4B;CA+G7B;;AA7GC;EACE,+BAAuB;UAAvB,uBAAuB;EACvB,aAAc;;CAsBf;;AArBC;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,sCAAsC;EACtC,cAAc;EACd,iBAAiB;EACjB,2BAA4B;;CAa7B;;AAZC;EACE,iBAAiB;EACjB,SAAU;;CASX;;AAPC;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,gBAAiB;;CAClB;;AAKP;EACE,mBAAmB;;EAOnB;IACE,uBAAwB;;GACzB;;CACF;;AATC;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,WAAY;;CACb;;AAMH;EACE,YAAY;EACZ,wBAAwB;EACxB,iBAAiB;EACjB,gBAAgB;EAChB,cAAe;;CAgEhB;;AA/DC;EACE,cAAe;;CAIhB;;AAHC;EACE,cAA4B;;CAC7B;;AAGH;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAmB;;CACpB;;AAED;EACE,eAAgB;;CAuBjB;;AAtBC;EACI,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,eAAgB;;CAMnB;;AAJG;EACE,oBAAoB;EACpB,cAAe;;CAChB;;AAGL;EACI,oBAAoB;EACpB,oBAAoB;EACpB,iBAAiB;;CACpB;;AAED;EACE,sBAAsB;EACtB,cAAe;;CAChB;;AAGH;EACE,mBAAoB;;CAqBrB;;AApBC;EACE,kBAAmB;;CACpB;;AACD;EACE,cAAe;;CAehB;;AAdC;CAaC;;AAZC;EACE,cAAe;;CAChB;;AACD;EACE,cAAe;;CAChB;;AACD;EACE,cAAe;;CAChB;;AACD;EACE,cAAe;;CAChB;;AAUX;CAsIC;;AArIC;EACE,gBAAiB;;CAmIlB;;AAlIC;EACE,UAAW;;CACZ;;AAED;CA6BC;;AA5BC;EACE,sBAAuB;;CAsBxB;;AArBC;EACE,eAAe;EACf,YAAa;;CAUd;;AATC;EACE,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAmB;;CACpB;;AACD;EACE,UAAW;;CACZ;;AAEH;EACE,oBAAoB;EACpB,yBAA0B;;CAK3B;;AAJC;EACE,0BAA0B;EAC1B,qBAAsB;;CACvB;;AAGL;EACE,aAAa;EACb,WAAY;;CACb;;AAGH;EACE,kBAAmB;;CAoDpB;;AAnDC;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,SAAU;;CACX;;AACD;CAYC;;AAXC;EACE,oBAAoB;EACpB,mBAAmB;EACnB,aAAc;;CACf;;AACD;EACE,UAAW;;CAIZ;;AAHC;EACE,aAAc;;CACf;;AAGL;EACE,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,WAAY;;CAIb;;AAHC;EACE,eAAgB;;CACjB;;AAGH;EACE,8BAA8B;EAC9B,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,iBAAkB;;CAenB;;AAbC;EACE,kBAAmB;;CACpB;;AAED;EACE,eAAe;EACf,sBAAsB;EACtB,mBAAmB;EACnB,YAAa;;CAId;;AAHC;EACE,UAAW;;CACZ;;AAKP;EACE,cAAc;EACd,8BAA8B;EAC9B,aAAc;;CAoCf;;AAnCC;EACE,eAAgB;;CAIjB;;AAHC;EACE,cAAe;;CAChB;;AAGH;EACE,WAAY;;CACb;;AAED;EACE,eAAgB;;CACjB;;AAED;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAoB;;CACrB;;AACD;EACI,eAAgB;;CAanB;;AAZG;EACE,kBAAmB;;CACpB;;AACD;EACE,eAAe;EACf,sBAAsB;EACtB,oBAAoB;EACpB,YAAa;;CAId;;AAHC;EACE,UAAW;;CACZ;;AAQb;EACE;IACE,cAAc;GACf;EACD;IACE,YAAY;IACZ,aAAa;GACd;EACD;GAIC;EAHC;IACE,kBAAmB;;GACpB;CAEJ;;AAED;EACE;IACE,mBAAmB;GACpB;EACD;IACE,aAAa;IACb,YAAY;IACZ,eAAe;IACf,QAAQ;IACR,SAAS;GACV;EACD;GAIC;EAHC;IACE,sBAAsB;;GACvB;CAEJ","file":"Profile.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n/*======================================\nvariable for ani theme\n======================================*/\n\n  --nav-width       : 235px;\n  --brand-primary   : #3ca2e0;\n  --brand-secondary : #7BB77C;\n  --brand-danger    : #de6764;\n  --brand-black     : #ffffff\n\n}\n","@import '../../../components/variables.css';\n\n.coverWrapper {\n  position: relative;\n  margin: -10px -10px 0 -10px;\n\n  & .coverPhoto {\n    background-size: cover;\n    height: 300px;\n    & .nameDesg {\n      padding: 15px;\n      font-size: 13px;\n      color: white;\n      text-shadow: 1px 1px rgba(0,0,0, 0.6);\n      height: 300px;\n      font-weight: 300;\n      background: rgba(0,0,0,0.4);\n      & h3 {\n        font-weight: 300;\n        margin: 0;\n\n        & small {\n          display: block;\n          color: #eee;\n          margin-top: 8px;\n          font-size: 13px;\n          font-weight: 300;\n        }\n      }\n    }\n  }\n\n  & .profilePhotoWrapper {\n    position: relative;\n    & img.profilePhoto {\n      width: 200px;\n      position: absolute;\n      right: 40px;\n      top: -150px;\n    }\n    :global(.img-circle) {\n      border: 2px solid white;\n    }\n  }\n\n  & .foobar {\n    width: 100%;\n    background-color: white;\n    min-height: 45px;\n    font-size: 12px;\n    color: #ADADAD;\n    & a {\n      color: inherit;\n      &:hover {\n        color: var(--brand-primary);\n      }\n    }\n\n    & .faFooBar {\n      font-size: 17px;\n      padding-left: 15px;\n      padding-top: 15px;\n      padding-right: 5px;\n    }\n\n    & .probutton {\n      margin-left: 3%;\n      & .btnProButton {\n          width: 94px;\n          height: 31px;\n          margin-bottom: 8px;\n          font-size: 13px;\n\n          &:hover {\n            background: #3ca2e0;\n            color: #ffffff;\n          }\n      }\n\n      & .btnBordered {\n          border-radius: 30px;\n          background: #FFFFFF;\n          border-width: 2px\n      }\n\n      & .btnPrimary {\n        border-color: #3ca2e0;\n        color: #3ca2e0;\n      }\n    }\n\n    & .links {\n      margin-right: 250px;\n      & .faFooBar {\n        padding-left: 12px;\n      }\n      & a {\n        color: inherit;\n        &:hover {\n          & .twitter {\n            color: #31DDFE;\n          }\n          & .facebook {\n            color: #274EFF;\n          }\n          & .googlePlus {\n            color: #CD2138;\n          }\n          & .github {\n            color: #141414;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n\n\n.contentWrapper {\n  & .profileBody {\n    margin-top: 15px;\n    & .item {\n      width: 25%;\n    }\n\n    & .profileComment, & .item {\n      & .panelFooter {\n        vertical-align: middle;\n        & a {\n          color: inherit;\n          opacity: 0.4;\n          & .fa {\n            font-size: 17px;\n            padding-left: 15px;\n            padding-top: 1%;\n            padding-right: 5px;\n          }\n          &:hover {\n            opacity: 1;\n          }\n        }\n        & .btnPanel {\n          border-radius: 30px;\n          background-color: #3ca2e0;\n          &:hover {\n            background-color: #2089c9;\n            border-color: #1b74aa;\n          }\n        }\n      }\n      & textarea {\n        border: none;\n        width: 100%;\n      }\n    }\n\n    & .proPhoto {\n      position: relative;\n      & .panelPhoto {\n        position: absolute;\n        width: 50px;\n        left: -4px;\n        top: -4px;\n      }\n      & .panelWrapper {\n        & :global(.panel-heading) {\n          background: inherit;\n          position: relative;\n          padding: 10px;\n        }\n        & :global(.panel-body) {\n          padding: 0;\n          & .lorem {\n            padding: 15px;\n          }\n        }\n      }\n      & .panelTitile {\n        padding-left: 40px;\n        font-size: 15px;\n        font-weight: 400;\n        color: #444;\n        & .textMuted {\n          font-size: 11px;\n        }\n      }\n\n      & .commentLinks {\n        border-top: 1px solid #D0D0D0;\n        padding: 10px;\n        font-size: 12px;\n        line-height: 14px;\n        color: #999;\n        text-align: right;\n\n        & :global(.fa) {\n          padding-right: 5px;\n        }\n\n        & a {\n          color: inherit;\n          display: inline-block;\n          padding-left: 15px;\n          opacity: 0.8;\n          &:hover {\n            opacity: 1;\n          }\n        }\n      }\n    }\n\n    & .commentsHere {\n      margin-top: 0;\n      border-top: 1px solid #D0D0D0;\n      padding: 10px;\n      & :global(.media-body) {\n        font-size: 12px;\n        & a {\n          color: inherit;\n        }\n      }\n\n      & :global(.img-responsive) {\n        width: 40px;\n      }\n\n      & :gloabl(.media-heading) {\n        font-size: 14px;\n      }\n\n      & .timely {\n        font-size: 10px;\n        margin-top: -18px;\n        padding-right: 10px;\n      }\n      & .commentsLikes {\n          margin-top: 5px;\n          & :global(.fa) {\n            padding-right: 5px;\n          }\n          & a {\n            color: inherit;\n            display: inline-block;\n            padding-right: 15px;\n            opacity: 0.8;\n            &:hover {\n              opacity: 1;\n            }\n          }\n      }\n    }\n  }\n}\n\n\n@media (max-width: 992px) {\n  div.coverPhoto, div.coverPhoto .nameDesg {\n    height: 250px;\n  }\n  .coverWrapper .profilePhotoWrapper img.profilePhoto {\n    top: -200px;\n    width: 150px;\n  }\n  .foobar {\n    & .links {\n      margin-right: 15px;\n    }\n  }\n}\n\n@media (max-width: 400px) {\n  div.coverPhoto, div.coverPhoto .nameDesg {\n    text-align: center;\n  }\n  .coverWrapper .profilePhotoWrapper img.profilePhoto {\n    width: 140px;\n    top: -165px;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n  }\n  .foobar {\n    & :global(.pull-right) {\n      float:none !important;\n    }\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"coverWrapper": "Profile_coverWrapper_2Kx",
  	"coverPhoto": "Profile_coverPhoto_1Wm",
  	"nameDesg": "Profile_nameDesg_8yE",
  	"profilePhotoWrapper": "Profile_profilePhotoWrapper_2XN",
  	"profilePhoto": "Profile_profilePhoto_3Yz",
  	"foobar": "Profile_foobar_Qtx",
  	"faFooBar": "Profile_faFooBar_3-l",
  	"probutton": "Profile_probutton_Z16",
  	"btnProButton": "Profile_btnProButton_28a",
  	"btnBordered": "Profile_btnBordered_DPZ",
  	"btnPrimary": "Profile_btnPrimary_3dM",
  	"links": "Profile_links_1_N",
  	"twitter": "Profile_twitter_2eQ",
  	"facebook": "Profile_facebook_3L6",
  	"googlePlus": "Profile_googlePlus_1vu",
  	"github": "Profile_github_u0Q",
  	"contentWrapper": "Profile_contentWrapper_3LK",
  	"profileBody": "Profile_profileBody_1RT",
  	"item": "Profile_item_BZQ",
  	"profileComment": "Profile_profileComment_Ltv",
  	"panelFooter": "Profile_panelFooter_3at",
  	"fa": "Profile_fa_1Ho",
  	"btnPanel": "Profile_btnPanel_1n3",
  	"proPhoto": "Profile_proPhoto_2M6",
  	"panelPhoto": "Profile_panelPhoto_e0S",
  	"panelWrapper": "Profile_panelWrapper_1wU",
  	"lorem": "Profile_lorem_2A_",
  	"panelTitile": "Profile_panelTitile_3uQ",
  	"textMuted": "Profile_textMuted_27B",
  	"commentLinks": "Profile_commentLinks_1_i",
  	"commentsHere": "Profile_commentsHere_190",
  	"timely": "Profile_timely_3Ki",
  	"commentsLikes": "Profile_commentsLikes_3VR"
  };

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "common/images/profile-cover.jpg?7325ed0b4243335b85332b7f70301e72";

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "common/images/flat.png?36d502d84b4e2b2102d67d1c36e3e7c1";

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "common/images/colorful4.jpg?a5eeb3f3061d81478eb7bbc43dc99669";

/***/ }

};;
//# sourceMappingURL=server.profile.js.map