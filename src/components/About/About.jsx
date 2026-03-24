import React from 'react';
import BlurReveal from '../BlurReveal/BlurReveal';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        
        {/* Massive Typographic Biography */}
        <div className={styles.bioSection}>
          <BlurReveal delay={0.1}>
            <p className={styles.subLabel}>Who I Am</p>
          </BlurReveal>
          
          <div className={styles.bioText}>
            <BlurReveal delay={0.2}>
              <h3 className={styles.bioHeadline}>
                I am an independent developer specializing in complex scalable architectures, premium user interfaces, and robust integrations.
              </h3>
            </BlurReveal>
            <BlurReveal delay={0.3}>
              <p className={styles.bioParagraph}>
                Whether it's a minimalist portfolio for an agency, a completely customized e-commerce backend, or a deep AI-integrated application, I build digital products that refuse to look ordinary. I work closely with select clients globally to ensure their digital presence directly translates to authority and highly elevated conversion rates.
              </p>
            </BlurReveal>
          </div>
        </div>

        {/* 4-Grid Architectural Services Block */}
        <div className={styles.servicesSection}>
          <BlurReveal delay={0.4}>
            <p className={styles.subLabel}>My Specialized Services</p>
          </BlurReveal>
          
          <div className={styles.servicesGrid}>
            
            <BlurReveal delay={0.5}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceTop}>
                  <span className={styles.serviceNumber}>01</span>
                </div>
                <h4 className={styles.serviceTitle}>Web Development</h4>
                <p className={styles.serviceDesc}>Architecting and deploying highly scalable, SEO-optimized web applications with sophisticated layouts and ultra-fast performance.</p>
              </div>
            </BlurReveal>

            <BlurReveal delay={0.6}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceTop}>
                  <span className={styles.serviceNumber}>02</span>
                </div>
                <h4 className={styles.serviceTitle}>App Development</h4>
                <p className={styles.serviceDesc}>Engineering premium, cross-platform mobile experiences for iOS and Android with strict attention to fluid micro-interactions and high response rates.</p>
              </div>
            </BlurReveal>

            <BlurReveal delay={0.7}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceTop}>
                  <span className={styles.serviceNumber}>03</span>
                </div>
                <h4 className={styles.serviceTitle}>Website Transformation</h4>
                <p className={styles.serviceDesc}>Taking outdated, underperforming websites and completely rebuilding them into modern, high-converting Awwwards-tier digital experiences.</p>
              </div>
            </BlurReveal>

            <BlurReveal delay={0.8}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceTop}>
                  <span className={styles.serviceNumber}>04</span>
                </div>
                <h4 className={styles.serviceTitle}>Social Media Marketing</h4>
                <p className={styles.serviceDesc}>Executing data-driven Meta Ads and digital marketing campaigns designed strictly to maximize audience retention, prestige, and ROI.</p>
              </div>
            </BlurReveal>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
