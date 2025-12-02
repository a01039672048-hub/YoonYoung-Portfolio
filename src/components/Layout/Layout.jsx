import React from 'react';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <CustomCursor />
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
