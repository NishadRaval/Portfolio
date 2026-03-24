import React from 'react';
import BlurReveal from '../BlurReveal/BlurReveal';
import styles from './Skills.module.css';

const tools = [
  'Python',
  'TypeScript', 
  'React / Next.js', 
  'Node.js', 
  'PostgreSQL / Prisma',
  'API / OpenAI / LangChain',
  'Firebase / Supabase',
  'App Dev / Android',
  'Three.js / WebGL'
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <BlurReveal delay={0.1}>
            <p className={styles.subLabel}>Core Competencies</p>
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <h2 className={styles.headline}>The Technology Stack.</h2>
          </BlurReveal>
        </div>
        
        <div className={styles.pillContainer}>
          {tools.map((tool, index) => (
            <BlurReveal key={index} delay={index * 0.05}>
              <div className={styles.skillPill}>
                <span>{tool}</span>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
