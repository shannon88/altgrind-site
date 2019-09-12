import React from 'react';
import styles from './Podcast.module.css';
import CardMedia from '@material-ui/core/CardMedia';

const Podcast = () => {
    return (
        <div className={styles.podcast}>
            <h1>Podcast coming soon!</h1>
            <CardMedia/>
        </div>
    )
};

export default Podcast;