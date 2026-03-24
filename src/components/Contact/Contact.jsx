import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import BlurReveal from '../BlurReveal/BlurReveal';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.top}>
          <BlurReveal delay={0.1}><p className={styles.subLabel}>Start a Project</p></BlurReveal>
          <BlurReveal delay={0.2}><h2 className={styles.headline}>Let's craft<br />the future.</h2></BlurReveal>

          <div className={styles.contactDetails}>
            <BlurReveal delay={0.3}>
              <div className={styles.contactItem}>
                <p className={styles.itemLabel}>Send an Email</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nishadsraval@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.bigLink}>
                  nishadsraval@gmail.com <ArrowUpRight className={styles.arrowIcon} />
                </a>
              </div>
            </BlurReveal>
            <BlurReveal delay={0.4}>
              <div className={styles.contactItem}>
                <p className={styles.itemLabel}>Chat on WhatsApp</p>
                <a href="https://wa.me/917203980705" target="_blank" rel="noopener noreferrer" className={styles.bigLink}>
                  +91 7203980705 <ArrowUpRight className={styles.arrowIcon} />
                </a>
              </div>
            </BlurReveal>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.links}>
            <BlurReveal delay={0.5}>
              <a href="https://www.linkedin.com/in/nishadraval/" target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={18} strokeWidth={2} />
              </a>
            </BlurReveal>
            <BlurReveal delay={0.6}>
              <a href="https://github.com/NishadRaval" target="_blank" rel="noopener noreferrer">
                GitHub <ArrowUpRight size={18} strokeWidth={2} />
              </a>
            </BlurReveal>
          </div>
          <div className={styles.info}>
            <BlurReveal delay={0.7}>
              <p>&copy; {new Date().getFullYear()} Nishad Raval. All rights reserved.</p>
            </BlurReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
