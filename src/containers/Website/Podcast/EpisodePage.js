import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  grid: {
    height: "100vh",
    marginTop: "8rem"
    // marginLeft: ".5rem",
    // marginRight: ".5rem"
  },
  epNum: {
    fontSize: "6rem",
    fontWeight: 800,
    // marginTop: "4rem",
    marginBottom: ".5rem"
  },
  title: {
    // marginBottom: ".25rem"
    textAlign: "left",
    // maxWidth:"80%"
    maxWidth: "450px",
    ["@media (max-width:600px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "300px"
    }
  },
  summary: {
    marginTop: ".5rem",
    maxWidth: "450px",
    textAlign: "left",
    marginBottom: "1rem",
    ["@media (max-width:600px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "300px"
    }
  },
  iframe: {
    // position: "relative",
    // paddingBottom: "56.25%" /* 16:9 */,
    // paddingTop: 25,
    // height: 0
    // margin: "2rem"
    height: "auto",
    width: "450px",
    ["@media (max-width:600px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "300px"
    }
  }
};

class EpisodePage extends React.Component {
  state = {
    data: null
  };

  render() {
    const { classes } = this.props;
    //Splice audioLink to be embedded media player
    function insertStr(linkOld) {
      let linkNew = linkOld.slice(0, 33) + "embed/" + linkOld.slice(33);
      return linkNew;
    }

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
      return Math.floor(seconds / 60) + " minutes";
    }

    //strip HTML tags
    function stripHtmlTags(str) {
      if (str === null || str === "") return false;
      else str = str.toString();
      return str.replace(/<[^>]*>/g, "");
    }

    const {
      title,
      episodeNum,
      pubDate,
      duration,
      summary,
      audioLink
    } = this.props.location.state.data;
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item xs>
            <Typography className={classes.epNum} variant="h1" color="primary">
              Ep. {episodeNum}
            </Typography>
            <Typography
              className={classes.title}
              variant="h2"
              color="secondary"
            >
              {title}
            </Typography>
            <Box display="flex" justifyContent="flex-start">
              <Box mr={10}>
                <Typography
                  // className={classes.title}
                  display="inline"
                  variant="caption"
                  color="secondary"
                >
                  {onlyDate(pubDate)}
                </Typography>
              </Box>
              <Box ml={5}>
                <Typography
                  // className={classes.title}
                  display="inline"
                  variant="caption"
                  color="secondary"
                >
                  {secToMin(duration)}
                </Typography>
              </Box>
            </Box>

            <Typography
              className={classes.summary}
              variant="body1"
              color="secondary"
            >
              {stripHtmlTags(summary)}
            </Typography>
            <iframe
              className={classes.iframe}
              title="episode media"
              src={insertStr(audioLink)}
              // height="auto"
              // width="450px"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </Grid>
        </Grid>
    );
  }
}

EpisodePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EpisodePage);

// export default EpisodePage;
