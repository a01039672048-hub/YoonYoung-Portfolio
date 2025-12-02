import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">HEO YOON YOUNG</Link>
            </div>
            <div className="nav-links">
                <Link to="/about">ABOUT</Link>
                <Link to="/resume">RESUME</Link>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                    {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
