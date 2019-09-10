import React from 'react';
import styles from './Contact.module.css';
import SocialFollow from '../../../components/SocialFollow'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <h1>Want to collaborate? Hire me? Have questions?</h1>
            <SocialFollow className={styles.social}/>
        </div>
    )
};

export default Contact;