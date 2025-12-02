
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="project-detail">
      <motion.div
        className="project-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={project.image} alt={project.title} />
        <div className="project-title-overlay">
          <h1>{project.title}</h1>
          <p>{project.category} / {project.year}</p>
        </div>
      </motion.div>

      <div className="project-content">
        <aside className="sticky-nav">
          <ul>
            <li><a href="#goal">GOAL</a></li>
            <li><a href="#problem">PROBLEM</a></li>
            <li><a href="#solution">SOLUTION</a></li>
            <li><a href="#result">RESULT</a></li>
          </ul>
        </aside>

        <div className="case-study">
          <section id="goal" className="study-section">
            <h2>GOAL</h2>
            <p>{project.goal}</p>
          </section>

          <section id="problem" className="study-section">
            <h2>PROBLEM</h2>
            <p>{project.problem}</p>
          </section>

          <div className="full-bleed-image">
            <img
              src={project.image}
              alt="Process"
              loading="lazy"
              decoding="async"
            />
          </div>

          <section id="solution" className="study-section">
            <h2>SOLUTION</h2>
            <p>{project.solution}</p>
          </section>

          <section id="result" className="study-section">
            <h2>RESULT</h2>
            <p>{project.result}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

