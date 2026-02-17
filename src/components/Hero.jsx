import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ThreeScene from './ThreeScene';
import Magnetic from './Magnetic';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Creating Digital <br />
                    <span className="outline-text">Masterpieces</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-subtitle"
                >
                    Nishad Raval
                    <br />
                    Full-Stack Developer & AI Enthusiast
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="scroll-indicator"
                >
                    <span>Scroll</span>
                    <Magnetic>
                        <div className="scroll-circle">
                            <ArrowDown size={32} />
                        </div>
                    </Magnetic>
                </motion.div>
            </div>

            <div className="hero-background">
                <ThreeScene />
            </div>
        </section>
    );
};

export default Hero;
