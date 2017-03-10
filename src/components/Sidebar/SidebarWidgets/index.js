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
            <p>Date of birth</p>
            <p></p>
          </div>
          <div id="familyHistory">
            <p>Family history of cancer</p>
            <p></p>
          </div>
          <div id="comorbidity">
            <p>Comorbidity</p>
            <p>Surgery</p>
            <p>Stroke</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SidebarWidgets);
