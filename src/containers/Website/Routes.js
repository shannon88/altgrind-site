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

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/podcast" component={Podcasts} />
      <Route path="/episode" component={EpisodePage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
