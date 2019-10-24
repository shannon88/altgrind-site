import React from "react";
import "./Website.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./muiTheme";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Website = () => 
      <MuiThemeProvider theme={theme}>
        <div className="website">
          <BrowserRouter>
            <Header />
            <Routes />
          </BrowserRouter>
          <Footer />
        </div>
      </MuiThemeProvider>
      

export default Website;
