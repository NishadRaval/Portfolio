import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import '../styles/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="modal-container"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="close-btn-floating" onClick={onClose}>
                        <X size={24} />
                    </button>

                    <div className="modal-hero-image">
                        {project.image ? (
                            <img src={project.image} alt={project.title} className="modal-image-bg" />
                        ) : (
                            <div className="hero-overlay-gradient"></div>
                        )}
                        <div className="hero-overlay-gradient" style={{ background: `linear-gradient(to top, #111 0%, transparent 100%)` }}></div>
                        <motion.h2
                            className="modal-title-overlay"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {project.title}
                        </motion.h2>
                    </div>

                    <div className="modal-content-scroll" data-lenis-prevent>
                        <div className="modal-grid">
                            <div className="modal-main">
                                <h3 className="section-label">Overview</h3>
                                <p className="project-description">
                                    {project.description || "No description available."}
                                </p>

                                {project.features && (
                                    <>
                                        <h3 className="section-label">Features</h3>
                                        <ul className="feature-list">
                                            {project.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>

                            <div className="modal-sidebar">
                                <div className="meta-group">
                                    <div className="meta-item">
                                        <Calendar size={18} className="meta-icon" />
                                        <span>{project.year}</span>
                                    </div>
                                    <div className="meta-item">
                                        <Tag size={18} className="meta-icon" />
                                        <span>{project.category}</span>
                                    </div>
                                </div>

                                {project.tech && (
                                    <div className="tech-stack-group">
                                        <h3>Technologies</h3>
                                        <div className="tags">
                                            {project.tech.map((tech, index) => (
                                                <span key={index}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="action-buttons-group">
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="modal-btn primary">
                                            <ExternalLink size={18} /> Live Site
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-btn secondary">
                                            <Github size={18} /> Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
