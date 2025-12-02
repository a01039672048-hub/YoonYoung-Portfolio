import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import './WorkGrid.css';

const WorkGrid = () => {
    const [filter, setFilter] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(projects.map(p => p.category))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="work-section">
            <div className="filter-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="work-grid">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        className={`grid-item-${index % 6}`} // Simple pattern for demo
                    />
                ))}
            </div>
        </section>
    );
};

export default WorkGrid;
