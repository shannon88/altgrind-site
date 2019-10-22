import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      {/* <Container> */}
      {/* <Grid container> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/podcast" component={Podcasts} />
        <Route path="/episode" component={EpisodePage} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      {/* </Grid> */}
      {/* </Container> */}
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
