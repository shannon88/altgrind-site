import React from "react";
import Subscribe from "./Subscribe";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import styles from './PodcastIntro.module.css'

const useStyles = makeStyles({
  heading: {
    align: 'left',
    marginBottom: '1.5rem',
    marginTop: '2rem',
  },
  card: {
    maxWidth: 300,
    height: "auto",
    justifyContent:"center",
  },
  media: {
    height: 300
  }
});

const PodcastIntro = () => {
  const classes = useStyles();
  return (
    <div className={styles.intro}>
      <Typography variant="h1" className={classes.heading} color="primary">
        weekly episodes!
      </Typography>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("./images/altgrind-album.jpg")}
          //   image="/static/images/cards/contemplative-reptile.jpg"
          title="altgrind album art"
        />
      </Card>
      {/* <img
        src={require("./images/altgrind-album.jpg")}
        alt="altgrind album art"
      /> */}
      <p className={styles.introP}>
        Explore tech side hustles with Shannon O’Hehir as she takes you on a
        journey from quitting her fancy design job in New York City to who knows
        what’s next. This is a real-time story complete with anecdotal advice, small
        victories and self-deprecation.
      </p>
      <Subscribe />
    </div>
  );
};

export default PodcastIntro;
