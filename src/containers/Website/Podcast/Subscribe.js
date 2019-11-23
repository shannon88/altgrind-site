import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const Subscribe = () => {
  const classes = useStyles();
  return (
    <div>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        href="https://podcasts.apple.com/us/podcast/altgrind/id1481631112"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Apple Podcasts
      </Button>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.breaker.audio/altgrind"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Breaker
      </Button>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9jMzgzZDRjL3BvZGNhc3QvcnNz"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Google Podcasts
      </Button>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        href="https://overcast.fm/itunes1481631112/altgrind"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Overcast
      </Button>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        href="https://radiopublic.com/altgrind-WYYkll"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        RadioPublic
      </Button>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        href="https://open.spotify.com/show/3vjbuTzgJFwPgKKTP46XKA"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Spotify
      </Button>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.stitcher.com/s?fid=473576&refid=stpr"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Stitcher
      </Button>
    </div>
  );
};

export default Subscribe;
