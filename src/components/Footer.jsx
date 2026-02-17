import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import Magnetic from './Magnetic';
import '../styles/Footer.css';

const Footer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-cta">
                        <h3>Have an idea?</h3>
                        <Magnetic>
                            <a href="#contact" className="cta-button">
                                Let's Talk <ArrowUpRight size={32} />
                            </a>
                        </Magnetic>
                    </div>
                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Navigation</h4>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#projects">Work</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="link-column">
                            <h4>Socials</h4>
                            <div className="social-row">
                                <Magnetic><a href="https://github.com/NishadRaval" target="_blank"><Github size={20} /></a></Magnetic>
                                <Magnetic><a href="https://linkedin.com/in/nishadraval" target="_blank"><Linkedin size={20} /></a></Magnetic>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} Nishad Raval</p>
                        <p className="dim">Built with React, Three.js & Passion</p>
                    </div>
                    <div className="footer-time">
                        <p>{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} IST</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
