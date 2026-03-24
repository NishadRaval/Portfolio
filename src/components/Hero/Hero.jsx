import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlurReveal from '../BlurReveal/BlurReveal';
import styles from './Hero.module.css';

const Hero = () => {
  const container = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const orb4Ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    // Hyper-optimized Vanilla JS parallax tracking for the Aura orbs
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xRange = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const yRange = (clientY / window.innerHeight - 0.5) * 2; // -1 to 1
      
      // Deliberately slow, luxurious parallax shifting across 4 separate nodes
      if (orb1Ref.current) orb1Ref.current.style.transform = `translate3d(${xRange * 60}px, ${yRange * 60}px, 0)`;
      if (orb2Ref.current) orb2Ref.current.style.transform = `translate3d(${xRange * -40}px, ${yRange * -40}px, 0)`;
      if (orb3Ref.current) orb3Ref.current.style.transform = `translate3d(${xRange * 30}px, ${yRange * -50}px, 0)`;
      if (orb4Ref.current) orb4Ref.current.style.transform = `translate3d(${xRange * -80}px, ${yRange * 30}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={styles.hero} ref={container}>
      {/* Scattered, beautifully diffused 4-Aura tracking the mouse */}
      <div className={styles.auroraContainer}>
        <div ref={orb1Ref} className={`${styles.orb} ${styles.orb1}`} />
        <div ref={orb2Ref} className={`${styles.orb} ${styles.orb2}`} />
        <div ref={orb3Ref} className={`${styles.orb} ${styles.orb3}`} />
        <div ref={orb4Ref} className={`${styles.orb} ${styles.orb4}`} />
      </div>

      <motion.div 
        className={styles.content}
        style={{ y: textY, opacity }}
      >
        <BlurReveal delay={0.2}>
          <p className={styles.greeting}>Independent Developer</p>
        </BlurReveal>
        
        <BlurReveal delay={0.4}>
          <h1 className={styles.headline}>NISHAD RAVAL</h1>
        </BlurReveal>
        
        <BlurReveal delay={0.6}>
          <p className={styles.subtext}>
            Delivering high-performance web applications, native mobile experiences, and data-driven marketing campaigns.
          </p>
        </BlurReveal>
      </motion.div>
    </section>
  );
};

export default Hero;
