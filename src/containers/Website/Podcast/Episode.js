import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    minWidth: 300, //change to 250 jk, change to percentage not px 
    maxWidth: 600,
    // width: 600, 
    marginBottom: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  epNum: {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginLeft: '2rem',
    marginRight: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    // fontSize: '1.5rem',
    fontWeight: 600,
    textAlign: 'left',
    marginTop: '1rem',
    marginBottom: '.5rem'
  },

  summary: {
    textAlign: 'left',
    // fontWeight: 600,
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


// const Episode = ({ data }) => {
const Episode = (props) => {

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
      date.getFullYear()
    return dateString;
  }

  //convert seconds to minutes and add minute text string
  function secToMin(seconds) {
    return Math.floor(seconds / 60) + " minutes";
  }

  //strip HTML tags
  function stripHtmlTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/<[^>]*>/g, "");
  }

  const classes = useStyles();

  return (
      // <Card>{data.title}</Card>
      <div>  
        <Card className={classes.card}>
        <Box display="flex" justifyContent="space-between">
          <Typography className={classes.epNum} variant="h2" color="primary" justifyContent="center">
        {props.episodeNum}
        </Typography>
        <Box display="flex" flexDirection="column" justifyContent="left">
        <Typography className={classes.title} variant="h5" color="secondary">
        {props.title}  
        </Typography>
        <Typography className={classes.summary} variant="body1" color="secondary">
        {stripHtmlTags(props.summary)}
        </Typography>
        <Box display="flex" justifyContent="left">
        <Typography gutterBottom className={classes.pubDate} variant="caption" display="inline" color="secondary">
        {onlyDate(props.pubDate)}
        </Typography>
        <Typography className={classes.duration} variant="caption" display="inline" color="secondary">
        {secToMin(props.duration)}
        </Typography>
        </Box>
        {/* <Typography className={classes.pos} color="secondaryLight">
         {props.audio}
        </Typography> */}
        </Box>
  
      <CardActions>
        <IconButton className={classes.arrowButton}><Link to={{pathname: "/episode", state: {data: props}}}><ArrowForwardIosIcon color="secondary"/></Link></IconButton>
        {/* get link to go to unique url for each episode then figure out how to get media player to work */}
      </CardActions>
    </Box>
    </Card>
      </div>
      
  )};

export default Episode;
