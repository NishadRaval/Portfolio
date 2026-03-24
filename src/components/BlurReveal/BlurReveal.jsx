import React from 'react';
import { motion } from 'framer-motion';

const BlurReveal = ({ children, delay = 0, style, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(20px)', y: 30 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurReveal;
