import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal';
import Globe from './Globe';
import '../styles/About.css';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="about" className="about" ref={containerRef}>
            <div className="about-container">
                <motion.div
                    className="about-image-wrapper"
                    style={{ y }}
                >
                    <Globe />
                </motion.div>

                <div className="about-content">
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Beyond the <span className="highlight">Code</span>
                    </motion.h2>

                    <Reveal>
                        <p>
                            I'm Nishad Raval, a full-stack developer passionate about building practical, scalable, and user-focused digital solutions. I enjoy turning ideas into real-world applications — from AI-powered tools to full-stack web platforms.
                        </p>
                    </Reveal>

                    <Reveal>
                        <p>
                            My work blends structured backend engineering with clean, responsive frontend design. I focus on building systems that are not just functional, but thoughtfully designed and reliable.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p>
                            Currently, I’m expanding my expertise in full-stack development and AI-driven applications, aiming to create impactful software that solves real problems.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;
