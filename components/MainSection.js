import React from 'react';
import styles from '../styles/Mainsection.module.css'; // Correct import for the CSS module

function MainSection() {
  return (
    <section className={styles['main-section']}>
      <div className={styles['main-content']}>
        <h1>Learn A New Skill</h1>
        <p>
          Unlock your potential and master a new skill with our expert-led courses. Whether you’re looking to enhance your career or explore new passions, we provide the tools and guidance to help you succeed. Start learning today!
        </p>
        <button className={styles['start-button']}>START NOW &gt;</button>
      </div>
      <img src="/main.png" alt="Learn AI/ML" className={styles['image-placeholder']} />
    </section>
  );
}

export default MainSection;
