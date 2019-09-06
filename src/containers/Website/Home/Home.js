import React from 'react';
import styles from './Home.module.css';

const home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    <h2>Quit your day job and explore <br/> tech alternatives with me.</h2>
                    <button>Listen up!</button>
                </div>
            </div>
        </div>
    )
};

export default home;