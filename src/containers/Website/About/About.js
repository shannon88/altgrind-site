import React from 'react';
import styles from './About.module.css';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import History from "../History";

// History.push('/about');

const useStyles = makeStyles({
    hi: {
        marginTop: "2rem",
        lineHeight: '2.5rem',
        marginBottom: '1.5rem',
        width: '75%',
    }
  });

const About = () => {
    const classes = useStyles();
    return (
        <div className={styles.about}>
            <Typography className={classes.hi} variant="h2" color="primary">Hi, I'm Shannon O'Hehir. A New York City-based software developer, tech enthusiast and podcaster.</Typography>
            <img src={require("./images/about-me-new.jpg")} alt="Shannon"/>
            <p>I used to work a design job at a respectable firm in New York City. 
                I hustled to get work in the industry I went to college for and didn’t question the 
                standard 9-5 jobs most of us get after graduating. Only a few weeks into working, I
                 realized just how structured and restricted my time had become and frankly wasn’t happy about it. 
                 I started dreading Mondays, counting down every hour at the office and ultimately decided it was 
                 time for a change.<br/><br/>As a tech and coding enthusiast, I’m currently exploring alternatives to standard 
                 white collar work. I began my tech journey by teaching myself javascript, building this website and 
                 starting the altgrind podcast. Give a listen and join me as I try to find work that’s actually worth doing! 
                 Keep grinding.</p>
        </div>
    )
};

export default About;