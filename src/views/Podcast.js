import React from 'react';
import './Podcast.css';

const podcast = () => {
    return (
        <div className="home">
            <div className="banner">
                <img className="banner__image"src={require("./images/nyc-skyline.jpg")} alt="NYC Skyline"/>
                <div className="banner__text">
                    <h2>Quit your day job and explore tech alternatives with Shannon.</h2>
                    <button>Listen up!</button>
                </div>
            </div>
        </div>
    )
};

export default home;