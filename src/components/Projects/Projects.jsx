import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Github } from 'lucide-react';
import BlurReveal from '../BlurReveal/BlurReveal';
import styles from './Projects.module.css';

/* ==========================================
   EDIT YOUR PROJECTS HERE
   Add, remove, or modify objects in this array.
   ========================================== */
export const projectsData = [
  {
    id: 1,
    title: 'Chachabhatija Food Club Website',
    type: 'Client Project / 2025',
    shortDescription: 'A responsive restaurant website developed for a real local business to establish its online presence.',
    fullDescription: 'Designed and developed a fully responsive website for a restaurant to showcase its menu, brand, and contact information. Focused on clean UI, fast performance, and mobile-first design to ensure accessibility across all devices. The project was deployed in production and is actively used by the business to attract and inform customers.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    liveLink: 'https://chachabhatija.vercel.app',
    github: 'https://github.com/NishadRaval/chachabhatija-foodclub'
  },
  {
    id: 2,
    title: 'CLYN – Full-Stack E-commerce Platform',
    type: 'Full-Stack Project / 2025',
    shortDescription: 'A complete MERN-based e-commerce web application with authentication, admin panel, and order management.',
    fullDescription: 'Developed a full-stack e-commerce platform using the MERN stack, featuring secure user authentication, product management, and order processing. Implemented role-based access control for admin operations, allowing product CRUD and order status management. Designed a responsive frontend with a smooth user experience, including cart functionality, checkout flow, and order history. The application is deployed with a separate frontend and backend, simulating a real-world production architecture.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Vercel', 'Render'],
    liveLink: 'https://clynshop.vercel.app',
    github: 'https://github.com/NishadRaval/clyn'
  },
  {
    id: 3,
    title: 'AI Stock & Crypto Analyzer',
    type: 'AI / Data Project / 2025',
    shortDescription: 'An AI-powered financial dashboard that analyzes stocks and cryptocurrencies using machine learning and real-time data.',
    fullDescription: 'Developed a full-stack financial analysis dashboard using Python and Streamlit that provides insights into stocks and cryptocurrencies across global markets. Implemented a machine learning model (Random Forest) for short-term price prediction using technical indicators, along with a rule-based system for long-term investment recommendations. Integrated real-time financial data and news APIs to deliver a comprehensive and interactive analysis experience through a clean, responsive UI.',
    tech: ['Python', 'Streamlit', 'scikit-learn', 'pandas', 'NumPy', 'yfinance', 'Finnhub API', 'Plotly'],
    liveLink: 'https://aistock-analyzer.streamlit.app/',
    github: 'https://github.com/NishadRaval/aistock'
  }
];
/* ========================================== */

const ProjectCard = ({ project, index, onClick }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      className={styles.projectWrapper}
      ref={ref}
      style={{ scale, opacity }}
      onClick={() => onClick(project)}
    >
      <div className={styles.projectInfo}>
        <div className={styles.projectHeader}>
          <BlurReveal delay={0.1}><h2>{project.title}</h2></BlurReveal>
          <BlurReveal delay={0.2}>
            <button className={styles.projectLink} onClick={(e) => { e.stopPropagation(); onClick(project); }}>
              <ArrowUpRight size={36} strokeWidth={1.5} />
            </button>
          </BlurReveal>
        </div>
        <BlurReveal delay={0.3}><p className={styles.projectType}>{project.type}</p></BlurReveal>
        <BlurReveal delay={0.4}><p className={styles.projectDesc}>{project.shortDescription}</p></BlurReveal>
        <div className={styles.techStack}>
          {project.tech.map((t, i) => (
            <BlurReveal key={i} delay={0.5 + (i * 0.1)}>
              <span className={styles.techPill}>{t}</span>
            </BlurReveal>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <>
      <section className={styles.projectsSection} id="projects">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <BlurReveal delay={0.1}><p className={styles.subLabel}>Selected Works</p></BlurReveal>
            <BlurReveal delay={0.2}><h2 className={styles.mainLabel}>Featured Projects</h2></BlurReveal>
          </div>

          <div className={styles.projectList}>
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ y: "100vh", borderRadius: "100%" }}
              animate={{ y: "5vh", borderRadius: "40px" }}
              exit={{ y: "100vh", borderRadius: "100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
            >
              <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                <X size={32} />
              </button>

              <div className={styles.modalInner}>
                <p className={styles.modalType}>{selectedProject.type}</p>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>

                <div className={styles.modalTech}>
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className={styles.techPillDark}>{t}</span>
                  ))}
                </div>

                <div className={styles.modalBody}>
                  <h3>Project Overview</h3>
                  <p>{selectedProject.fullDescription}</p>

                  {/* DUAL ACTION BUTTONS */}
                  <div className={styles.buttonGroup}>
                    {selectedProject.liveLink && (
                      <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLinkBtn}>
                        View Live Project <ArrowUpRight size={20} />
                      </a>
                    )}
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
                        <Github size={20} /> GitHub Repository
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
