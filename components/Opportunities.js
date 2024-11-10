import React from 'react';
import Head from 'next/head';
import styles from '../styles/Opportunities.module.css'; // Correct import for the CSS module

function Opportunities() {
  const opportunities = [
    {
      title: "Advaita-2024",
      type: "Festival",
      participants: "14,292 Registered",
      daysLeft: "12 Competitions",
      image: "/bussiness.png"
    },
    {
      title: "PhD Sponsorships, Cash Rewards & Internships",
      type: "Online | Free",
      participants: "2,491 Registered",
      daysLeft: "29 days left",
      image: "/phd.png"
    },
    {
      title: "The Ultimate Pitch",
      type: "Online | Free",
      participants: "4,733 Registered",
      daysLeft: "19 days left",
      image: "/ultimate.png"
    },
    {
      title: "Luminous Techno-X",
      type: "Online | Free",
      participants: "55,002 Registered",
      daysLeft: "4 days left",
      image: "/techno.png"
    },
  ];

  return (
    <>
      <Head>
        <title>Opportunities</title>
        <meta name="description" content="Curated opportunities from top organizations." />
      </Head>

      <section className={styles['opportunities-section']}>
        {/* Featured Opportunities */}
        <div className={styles['opportunity-group']}>
          <h2>Featured Opportunities</h2>
          <p>Check out the curated opportunities handpicked for you from top organizations.</p>
          <div className={styles['opportunity-cards']}>
            {opportunities.map((opportunity, index) => (
              <div key={index} className={styles['card']}>
                <img src={opportunity.image} alt={opportunity.title} className={styles['opportunity-image']} />
                <h3>{opportunity.title}</h3>
                <p className={styles['type']}>{opportunity.type}</p>
                <p className={styles['participants']}>{opportunity.participants}</p>
                <p className={styles['days-left']}>{opportunity.daysLeft}</p>
                <button className={styles['register-button']}>Register Now</button>
              </div>
            ))}
          </div>
        </div>

        {/* Project-Based Internships under Faculties */}
        <div className={styles['opportunity-group']}>
          <h2>Project – Based Internships under Faculties</h2>
          <p>Check out the curated opportunities handpicked for you from top organizations.</p>
          <div className={styles['opportunity-cards']}>
            {opportunities.map((opportunity, index) => (
              <div key={index} className={styles['card']}>
                <img src={opportunity.image} alt={opportunity.title} className={styles['opportunity-image']} />
                <h3>{opportunity.title}</h3>
                <p className={styles['type']}>{opportunity.type}</p>
                <p className={styles['participants']}>{opportunity.participants}</p>
                <p className={styles['days-left']}>{opportunity.daysLeft}</p>
                <button className={styles['register-button']}>Register Now</button>
              </div>
            ))}
          </div>
        </div>

        {/* Internships under IIT/IIM & Foreign Faculties */}
        <div className={styles['opportunity-group']}>
          <h2>Internships under IIT/IIM & Foreign Faculties</h2>
          <p>Check out the curated opportunities handpicked for you from top organizations.</p>
          <div className={styles['opportunity-cards']}>
            {opportunities.map((opportunity, index) => (
              <div key={index} className={styles['card']}>
                <img src={opportunity.image} alt={opportunity.title} className={styles['opportunity-image']} />
                <h3>{opportunity.title}</h3>
                <p className={styles['type']}>{opportunity.type}</p>
                <p className={styles['participants']}>{opportunity.participants}</p>
                <p className={styles['days-left']}>{opportunity.daysLeft}</p>
                <button className={styles['register-button']}>Register Now</button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Internships under IIT/IIM & Foreign Faculties */}
        <div className={styles['opportunity-group']}>
          <h2>Additional Internships under IIT/IIM & Foreign Faculties</h2>
          <p>Check out the curated opportunities handpicked for you from top organizations.</p>
          <div className={styles['opportunity-cards']}>
            {opportunities.map((opportunity, index) => (
              <div key={index} className={styles['card']}>
                <img src={opportunity.image} alt={opportunity.title} className={styles['opportunity-image']} />
                <h3>{opportunity.title}</h3>
                <p className={styles['type']}>{opportunity.type}</p>
                <p className={styles['participants']}>{opportunity.participants}</p>
                <p className={styles['days-left']}>{opportunity.daysLeft}</p>
                <button className={styles['register-button']}>Register Now</button>
              </div>
            ))}
          </div>
        </div>

        {/* Learn a New Skill Section */}
        <div className={styles['opportunity-group']}>
          <h2>Learn a new Skill and be job-ready</h2>
          <p>Start or switch your career by upskilling with job-ready skills.</p>
          <div className={styles['opportunity-cards']}>
            <div className={styles['card']}>
              <img src="/aiml.png" alt="Learn AI/ML" className={styles['opportunity-image']} />
              <h3>Learn AI/ML</h3>
              <p className={styles['type']}>13k Lessons</p>
              <button className={styles['view-course-button']}>View Course</button>
            </div>
            <div className={styles['card']}>
              <img src="/cs.png" alt="Cyber Security" className={styles['opportunity-image']} />
              <h3>Cyber Security</h3>
              <p className={styles['type']}>17k Lessons</p>
              <button className={styles['view-course-button']}>View Course</button>
            </div>
            <div className={styles['card']}>
              <img src="/da.png" alt="Data Analytics" className={styles['opportunity-image']} />
              <h3>Data Analytics</h3>
              <p className={styles['type']}>10k Lessons</p>
              <button className={styles['view-course-button']}>View Course</button>
            </div>
            <div className={styles['card']}>
              <img src="/aws.png" alt="AWS" className={styles['opportunity-image']} />
              <h3>AWS</h3>
              <p className={styles['type']}>6k Lessons</p>
              <button className={styles['view-course-button']}>View Course</button>
            </div>
          </div>
        </div>

        {/* Take Guidance from Top Mentors Section */}
        <div className={styles['opportunity-group']}>
          <h2>Take Guidance from Top Mentors</h2>
          <p>In search of excellence? Explore the highest-rated mentors as recognized by the learner community.</p>
          <div className={styles['opportunity-cards']}>
            <div className={`${styles['card']} ${styles['mentor-card']}`}>
              <img src="/sk.png" alt="Shubham Kumar" className={styles['opportunity-image']} />
              <h3>Shubham Kumar</h3>
              <p className={styles['type']}>Top Unstoppable Mentor 2024</p>
              <button className={styles['view-profile-button']}>View Profile</button>
            </div>
            <div className={`${styles['card']} ${styles['mentor-card']}`}>
              <img src="/pg.png" alt="Pooja Gera" className={styles['opportunity-image']} />
              <h3>Pooja Gera</h3>
              <p className={styles['type']}>Software Engineer</p>
              <button className={styles['view-profile-button']}>View Profile</button>
            </div>
            <div className={`${styles['card']} ${styles['mentor-card']}`}>
              <img src="/vs.png" alt="V S Sasi Kumar" className={styles['opportunity-image']} />
              <h3>V S Sasi Kumar</h3>
              <p className={styles['type']}>Data Scientist at Cognizant</p>
              <button className={styles['view-profile-button']}>View Profile</button>
            </div>
            <div className={`${styles['card']} ${styles['mentor-card']}`}>
              <img src="/sg.png" alt="Shivam Garg" className={styles['opportunity-image']} />
              <h3>Shivam Garg</h3>
              <p className={styles['type']}>JP Morgan Chase</p>
              <button className={styles['view-profile-button']}>View Profile</button>
            </div>
          </div>
        </div>

        <img src="/cv-evaluation.png" alt="CV Evaluation" className={styles['cv-evaluation-image']} />

        {/* Community Join Section */}
        <div className={styles['community-join']}>
          <img src="/react.png" alt="Avatar Group" className={styles['avatar-group']} />
          <h2>You are not alone in this journey</h2>
          <p>Join a community of 700k+ learners and mentors and grow together.</p>
          <button className={styles['join-community-button']}>Join Community</button>
        </div>
      </section>
    </>
  );
}

export default Opportunities;
