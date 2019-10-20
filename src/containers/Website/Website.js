import React, { Component } from "react";
import "./Website.css";
import Routes from "./Routes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./muiTheme";

class Website extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="website">
          <Routes/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Website;
