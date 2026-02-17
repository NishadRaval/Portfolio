import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ResumeButton from './components/ResumeButton';
import Preloader from './components/Preloader';
import './styles/global.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useSmoothScroll();

  useEffect(() => {
    // Wait for preloader animation (approx 2.5s)
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3500);
  }, []);

  return (
    <div className="app-container">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ResumeButton />
    </div>
  );
}

export default App;
