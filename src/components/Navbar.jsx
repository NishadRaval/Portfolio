import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';
import '../styles/Navbar.css';

const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Work", href: "#projects" },
    { title: "Contact", href: "#contact" }
];

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="navbar-wrapper">
            <motion.nav
                className="navbar-capsule"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                initial={{ width: 120, height: 50 }}
                animate={{
                    width: isHovered ? 450 : 120,
                    height: 50
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <div className="navbar-content">
                    <div className="navbar-brand">
                        <span>NR</span>
                    </div>

                    <div className="navbar-links">
                        <AnimatePresence>
                            {isHovered && navLinks.map((link, i) => (
                                <motion.a
                                    key={link.title}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.lenis?.scrollTo(link.href);
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Magnetic>
                                        <span className="nav-link-text">{link.title}</span>
                                    </Magnetic>
                                </motion.a>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="navbar-hint">
                        <motion.div
                            animate={{
                                opacity: isHovered ? 0 : 1,
                                rotate: isHovered ? 90 : 0
                            }}
                            style={{ position: 'absolute' }}
                        >
                            <Menu size={20} />
                        </motion.div>

                        <motion.div
                            animate={{
                                opacity: isHovered ? 1 : 0,
                                rotate: isHovered ? 0 : -90
                            }}
                        >
                            <X size={20} />
                        </motion.div>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
};

export default Navbar;
