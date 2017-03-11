

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
  var data = [
    {"date":1079910000,"psa_fot":0.0,"type":"psa","psa_total":3.709661},
    {"date":1180389600,"psa_fot":0.0862069,"type":"psa","psa_total":6.328245},
    {"date":1183240800,"psa_fot":0.1034483,"type":"psa","psa_total":6.328245},
    {"date":1185832800,"type":"biopsy","cancer_in_biopsy":1},
    {"date":1186839800,"type":"diagnosis","diagnosis_cause":"Health examination","gleason_t":6,"m_stage":"MX","n_stage":"NX","t_stage":"T2","age_diagnosis":68,"psa_diagnosis":6.328245},
    {"date":1189375200,"psa_fot":0.2028985,"type":"psa","psa_total":7.52843},
    {"date":1197154800,"psa_fot":0.0866667,"type":"psa","psa_total":6.54646},
    {"date":1197759600,"type":"surgery"},
    {"date":1200956400,"psa_fot":0.8,"type":"psa","psa_total":0.0545538},
    {"date":1213480800,"psa_fot":0.4444444,"type":"psa","psa_total":0.0981969},
    {"date":1228950000,"psa_fot":0.4,"type":"psa","psa_total":0.1091077},
    {"date":1245189600,"psa_fot":0.4,"type":"psa","psa_total":0.1091077},
    {"date":1262473200,"psa_fot":0.3636364,"type":"psa","psa_total":0.1200184},
    {"date":1272405600,"type":"psa","psa_total":0.0},
    {"date":1281218400,"psa_fot":0.3636364,"type":"psa","psa_total":0.1200184},
    {"date":1304805600,"psa_fot":0.4,"type":"psa","psa_total":0.1091077},
    {"date":1335218400,"psa_fot":0.2380952,"type":"psa","psa_total":0.2291261},
    {"date":1337637600,"psa_fot":0.2941176,"type":"psa","psa_total":0.1854831},
    {"date":1339365600,"psa_fot":0.2777778,"type":"psa","psa_total":0.1963938},
    {"date":1347141600,"psa_fot":0.25,"type":"psa","psa_total":0.2182153},
    {"date":1355612400,"psa_fot":0.2272727,"type":"psa","psa_total":0.2400369},
    {"date":1363042800,"psa_fot":0.25,"type":"psa","psa_total":0.2182153},
    {"date":1375048800,"psa_fot":0.25,"type":"psa","psa_total":0.2182153},
    {"date":1388962800,"psa_fot":0.2142857,"type":"psa","psa_total":0.3055015},
    {"date":1398808800,"psa_fot":0.2333333,"type":"psa","psa_total":0.327323},
    {"date":1401832800,"psa_fot":0.0,"type":"psa","psa_total":0.3491445},
    {"date":1416178800,"psa_fot":1.0,"type":"psa","psa_total":0.0545538},
    {"date":1433628000,"psa_fot":1.0,"type":"psa","psa_total":0.5455384}
   ];
  for (var i=0; i< data.length; i++) {
    data[i].date = timeConverter(data[i].date);
    if(data[i].type == "psa") {
      finalData.push(data[i]);
    }
  }
  return finalData;
}
const lineChartData = plotData();

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
                value="0.54"
                progressValue={10}
              />

              </div>
              <div className="col-md-3 col-lg-3">
              <Stats
                icon="signal"
                text={
                  <FormattedMessage
                    id="stat2"
                    defaultMessage="Positive feedback"
                  />
              }
                bgClass="success"
                link="/dashboard/chartjs"
                value="T1"
                progressValue={25}
              />
              </div>

              <div className="col-md-3 col-lg-3">
              <Stats
                icon="list-alt"
                text={
                  <FormattedMessage
                    id="stat3"
                    defaultMessage="Posts flagged"
                  />
                }
                bgClass="warning"
                link="/dashboard/inbox"
                value="7"
                progressValue={70}
              />
              </div>

              <div className="col-md-3 col-lg-3">
              <Stats
                icon="heartbeat"
                text={
                  <FormattedMessage
                    id="stat4"
                    defaultMessage="Posts flagged"
                  />
                }
                bgClass="danger"
                link="/dashboard/inbox"
                value="82%"
                progressValue={82}
              />
              </div>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className={`map-container box padder ${s.powerSupplyChart}`}>
              <Panel header={<span>PSA Chart</span>}>
                <div>
                  <ResponsiveContainer width="100%" height={275}>
                    <LineChart data={lineChartData}>
                      <CartesianGrid stroke="#ccc" />
                      <XAxis dataKey="date"/>
                      <YAxis dataKey="psa_total"/>
                      <Tooltip />
                      <LineRechart type="monotone" dataKey="psa_total" stroke="#0004d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </div>



    );
  }
}


export default withStyles(s)(Home);
