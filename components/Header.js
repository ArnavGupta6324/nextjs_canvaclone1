// components/Header.js
import React from 'react';
import styles from '../styles/Header.module.css'; // Import CSS module

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Techible</div>
      <nav className={styles.nav}>
        <a href="#learn">Learn</a>
        <a href="#projects">Projects</a>
        <a href="#mentorship">Mentorship</a>
        <a href="#internships">Internships</a>
        <a href="#careers">Careers</a>
      </nav>
      <div className={styles.userIcon}>👤</div> {/* Corrected the class name */}
    </header>
  );
}

export default Header;
