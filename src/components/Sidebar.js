import logo from '../logo.svg';
import React, { Component } from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {

    render() {
      return (
        <div id="sidenav">
          <img src={logo}></img>
          <a href=''>Experience</a>
          <li>Projects</li>
          <li>Skills</li>
        </div>
      )
     }
}