import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './containers/Website/Home/Home'
import About from './containers/Website/About/About'
import Footer from './components/Footer'
import Podcast from './containers/Website/Podcast/Podcast'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="header"><Header/></div>
          <img className="bannerImage"src={require("./pages/images/nyc-skyline.jpg")} alt="NYC Skyline"/>
          <div className="home"><Home/></div>
          <div className="about"><About/></div>
          <div className="podcast"><Podcast/></div>
          <div className="footer"><Footer/></div>
        </div>
      </BrowserRouter>
  );
  }
}

export default App;
