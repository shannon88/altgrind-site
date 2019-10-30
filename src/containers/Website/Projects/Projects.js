import React from 'react';
import styles from './Projects.module.css';
import Typography from "@material-ui/core/Typography";

const Projects = () => {
    return (
        <div className={styles.projects}>
            <Typography className={styles.heading} variant="h2" color="primary">Projects coming soon!</Typography>
        </div>
    )
};

export default Projects;