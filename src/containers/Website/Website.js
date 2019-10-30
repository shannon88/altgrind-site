import React from "react";
import "./Website.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./muiTheme";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ 
  root: {
    flexGrow: 1,
    fontFamily: "'Montserrat', sans-serif"
  },
});

const Website = () => {
  const classes = useStyles();
return (
  <BrowserRouter>
  <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
        <Grid container direction="column" spacing={0}>
        <Grid item xs>
        <Header />
        </Grid>
        <Grid item xs>
        <Routes />
        </Grid>
        <Grid item xs>
        <Footer />
        </Grid>
        </Grid>
        </div>
  </MuiThemeProvider>
</BrowserRouter>
)
};

export default Website;
