import React from "react";
import styles from "./About.module.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  hi: {
    // lineHeight: "2rem",
    marginTop: "2rem",
    marginBottom: "1.5rem",
  },
  intro: {
    lineHeight: "2.25rem",
    marginBottom: "1.5rem",
    width: "75%",
    textAlign: "center"
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <div className={styles.about}>
      <Typography className={classes.hi} variant="h1" color="primary">
        Hello!
      </Typography>
      <Typography className={classes.intro} variant="h2" color="primary">
     I'm Shannon O'Hehir. A New York City-based software developer, tech
        enthusiast and podcaster.
      </Typography>
      <img src={require("./images/about-me-new.jpg")} alt="Shannon" />
      <p>
      I used to work a design job at a respectable firm in New York City. 
      I worked hard to become a designer and didn’t question traditional 9-5 
      jobs until I started getting bored and frustrated at work. As the days 
      dragged on, my daily tasks grew more monotonous. Since my workplace wouldn’t 
      challenge me, I started challenging myself by learning to code in my freetime.
        <br />
        <br />
      As a tech and coding enthusiast, I’m currently exploring alternatives to standard 
      white collar work. I began my tech journey by teaching myself javascript, building 
      this website and starting the altgrind podcast. Give a listen and join me as I try 
      to find work that’s actually worth doing! Keep grinding.
      </p>
    </div>
  );
};

export default About;
