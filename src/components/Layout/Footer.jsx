import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-cta">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    >
                        LET'S WORK<br />TOGETHER
                    </motion.h2>
                    <motion.a
                        href="mailto:younyoung3967@naver.com"
                        className="footer-email"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                    >
                        younyoung3967@naver.com
                    </motion.a>
                </div>

                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">TWITTER</a>
                    </div>
                    <div className="copyright">
                        © 2025 HEO YOON YOUNG
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
