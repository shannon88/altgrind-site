import React from "react";
import styles from "./Home.module.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import History from "../History";

History.push('/');

const useStyles = makeStyles({
  button: {
    fontSize: "1.25rem"
  },
  img: {
    backgroundImage:
      "url(" + require("./images/newyorkcity-skyline-small-edit-75opaque.jpg") + ")",
    backgroundSize: "cover",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  }
});

const Home = () => {
  const classes = useStyles();
  return (

    <div className={classes.img}>
          <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <div className={styles.bannerTextWrapper}>
        <div className={styles.bannerText}>
          <Grid item xs>
          <h1>Quit your day job and explore tech alternatives with me.</h1>
          <Button
            className={classes.button}
            component={Link}
            to="/podcast"
            variant="contained"
            color="primary"
          >
            Podcast
          </Button>
          </Grid>
        </div>
      </div>
      </Grid>
    </div>

  );
};

export default Home;
