import React from 'react';
import BlurReveal from '../BlurReveal/BlurReveal';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <section className={styles.resumeSection} id="resume">
      <div className={styles.container}>
        <div className={styles.header}>
          <BlurReveal delay={0.1}><p className={styles.subLabel}>Background</p></BlurReveal>
          <BlurReveal delay={0.2}><h2 className={styles.mainLabel}>Education & Experience</h2></BlurReveal>
        </div>

        <div className={styles.timeline}>
          <BlurReveal delay={0.3}>
            <div className={styles.timelineItem}>
              <div className={styles.timeMeta}>
                <h3>B.Sc. Information Technology</h3>
                <p className={styles.dateLabel}>Currently Pursuing</p>
              </div>
              <div className={styles.timeContent}>
                <h4>P. P. Savani University</h4>
                <span className={styles.location}>Surat, Gujarat</span>
                <p className={styles.desc}>
                  Focusing on advanced software engineering, robust system architecture, and cutting-edge web technologies to deliver highly scalable full-stack applications.
                </p>
              </div>
            </div>
          </BlurReveal>
          
          <BlurReveal delay={0.4}>
            <div className={styles.timelineItem}>
              <div className={styles.timeMeta}>
                <h3>Node.js Intern</h3>
                <p className={styles.dateLabel}>11/05/2026 – 03/06/2026</p>
              </div>
              <div className={styles.timeContent}>
                <h4>Shv Infotech</h4>
                <span className={styles.location}>Surat, Gujarat</span>
                <p className={styles.desc}>
                  Learned practical backend development using Node.js, focusing on API development and server-side concepts. Explored database integration and request-response handling. Participated in debugging and testing, built full-stack concepts, and improved problem-solving skills through a real development workflow.
                </p>
              </div>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.5}>
            <div className={styles.timelineItem}>
              <div className={styles.timeMeta}>
                <h3>Independent Developer</h3>
                <p className={styles.dateLabel}>Present</p>
              </div>
              <div className={styles.timeContent}>
                <h4>Freelance Web & App Engineering</h4>
                <span className={styles.location}>Remote</span>
                <p className={styles.desc}>
                  Partnering directly with local businesses and digital agencies to architect, design, and deploy high-performance web applications and native mobile experiences.
                </p>
              </div>
            </div>
          </BlurReveal>
        </div>

        <BlurReveal delay={0.6}>
          <div className={styles.downloadWrapper}>
            {/* INSTRUCTION: Place your actual resume PDF in the 'public' folder and name it 'resume.pdf' */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
              Download Full Resume
            </a>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
};

export default Resume;
