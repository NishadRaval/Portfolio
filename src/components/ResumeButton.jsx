import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import Magnetic from './Magnetic';
import '../styles/ResumeButton.css';

const ResumeButton = () => {
    return (
        <div className="resume-button-container">
            <Magnetic>
                <motion.a
                    href="/Nishad Raval's Resume.pdf"
                    download="Nishad Raval's Resume.pdf"
                    className="resume-button"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="icon-wrapper">
                        <FileText size={20} className="file-icon" />
                        <Download size={20} className="dl-icon" />
                    </div>
                    <span className="label">Download CV</span>
                    <div className="glow-effect"></div>
                </motion.a>
            </Magnetic>
        </div>
    );
};

export default ResumeButton;
