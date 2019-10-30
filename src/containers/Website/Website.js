import React from "react";
import "./Website.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./muiTheme";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Container from '@material-ui/core/Container';
// import Grid from "@material-ui/core/Grid";

const Website = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      {/* <Container> */}
      <div className="website">
        <Header />
        <Routes />
        <Footer />
      </div>
      {/* </Container> */}
    </MuiThemeProvider>
  </BrowserRouter>
);

export default Website;
