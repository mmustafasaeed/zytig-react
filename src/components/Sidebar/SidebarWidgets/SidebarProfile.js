import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SidebarWidgets.css';
// import Translate from '../../common/Translate';
import Link from '../../Link';
import profilePicture from '../../../common/images/flat-avatar.png';

class SidebarNewsFeed extends Component {
  render() {
    return (
      <div className="text-center">
        
          <img
            src={profilePicture}
            className={`user-avatar ${s.userAvatar}`}
            alt="user profile"
          />
       
        <div className={`text-center ${s.avatarName}`}>
          Patient
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SidebarNewsFeed);
