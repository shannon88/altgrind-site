import React, { Component } from 'react';
import './Website.css';
import Header from '../../components/Header'
import Home from './Home/Home'
import About from './About/About'
import Footer from '../../components/Footer'
import Podcast from './Podcast/Podcast'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'

class Website extends Component {
  render () {
    return (
        <div className="website">
          <div className="header"><Header/></div>
          <img className="bannerImage"src={require("./Home/images/nyc-skyline.jpg")} alt="NYC Skyline"/>
          <div className="home"><Home/></div>
          <div className="about"><About/></div>
          <div className="podcast"><Podcast/></div>
          <div className="projects"><Projects/></div>
          <div className="contact"><Contact/></div>
          <div className="footer"><Footer/></div>
        </div>
  );
  }
}

export default Website;