import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
                <h1><Link to="/" className={styles.title}>altgrind</Link></h1>
                <nav>    
                    <ul className={styles.navList}>
                        <li><Link to="/about"className={styles.navItem}>about</Link></li>
                        <li><Link to="/podcast" className={styles.navItem}>podcast</Link></li>
                        <li><Link to="/projects" className={styles.navItem}>projects</Link></li>
                        <li><Link to="/contact" className={styles.navItem}>contact</Link></li>
                    </ul>
                </nav>
        </header> 
    )
};

export default Header;