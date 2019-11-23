import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    fontSize: "1.25rem"
  },
  containerImg: {
    backgroundImage:
      "url(" +
      require("./images/newyorkcity-skyline-small-edit-75opaque.jpg") +
      ")",
    backgroundSize: "cover",
    width: "auto",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
  tagline: {
    color: "#102027",
    fontSize: "2rem",
    fontWeight: "700",
    lineHeight: "2rem",
    maxWidth: "90%",
    marginBottom: "1.5rem",
    marginTop: "12.5%",
    ["@media (max-width:960px)"]: {
      // eslint-disable-line no-useless-computed-key
      marginTop: "8rem"
    }
  },

});

const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

const Home = props => {
  const styles = useStyles();
  const { classes } = props;
  return (
    <div className={styles.containerImg}>
          <Grid
    container
    direction="column"
    alignItems="center"
    justify="center"
    align="center"
  >
    <div className={classes.toolbar} />

            <Typography className={styles.tagline} variant="h2">
              Explore tech and learn to code with me.
              {/* Quit your day job and explore tech alternatives with me. */}
            </Typography>
            <Button
              className={styles.button}
              component={Link}
              to="/podcast"
              variant="contained"
              color="primary"
            >
              Podcast
            </Button>

  </Grid>

        </div>
  );
};

export default withStyles(styles)(Home);
