import React from "react";
import { Route } from "react-router-dom";
// // import { createBrowserHistory } from 'history'
// import { BrowserRouter } from 'react-router-dom';
// import history from './History'
import Home from "./Home/Home";
import About from "./About/About";
import Podcasts from "./Podcast/PodcastPage";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import EpisodePage from "./Podcast/EpisodePage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "./ScrollToTop";
// import Container from '@material-ui/core/Container';
// import Grid from "@material-ui/core/Grid";
// const history = createBrowserHistory()

const Routes = () => {
  return (
    <div>
      <ScrollToTop />
      {/* <Container> */}
      {/* <Grid container> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/podcast" component={Podcasts} />
        <Route exact path="/episode" component={EpisodePage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      {/* </Grid> */}
      {/* </Container> */}
      </div>
  );
};

export default Routes;
