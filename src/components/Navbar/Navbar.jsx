import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext/ThemeContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <nav className={styles.navbarPill}>
        <div className={styles.logo}>Nishad.</div>
        <div className={styles.desktopLinks}>
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact" className={styles.contactBtn}>Contact</a>
          <button onClick={toggleTheme} className={styles.themeToggleBtn} aria-label="Toggle Dark Mode">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        
        <div className={styles.mobileControls}>
          <button onClick={toggleTheme} className={styles.themeToggleBtnMobile} aria-label="Toggle Dark Mode">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={styles.mobileMenuBtn} onClick={() => setIsOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.mobileOverlay}
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={styles.overlayHeader}>
              <div className={styles.logo}>Nishad.</div>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <div className={styles.mobileLinks}>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              <a href="#projects" onClick={() => setIsOpen(false)}>Work</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
