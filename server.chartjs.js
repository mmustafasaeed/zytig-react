require("source-map-support").install();
exports.ids = [17];
exports.modules = {

/***/ 229:
/***/ function(module, exports) {

  module.exports = require("react-bootstrap/lib/Dropdown");

/***/ },

/***/ 252:
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
  
  var _reactChartjs = __webpack_require__(253);
  
  var _reactBootstrap = __webpack_require__(60);
  
  var _Dropdown = __webpack_require__(229);
  
  var _Dropdown2 = _interopRequireDefault(_Dropdown);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'ChartJs';
  
  var chartOptions = {
  
    // /Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,
  
    // String - Colour of the grid lines
    scaleGridLineColor: 'rgba(0,0,0,.05)',
  
    // Number - Width of the grid lines
    scaleGridLineWidth: 1,
  
    // Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
  
    // Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
  
    // Boolean - Whether the line is curved between points
    bezierCurve: true,
  
    // Number - Tension of the bezier curve between points
    bezierCurveTension: 0.4,
  
    // Boolean - Whether to show a dot for each point
    pointDot: true,
  
    // Number - Radius of each point dot in pixels
    pointDotRadius: 4,
  
    // Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
  
    // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
  
    // Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
  
    // Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
  
    // Boolean - Whether to fill the dataset with a colour
    datasetFill: true,
    responsive: true,
  
    // String - A legend template
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% ' + 'for (const i=0; i<datasets.length; i++){%><li><span style=' + '"background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label)' + '{%><%=datasets[i].label%><%}%></li><%}%></ul>'
  
  };
  
  var pieData = [{
    value: 0.009,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Probability of Death from Prostate Cancer'
  }, {
    value: 0.079,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Probability of Death from other cause '
  }, {
    value: 1 - (0.009 + 0.079),
    color: '#2EAC6B',
    highlight: '#57BC88',
    label: 'Probability of Survival'
  }];
  
  var probability_15_data = [{
    value: 0.029,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Probability of Death from Prostate Cancer'
  }, {
    value: 0.166,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Probability of Death from other cause '
  }, {
    value: 1 - (0.029 + 0.166),
    color: '#2EAC6B',
    highlight: '#57BC88',
    label: 'Probability of Survival'
  }];
  var donutOptions = {
    // Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
  
    // String - The colour of each segment stroke
    segmentStrokeColor: '#fff',
  
    // Number - The width of each segment stroke
    segmentStrokeWidth: 2,
  
    // Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 70, // This is 0 for Pie charts
  
    // Number - Amount of animation steps
    animationSteps: 100,
  
    // String - Animation easing effect
    animationEasing: 'easeOutBounce',
  
    // Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
  
    // Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    responsive: true,
    scales: true,
  
    // String - A legend template
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% ' + 'for (const i=0; i<segments.length; i++){%><li><span style=' + '"background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%>' + '<%=segments[i].label%><%}%></li><%}%></ul>'
  
  };
  
  var pieOptions = {
    // Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
  
    // String - The colour of each segment stroke
    segmentStrokeColor: '#fff',
  
    // Number - The width of each segment stroke
    segmentStrokeWidth: 2,
  
    // Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 0, // This is 0 for Pie charts
  
    // Number - Amount of animation steps
    animationSteps: 100,
  
    // String - Animation easing effect
    animationEasing: 'easeOutBounce',
  
    // Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: false,
  
    // Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    responsive: true
  
  };
  
  var Chartjs = function (_Component) {
    (0, _inherits3.default)(Chartjs, _Component);
  
    function Chartjs() {
      (0, _classCallCheck3.default)(this, Chartjs);
      return (0, _possibleConstructorReturn3.default)(this, (Chartjs.__proto__ || (0, _getPrototypeOf2.default)(Chartjs)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Chartjs, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      } //  eslint-disable-line
  
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'animate' },
          _react2.default.createElement('div', { className: 'row' }),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-12', id: 'doughnutChart' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    ' Statistics from NPCR '
                  ),
                  bsStyle: 'primary'
                },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6' },
                  _react2.default.createElement(
                    'h4',
                    null,
                    '10 years'
                  ),
                  _react2.default.createElement(
                    'style',
                    null,
                    "\
                h4{\
                  text-align: center;\
                  padding-bottom: 5px;\
                  }\
                "
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6' },
                  _react2.default.createElement(
                    'h4',
                    null,
                    '15 years'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-12' },
                  _react2.default.createElement(
                    'h5',
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.Badge,
                      { id: 'badge1' },
                      ' '
                    ),
                    ' Death from prostate cancer \xA0  ',
                    _react2.default.createElement(
                      _reactBootstrap.Badge,
                      { id: 'badge2' },
                      ' '
                    ),
                    ' Death from other causes \xA0 \xA0  ',
                    _react2.default.createElement(
                      _reactBootstrap.Badge,
                      { id: 'badge3' },
                      ' '
                    ),
                    ' Survival'
                  )
                ),
                _react2.default.createElement(
                  'style',
                  null,
                  "\
                h5{\
                  padding-bottom: 10px;\
                  padding-top: 10px;\
                  text-align: center;\
                }\
                #badge1{\
                  background-color: #F7464A;\
                  }\
                #badge2{\
                  background-color: #FDB45C;\
                  }\
                #badge3{\
                  background-color: #2EAC6B;\
                  }\
                "
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6' },
                  _react2.default.createElement(_reactChartjs.Doughnut, { data: pieData, options: donutOptions })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6' },
                  ' ',
                  _react2.default.createElement(_reactChartjs.Doughnut, { data: probability_15_data, options: donutOptions })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-12', id: 'buttons' },
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { className: 'btn-rounded' },
                    'Age at diagnosis: 50-59 '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { className: 'btn-rounded' },
                    'M-stage: MX '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { className: 'btn-rounded' },
                    'PSA:10- '
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { className: 'btn-rounded' },
                    'Gleason: 2-6 '
                  ),
                  _react2.default.createElement(
                    'style',
                    null,
                    "\
                  .btn-rounded{\
                    margin-top: 20px;\
                    margin-right: 2%;\
                    margin-left: 2%;\
                    }\
                  #buttons{\
                    text-align: center;\
                  }\
                  "
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Chartjs;
  }(_react.Component);
  
  Chartjs.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  exports.default = Chartjs;

/***/ },

/***/ 253:
/***/ function(module, exports) {

  module.exports = require("react-chartjs");

/***/ }

};;
//# sourceMappingURL=server.chartjs.js.map