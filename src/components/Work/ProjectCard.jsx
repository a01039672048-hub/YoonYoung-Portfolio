import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project, className }) => {
    return (
        <motion.div
            className={`project-card ${className}`}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
        >
            <Link to={`/project/${project.id}`}>
                <div className="card-image-container">
                    <img src={project.gridImage || project.image} alt={project.title} loading="lazy" />
                    <div className="card-overlay">
                        <h3>{project.title}</h3>
                        <p>{project.category}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
