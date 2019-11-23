import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  card: {
    maxWidth: 800,
    minWidth: 300,
    height: "auto",
    marginBottom: "1rem",
    marginLeft: "2rem",
    marginRight: "2rem"
  },
  epNum: {
    fontSize: "2.5rem",
    fontWeight: 800,
    marginLeft: "2rem",
    marginRight: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    fontWeight: 600,
    textAlign: 'left',
    marginTop: '1rem',
    marginBottom: '.5rem'
  },

  summary: {
    textAlign: 'left',
    color: '#62727b',
    maxWidth: '75%',
    marginBottom: '1rem',
  },

  pubDate: {
    color: '#62727b',
    marginBottom: '.5rem',
    marginRight: '4rem'
  },

  duration: {
    color: '#62727b',
    marginBottom: '.5rem'
  }
});

const Episode = props => {
  //convert date/time to just date
  function onlyDate(pubDate) {
    let date = new Date(pubDate);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let dateString =
      months[date.getMonth()] +
      " " +
      date.getDate() +
      ", " +
      date.getFullYear();
    return dateString;
  }

  //convert seconds to minutes and add minute text string
  function secToMin(seconds) {
    return Math.floor(seconds / 60) + " min";
  }

  const classes = useStyles();

  return (
    // <Card>{data.title}</Card>
      <Card className={classes.card}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" direction="row">
          <Typography
              className={classes.epNum}
              color="primary"
              justifyContent="center"
            >
              {props.episodeNum}
            </Typography>
            <Box>
            <Box display="flex" flexDirection="column">
              <Typography
                className={classes.title}
                variant="h5"
                color="secondary"
              >
                {props.title}
              </Typography>
              <Typography
                className={classes.summary}
                variant="body1"
                color="secondary"
              >
                {props.summary}
              </Typography>
          </Box>
            
              <Box display="flex" justifyContent="left">
                <Typography
                  gutterBottom
                  className={classes.pubDate}
                  variant="caption"
                  display="inline"
                  color="secondary"
                >
                  {onlyDate(props.pubDate)}
                </Typography>
                <Typography
                  className={classes.duration}
                  variant="caption"
                  display="inline"
                  color="secondary"
                >
                  {secToMin(props.duration)}
                </Typography>
            </Box>
            </Box>

          </Box>
          <Box display="flex" justifyContent="flex-end">
          <CardActions>
            <IconButton className={classes.arrowButton}>
              <Link to={{ pathname: "/episode", state: { data: props } }}>
                <ArrowForwardIosIcon color="secondary" />
              </Link>
            </IconButton>
          </CardActions>
        </Box>
        </Box>
      </Card>
  );
};

export default Episode;
