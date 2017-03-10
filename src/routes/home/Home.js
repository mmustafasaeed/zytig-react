

import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Panel } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import s from './Home.css';
import Stats from '../../components/common/Stats';
import TodoList from '../../components/common/TodoList';
import {
  LineChart, Tooltip, XAxis, YAxis, CartesianGrid, Line as LineRechart, AreaChart, Area,
  BarChart, Bar, ResponsiveContainer } from '../../vendor/recharts';

import CustomPieChart from '../../components/CustomPieChart';


const title = 'Zytig';

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year;
  return time;
}

function plotData() {
  var finalData = [];
  var data = [{"date":1079910000,"psa_fot":0.0,"type":"psa","psa_total":3.709661},{"date":1180389600,"psa_fot":0.0862069,"type":"psa","psa_total":6.328245},{"date":1183240800,"psa_fot":0.1034483,"type":"psa","psa_total":6.328245},{"date":1185832800,"type":"biopsy","cancer_in_biopsy":1},{"date":1186839800,"type":"diagnosis","diagnosis_cause":"Health examination","gleason_t":6,"m_stage":"MX","n_stage":"NX","t_stage":"T2","age_diagnosis":68,"psa_diagnosis":6.328245},{"date":1189375200,"psa_fot":0.2028985,"type":"psa","psa_total":7.52843},{"date":1197154800,"psa_fot":0.0866667,"type":"psa","psa_total":6.54646},{"date":1197759600,"type":"surgery"},{"date":1200956400,"psa_fot":0.8,"type":"psa","psa_total":0.0545538},{"date":1213480800,"psa_fot":0.4444444,"type":"psa","psa_total":0.0981969},{"date":1228950000,"psa_fot":0.4,"type":"psa","psa_total":0.1091077},{"date":1245189600,"psa_fot":0.4,"type":"psa","psa_total":0.1091077},{"date":1262473200,"psa_fot":0.3636364,"type":"psa","psa_total":0.1200184},{"date":1272405600,"type":"psa","psa_total":0.0},{"date":1281218400,"psa_fot":0.3636364,"type":"psa","psa_total":0.1200184},{"date":1304805600,"psa_fot":0.4,"type":"psa","psa_total":0.1091077},{"date":1335218400,"psa_fot":0.2380952,"type":"psa","psa_total":0.2291261},{"date":1337637600,"psa_fot":0.2941176,"type":"psa","psa_total":0.1854831},{"date":1339365600,"psa_fot":0.2777778,"type":"psa","psa_total":0.1963938},{"date":1347141600,"psa_fot":0.25,"type":"psa","psa_total":0.2182153},{"date":1355612400,"psa_fot":0.2272727,"type":"psa","psa_total":0.2400369},{"date":1363042800,"psa_fot":0.25,"type":"psa","psa_total":0.2182153},{"date":1375048800,"psa_fot":0.25,"type":"psa","psa_total":0.2182153},{"date":1388962800,"psa_fot":0.2142857,"type":"psa","psa_total":0.3055015},{"date":1398808800,"psa_fot":0.2333333,"type":"psa","psa_total":0.327323},{"date":1401832800,"psa_fot":0.0,"type":"psa","psa_total":0.3491445},{"date":1416178800,"psa_fot":1.0,"type":"psa","psa_total":0.0545538},{"date":1433628000,"psa_fot":1.0,"type":"psa","psa_total":0.5455384}];
  for (var i=0; i< data.length; i++) {
    data[i].date = timeConverter(data[i].date);
    if(data[i].type == "psa") {
      finalData.push(data[i]);
    }
  }
  return finalData;
}
const lineChartData = plotData();


const areaData = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
      { name: 'Page G', uv: 3490, pv: 1300, amt: 2100, value: 100 },
      { name: 'Page H', uv: 3490, pv: 3300, amt: 2100, value: 200 },
      { name: 'Page I', uv: 2490, pv: 2300, amt: 2100, value: 300 },
      { name: 'Page J', uv: 5490, pv: 2800, amt: 2100, value: 700 },
      { name: 'Page G', uv: 4490, pv: 3800, amt: 2100, value: 400 },
      { name: 'Page H', uv: 2490, pv: 1300, amt: 2100, value: 300 },
      { name: 'Page I', uv: 5490, pv: 4300, amt: 2100, value: 500 },
      { name: 'Page J', uv: 2490, pv: 3300, amt: 2100, value: 100 },
      { name: 'Page K', uv: 4490, pv: 2300, amt: 2100, value: 500 },
];


// const pieData01 = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
//                   { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];


class Home extends Component {

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
          <div className="col-md-12 col-lg-12">
            <div className={s.homeStats}>
              <div className="col-md-3 col-lg-3">
              <Stats
                icon="tint"
                text={
                  <FormattedMessage
                    id="stat1"
                    defaultMessage="Recent PSA Value"
                  />
              }
                bgClass="info"
                link="/dashboard/chartjs"
                value="9"
                progressValue={90}
              />

              </div>
              <div className="col-md-3 col-lg-3">
              <Stats
                icon="heartbeat"
                text={
                  <FormattedMessage
                    id="stat2"
                    defaultMessage="Positive feedback"
                  />
              }
                bgClass="success"
                link="/dashboard/chartjs"
                value="94%"
                progressValue={94}
              />
              </div>

              <div className="col-md-3 col-lg-3">
              <Stats
                icon="person-walking"

                text={
                  <FormattedMessage
                    id="stat3"
                    defaultMessage="Posts flagged"
                  />
                }
                bgClass="danger"
                link="/dashboard/inbox"
                value="12,351"
                progressValue={72}
              />
              </div>

              <div className="col-md-3 col-lg-3">
              <Stats
                icon="flag"

                text={
                  <FormattedMessage
                    id="stat4"
                    defaultMessage="Posts flagged"
                  />
                }
                bgClass="danger"
                link="/dashboard/inbox"
                value="12,351"
                progressValue={72}
              />
              </div>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-11 col-lg-12">
            <div className="map-container box padder">
              <div className="panel">
                <div className="panel-body">
                  <ResponsiveContainer width="100%" height={254}>
                    <AreaChart
                      data={areaData} margin={{ top: 10, right: 30, left: -15, bottom: 0 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid stroke="#ccc" />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                      <Area
                        type="monotone"
                        dataKey="pv"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                      />
                      <Area
                        type="monotone"
                        dataKey="amt"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className={`map-container box padder ${s.powerSupplyChart}`}>
              <Panel header={<span>Power Supply Waves</span>}>
                <div>
                  <ResponsiveContainer width="100%" height={275}>
                    <LineChart data={lineChartData}>
                      <CartesianGrid stroke="#ccc" />
                      <XAxis />
                      <YAxis />
                      <Tooltip />
                      <LineRechart type="monotone" dataKey="sine" stroke="#8884d8" />
                      <LineRechart type="monotone" dataKey="cosine" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Panel>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-lg-3">
            <div className="row">
              <div className="col-sm-12">
                <div className={`${s.topRightChart}`}>
                  <ResponsiveContainer width="100%" height={142}>
                    <BarChart data={areaData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }} >
                      <Tooltip />
                      <Bar dataKey="value" fill="#DE6764" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>





            <div className={'row'}>
              <div className="col-sm-12 text-left">
                <div className={`${s.bottomRightChart}`}>
                  <div className="row">
                    <div className="col-sm-3 col-xs-5 text-left">
                      <span className="heading">
                        <FormattedMessage
                          id="views"
                          defaultMessage="Total Views"
                        />
                      </span>
                      <br />
                      <big className="text-primary">22068</big>
                    </div>
                    <div className="col-sm-9 col-xs-7">
                      <ResponsiveContainer height={100}>

                        <CustomPieChart />

                      </ResponsiveContainer>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



          <div className="col-md-8 col-lg-8">
            <div className={`map-container box padder ${s.powerSupplyChart}`}>
              <Panel header={<span>PSA Charts</span>}>
                <div>
                  <ResponsiveContainer width="100%" height={275}>
                    <LineChart data={lineChartData}>
                      <CartesianGrid stroke="#ccc" />
                      <XAxis dataKey="date"/>
                      <YAxis dataKey="psa_total"/>
                      <Tooltip />
                      <LineRechart type="monotone" dataKey="psa_total" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Panel>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
           <TodoList />
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(s)(Home);
