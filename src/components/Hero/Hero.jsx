import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import BlurReveal from '../BlurReveal/BlurReveal';
import styles from './Hero.module.css';

const Hero = () => {
  const container = useRef(null);
  
  // Parallax for scrolling
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse Parallax for the right side visual
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className={styles.hero} ref={container}>
      <div className={styles.container}>
        {/* LEFT COLUMN: Strict, clean typography */}
        <motion.div 
          className={styles.leftColumn}
          style={{ y: textY, opacity }}
        >
          <BlurReveal delay={0.1}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot}></span>
              Open for opportunities
            </div>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <h1 className={styles.headline}>
              Nishad<br/>Raval.
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <h2 className={styles.role}>
              Full-Stack Engineer
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.4}>
            <p className={styles.subtext}>
              I build robust digital products and scalable architectures that refuse to be ordinary. Specializing in high-performance web and mobile experiences.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.5}>
            <div className={styles.ctaGroup}>
              <a href="#projects" className={styles.primaryCta}>
                View Projects <ArrowRight size={20} />
              </a>
              <a href="#contact" className={styles.secondaryCta}>
                Let's Talk
              </a>
            </div>
          </BlurReveal>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Abstract Visual */}
        <div className={styles.rightColumn}>
          <motion.div 
            className={styles.visualContainer}
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* The main abstract glass card */}
            <div className={styles.glassCard}>
              <div className={styles.cardHeader}>
                <Terminal size={24} className={styles.cardIcon} />
                <span className={styles.cardTitle}>system.core</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.codeLine}><span className={styles.codeKeyword}>import</span> {'{ Creativity, Logic }'} <span className={styles.codeKeyword}>from</span> 'mind';</div>
                <div className={styles.codeLine}><span className={styles.codeKeyword}>const</span> build = <span className={styles.codeFunction}>new</span> <span className={styles.codeClass}>Experience</span>();</div>
                <div className={styles.codeLine}>build.<span className={styles.codeFunction}>deploy</span>();</div>
              </div>
            </div>
            
            {/* Decorative background blurs behind the card */}
            <div className={styles.blob} style={{ background: 'var(--foreground)' }}></div>
            <div className={styles.blob2} style={{ background: 'var(--foreground-muted)' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
