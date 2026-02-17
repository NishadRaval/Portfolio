import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', updateMousePosition);

        // Add event listeners for hoverable elements
        const hoverables = document.querySelectorAll('a, button, .project-item, input, textarea');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />
            <motion.div
                className="cursor-outline"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.5 : 1
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
        </>
    );
};

export default CustomCursor;
