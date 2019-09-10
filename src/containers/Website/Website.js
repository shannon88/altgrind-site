import React, { Component } from 'react';
import './Website.css';
import Header from '../../components/Header'
import Home from './Home/Home'
import About from './About/About'
import Footer from '../../components/Footer'
import Podcast from './Podcast/Podcast'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import { Route } from 'react-router-dom';
import {
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import theme from './muiTheme'


class Website extends Component {
  render () {
    return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <div className="website">
          <div className="header"><Header/></div>
          {/*<Route path="/" exact render={()=> <div className="home"><Home/></div>} />*/}
          {/*<Route exact path="/" component={Home} />*/}
          {/*<div className="home"><Route exact path="/" component={Home}/></div>*/}
          <div className="about"><Route exact path="/about" component={About}/></div>
          <div className="podcast"><Route path="/podcast" component={Podcast}/></div>
          <div className="projects"><Route path="/projects" component={Projects}/></div>
          <div className="contact"><Route path="/contact" component={Contact}/></div>
          <div className="footer"><Footer/></div>
        </div>
      </MuiThemeProvider>
  );
  }
}

export default Website;