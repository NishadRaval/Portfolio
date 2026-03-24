import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Preloader.module.css';

const words = [
  "Hello", 
  "Nǐ hǎo", 
  "Namaste", 
  "Hola", 
  "Bonjour", 
  "Marhaba", 
  "Zdravstvuyte", 
  "Olá", 
  "Konnichiwa",
  "Guten Tag"
];

const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => {
        onComplete();
      }, 1500); // Pause for 1.5s on the final welcome
      return;
    }

    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1500 : 350); // Slower sequence

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <motion.div 
      className={styles.preloader}
      initial={{ y: "0%", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}
      exit={{ 
        y: "-100%", 
        borderBottomLeftRadius: "60vw",
        borderBottomRightRadius: "60vw",
        transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className={styles.wordContainer}>
        <motion.p
          key={index}
          initial={{ opacity: 0, filter: 'blur(15px)', y: 40 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          exit={{ opacity: 0, filter: 'blur(15px)', y: -40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={styles.word}
        >
          <span className={styles.dot}></span>
          {words[index]}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
