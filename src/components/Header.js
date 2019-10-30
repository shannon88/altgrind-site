import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import NavMenu from "./NavMenu";

const useStyles = makeStyles(theme => ({
  appBar: {
    // backgroundColor: "rgb(38,166,154)"
    backgroundColor: "#102027",
  },

  navItem: {
    textDecoration: "none",
    margin: "0 1rem",
    // color: "#37474f",
    color: '#ffffff',
    fontWeight: 600,
    "&:hover": { color: "#64d8cb" },
  },

  title: {
    textDecoration: 'none',
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: '2rem',
    color: '#ffffff',
    // paddingLeft: '1rem',
    // letterSpacing: '.1rem',
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
        <Box display={{ xs: 'block', md: 'none' }}>
          <NavMenu/>
              </Box>
          <Grid
            container
            alignItems="center"
            // alignContent="flex-end"
            justify="space-between"
            direction="row"
            nowrap
          >
            <Grid item xl>
              <Link to="/" className={classes.title}>
                altgrind
              </Link>
            </Grid>
            <Grid item xl>
              <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
              <Link to="/about" className={classes.navItem}>
                about
              </Link>
              <Link to="/podcast" className={classes.navItem}>
                podcast
              </Link>
              <Link to="/projects" className={classes.navItem}>
                projects
              </Link>
              <Link to="/contact" className={classes.navItem}>
                contact
              </Link>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;