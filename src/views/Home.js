import React from 'react';
import './Home.css';

const home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img className="bannerImage"src={require("./images/nyc-skyline.jpg")} alt="NYC Skyline"/>
                <div className="bannerText">
                    <h2>Quit your day job and explore tech alternatives with me.</h2>
                    <button>Listen up!</button>
                </div>
            </div>
        </div>
    )
};

export default home;