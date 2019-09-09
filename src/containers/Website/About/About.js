import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <h1>Hi, I'm Shannon O'Hehir. A New York City-based podcaster, tech enthusiast and side hustler.</h1>
            <img src={require("./images/about-me-500x500.jpg")} alt="Shannon"/>
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