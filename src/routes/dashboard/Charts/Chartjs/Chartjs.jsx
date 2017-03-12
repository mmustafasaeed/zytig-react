import React, { Component, PropTypes } from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs';
import { Panel, Badge, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, FormGroup,
          Button, DropdownButton, ButtonToolbar, SplitButton } from 'react-bootstrap';
import Dropdown, {
  Menu as DropDownMenu,
  Toggle as DropDownToggle,
} from 'react-bootstrap/lib/Dropdown';

const title = 'ChartJs';

const chartOptions = {

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
  legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% '
  + 'for (const i=0; i<datasets.length; i++){%><li><span style='
  + '"background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label)'
  + '{%><%=datasets[i].label%><%}%></li><%}%></ul>',

};



const pieData = [
  {
    value: 0.009,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Probability of Death from Prostate Cancer',
  },
  {
    value: 0.079,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Probability of Death from other cause ',
  },
  {
    value: 1-(0.009+0.079),
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'Probability of Survival',
  },
];

const probability_15_data = [
  {
    value: 0.029,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Probability of Death from Prostate Cancer',
  },
  {
    value: 0.166,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Probability of Death from other cause ',
  },
  {
    value: 1-(0.029+0.166),
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'Probability of Survival',
  },
];
const donutOptions = {
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
  legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% '
  + 'for (const i=0; i<segments.length; i++){%><li><span style='
  + '"background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%>'
  + '<%=segments[i].label%><%}%></li><%}%></ul>',

};

const pieOptions = {
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
  responsive: true,

};


class Chartjs extends Component { //  eslint-disable-line

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.setTitle(title);
  }
  render() {
    return (
      <div className="animate">
        <div className="row">
        </div>

        <div className="row">
          <div className="col-md-12" id="doughnutChart">
            <Panel
              header={<span> Statistics from NPCR </span>}
              bsStyle="primary"
            >
              <div className="col-md-6"><h4>10 years</h4>
              <style>{"\
              h4{\
                text-align: center;\
                padding-bottom: 5px;\
                }\
              "}</style>
              </div>
              <div className="col-md-6"><h4>15 years</h4></div>

              <div className="col-md-12">
              <h5><Badge id="badge1"> </Badge> Death from prostate cancer
              &nbsp;  <Badge id="badge2"> </Badge> Death from other causes &nbsp;
              &nbsp;  <Badge id="badge3"> </Badge> Survival</h5>
              </div>
              <style>{"\
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
                background-color: #5AD3D1;\
                }\
              "}</style>

              <div className="col-md-6"><Doughnut data={pieData} options={donutOptions} /></div>
              <div className="col-md-6"> <Doughnut data={probability_15_data} options={donutOptions}/></div>

              <div className="col-md-12" id="buttons">
                <Button  className="btn-rounded">Age at diagnosis: 50-59 </Button>
                <Button  className="btn-rounded">M-stage: MX </Button>
                <Button  className="btn-rounded">PSA:10- </Button>
                <Button  className="btn-rounded">Gleason: 2-6 </Button>
                <style>{"\
                .btn-rounded{\
                  margin-top: 20px;\
                  margin-right: 2%;\
                  margin-left: 2%;\
                  }\
                #buttons{\
                  text-align: center;\
                }\
                "}</style>
              </div>

            </Panel>
          </div>
        </div>
      </div>
    );
  }
}
export default Chartjs;
