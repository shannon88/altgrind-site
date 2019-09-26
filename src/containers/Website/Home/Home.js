import React from 'react';
import styles from './Home.module.css';
/*import Button from 'react-bootstrap/Button';
import Button from '../main.css'*/
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.home}>   
                <img src={require("./images/newyorkcity-skyline.jpg")} alt="NYC Skyline"/>       
                <div className={styles.bannerText}>
                    <h1>Quit your day job and explore tech alternatives with me.</h1>
                    {/*<div className={styles.bootstrapIso}><Button variant="outline-dark">Dark</Button></div>*/}
                    <Button variant="contained" color="primary"><Link to="/podcast" className={styles.button}>podcast</Link></Button>
            </div>
        </div> 
    )
};

export default Home;