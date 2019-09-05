import React from 'react';
import styles from './Header.module.css'

const header = () => {
    return (
        <header className={styles.header}>
                <h1><a href="/" className={styles.title}>altgrind</a></h1>
                <nav>    
                    <ul className={styles.navList}>
                        <li><a href="../views/about" className={styles.navItem}>about</a></li>
                        <li><a href="../views/podcast" className={styles.navItem}>podcast</a></li>
                        <li><a href="../views/projects" className={styles.navItem}>projects</a></li>
                        <li><a href="../views/contact" className={styles.navItem}>contact</a></li>
                    </ul>
                </nav>
        </header>
    )
};

export default header;