import React, { Component } from 'react';
import Experience from './components/Experience';
import Projects from './components/projects';
import "./MainContent.css"

export default class Maincontent extends Component {

render() {
  return (
    <div id="body"> 
        <div id="experience"><Experience/></div>
        <Projects/>
    </div>
  )
 }
}