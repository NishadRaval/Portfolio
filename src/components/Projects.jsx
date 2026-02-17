import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectModal from './ProjectModal';
import '../styles/Projects.css';

const projects = [
    {
        id: 1,
        title: "Nova – AI Chat Web Application",
        category: "Full-Stack Web Application",
        year: "2025",
        color: "#8686AC",
        bg: "#111",
        github: "https://github.com/NishadRaval/nova-chatbot",
        live: "https://novaaichat.vercel.app/",
        description: "Nova is a responsive AI-powered chat web application inspired by modern conversational interfaces. It allows users to interact with an AI assistant in real time, supporting text conversations, image attachment prompts, syntax-highlighted code snippets, and persistent chat history. The project focuses on clean UI design, smooth user experience, and structured frontend-backend integration for AI communication.",
        features: ["Real-Time AI Chat Interface: Smooth conversational UI with dynamic message rendering and persistent history",
            "Code Snippet Support with Syntax Highlighting: Properly formatted and readable code blocks inside chat responses.",
            "Responsive & Dark Mode UI: Clean, modern interface optimized for desktop and mobile devices."],
        tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Vercel"],
        image: "/nova.png"
    },
    {
        id: 2,
        title: "AI Stock & Crypto Analyzer",
        category: "AI & Data Analytics Web Application",
        year: "2025",
        color: "#4ecdc4",
        bg: "#111",
        github: "https://github.com/NishadRaval/stock-crypto-analyzer",
        live: "https://stock-crypto-analyzer.vercel.app/",
        description: "AI Stock & Crypto Analyzer is a financial analysis web application that evaluates Indian (NSE/BSE), US stocks, and cryptocurrencies using AI-driven logic and fundamental metrics. The platform provides short-term predictions, long-term investment recommendations, valuation insights, and interactive price charts to help users make data-informed decisions. Built with Python and Streamlit, the application combines financial data processing, AI-based scoring, and real-time visualization into a clean, responsive dashboard.",
        features: ["Real-Time AI Chat Interface: Smooth conversational UI with dynamic message rendering and persistent history",
            "Code Snippet Support with Syntax Highlighting: Properly formatted and readable code blocks inside chat responses.",
            "Responsive & Dark Mode UI: Clean, modern interface optimized for desktop and mobile devices."],
        tech: ["Python", "Streamlit", "Financial APIs", "Pandas", "Streamlit Cloud"],
        image: "/aistock.png"
    },
    {
        id: 3,
        title: "CLYN – Full-Stack E-Commerce Platform",
        category: "MERN Full-Stack E-Commerce Platform",
        year: "2025",
        color: "#E63946", // Red
        bg: "#111",
        github: "https://github.com/NishadRaval/clyn",
        live: "https://clynshop.vercel.app/",
        description: "CLYN is a complete full-stack e-commerce web application built using the MERN stack. The platform simulates a real-world online shopping experience with separate customer and admin functionalities, secure authentication, order management, and database integration. The project demonstrates end-to-end full-stack development including frontend UI, backend API architecture, authentication, database modeling, and cloud deployment.",
        features: ["Role-Based Authentication System: Secure JWT authentication with separate customer and admin access control.",
            "Full Product & Order Management (Admin Panel): Create, update, delete products and manage customer orders through protected routes.",
            "Complete Shopping Workflow: Product browsing → Cart → Checkout → Order placement → Order history with persistent database storage."],
        tech: ["React", "CSS Modules", "Node.js", "MongoDB Atlas", "Vercel", "Render", "JSON Web Tokens (JWT)", "bcryptjs (Password Hashing)"],
        image: "/clyn.png"
    },
    {
        id: 4,
        title: "MangoShop – E-Commerce Frontend Prototype",
        category: "Frontend E-Commerce Prototype",
        year: "2025",
        color: "#F4A261", // Orange
        bg: "#111",
        github: "https://github.com/NishadRaval/MangoShop",
        live: "https://mangoshop.vercel.app/",
        description: "MangoShop is a multi-page responsive e-commerce storefront built using HTML, CSS, and JavaScript. The project focuses on clean UI design, category-based navigation, and interactive cart notifications to simulate a modern fashion retail website. It was developed as a real-world frontend prototype for a local clothing business, emphasizing layout structure, user experience, and visual branding.",
        features: ["Multi-Page Navigation (Home, Shop, About, Contact)",
            "Interactive Add-to-Cart Notifications",
            "Responsive Fashion-Focused UI Design"],
        tech: ["HTML5", "CSS3", "JavaScript (Vanilla JS)", "Vercel"],
        image: "/mangoshop.png"
    },
    {
        id: 5,
        title: "Chacha Bhatija Food Club – Restaurant Website",
        category: "Business Website Development",
        year: "2025",
        color: "#2A9D8F", // Green
        bg: "#111",
        github: "https://github.com/NishadRaval/chachabhatija-foodclub",
        live: "https://chachabhatija.vercel.app/",
        description: "Chacha Bhatija Food Club is a responsive restaurant website built to provide an online presence for a local food business. The platform showcases the restaurant’s menu, gallery, timings, and location while enabling direct customer communication via WhatsApp integration. This project demonstrates real-world client development experience, focusing on branding, layout structure, and user accessibility.",
        features: ["Direct WhatsApp Contact Integration: Enables customers to instantly connect with the restaurant for orders and inquiries.",
            "Multi-Section Informational Layout: Hero section, menu showcase, gallery, experience, and contact details.",
            "Responsive Business Website Design: Optimized layout for desktop and mobile users."],
        tech: ["HTML5", "CSS3", "JavaScript", "Google Maps Embed", "WhatsApp API Integration", "Vercel"],
        image: "/cbfc.png"
    }
];

const Card = ({ project, i, progress, range, targetScale, onClick }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="card-container">
            <motion.div
                style={{ scale, top: `calc(-10vh + ${i * 25}px)` }}
                className="card-wrapper"
                onClick={() => onClick(project)}
            >
                <div className="card-body" style={{ backgroundColor: project.color }}>
                    <div className="card-header">
                        <h2>{project.title}</h2>
                        <span>{project.year}</span>
                    </div>
                    <div className="card-image-wrapper">
                        <motion.div style={{ scale: imageScale }} className="card-inner-image">
                            {project.image && (
                                <img src={project.image} alt={project.title} />
                            )}
                        </motion.div>
                    </div>
                    <div className="card-footer">
                        <span>{project.category}</span>
                        <span>View Project</span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <motion.section
            ref={container}
            id="projects"
            className="projects-main"
        >
            <div className="projects-intro">
                <h2>Selected Works</h2>
                <p>A collection of recent projects</p>
            </div>

            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return (
                    <Card
                        key={project.id}
                        i={i}
                        project={project}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                        onClick={setSelectedProject}
                    />
                )
            })}

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </motion.section>
    );
};

export default Projects;
