import React from 'react';
import styles from './Contact.module.css';
import SocialFollow from '../../../components/SocialFollow'
import Typography from "@material-ui/core/Typography";

const Contact = () => {
    return (
        <div className={styles.contact}>
            <Typography variant="h2" color="primary">Want to collaborate? Hire me? Have questions?</Typography>
            <SocialFollow className={styles.social}/>
        </div>
    )
};

export default Contact;