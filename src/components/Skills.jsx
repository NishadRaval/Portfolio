import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const languages = [
    "HTML", "CSS", "JavaScript", "TypeScript", "Java", "C", "C++", "Python", "Kotlin", "Node.js", "Next.js", "React", "Flutter"
];

const tools = [
    "VS Code", "Android Studio", "GitHub", "Git", "Figma", "Postman", "Vercel", "Firebase", "MongoDB", "Docker"
];

const Marquee = ({ items, direction = "left", speed = 20 }) => {
    return (
        <div className="skills-marquee">
            <motion.div
                className="marquee-track"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
                }}
                transition={{
                    repeat: Infinity,
                    duration: speed,
                    ease: "linear"
                }}
                whileHover={{ animationPlayState: "paused" }} // Note: Framer Motion handles this differently, but we'll use CSS for pause
            >
                {/* Triple duplication ensures no gaps ever */}
                {items.map((item, index) => (
                    <span key={`1-${index}`} className="skill-item">{item}</span>
                ))}
                {items.map((item, index) => (
                    <span key={`2-${index}`} className="skill-item">{item}</span>
                ))}
                {items.map((item, index) => (
                    <span key={`3-${index}`} className="skill-item">{item}</span>
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    return (
        <section className="skills">
            <div className="skills-container">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="skills-intro"
                >
                    Tools & Technologies
                </motion.p>

                <Marquee items={languages} direction="left" speed={25} />
                <Marquee items={tools} direction="right" speed={30} />
            </div>
        </section>
    );
};

export default Skills;
