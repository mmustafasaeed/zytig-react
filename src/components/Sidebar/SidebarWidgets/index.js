import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SidebarWidgets.css';
import SidebarProfile from './SidebarProfile';
import SidebarCalendar from './SidebarCalendar';
import SidebarNewsFeed from './SidebarNewsFeed';


class SidebarWidgets extends Component { // eslint-disable-line
  render() {
    return (
      <div className={`sideWidgets ${s.sideWidgets}`}>
        <div className={`widgets-content ${s.widgetsContent}`}>
          <SidebarProfile />
          <div id="personalInfo">
            <br></br>
            <p>Name: Filip Svensson</p>
            <p>Date of birth: 1955.10.26 </p>
            <p>Age: 61 </p>
          </div>
          <div id="familyHistory">
            <p>Family history, cancer: No</p>
            <p></p>
          </div>
          <div id="comorbidity">
            <p>Comorbidity: No</p>
            <p>Surgery: Yes</p>
            <p>Stroke: No</p>
            <p>Smoking: Yes</p>
            <p>Prostate size: 30 ccm </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SidebarWidgets);
