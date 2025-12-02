import React from 'react';
import { motion } from 'framer-motion';
import './Capabilities.css';

const services = [
    'STRATEGY',
    'ART DIRECTION',
    'DIGITAL DESIGN',
    'CREATIVE DEV',
    'BRANDING'
];

const Capabilities = () => {
    return (
        <section className="capabilities-section">
            <div className="capabilities-header">
                <h2>CAPABILITIES</h2>
            </div>
            <div className="capabilities-list">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="capability-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <span className="service-name">{service}</span>
                        <span className="service-arrow">→</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Capabilities;
