import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import './Hero.css';

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20, // -10 to 10 degrees
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text-line">
                    <motion.h1
                        className="text-hero"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                    >
                        I AM A DIGITAL THINKER DRIVEN
                    </motion.h1>
                </div>
                <div className="hero-text-line">
                    <motion.h1
                        className="text-hero accent"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                    >
                        BY SEXY IDEAS SHAPED BY
                    </motion.h1>
                </div>
                <div className="hero-text-line">
                    <motion.h1
                        className="text-hero"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                    >
                        DESIGN
                    </motion.h1>
                </div>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    UX, UI & PRODUCT DESIGNER
                </motion.p>
            </div>

            <div className="scroll-indicator">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    ↓
                </motion.div>
            </div>

            <motion.div
                className="hero-carousel"
                style={{
                    transform: `translateY(-50%) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`
                }}
            >
                <div className="carousel-container">
                    {projects.slice(0, 5).map((project, index) => (
                        <div className="carousel-item" key={project.id} style={{ '--i': index }}>
                            <img src={project.image} alt={project.title} loading="eager" />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
