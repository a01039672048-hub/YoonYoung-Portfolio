import React from 'react';
import Hero from '../components/Home/Hero';
import WorkGrid from '../components/Work/WorkGrid';
import Capabilities from '../components/Home/Capabilities';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <WorkGrid />
            <Capabilities />
        </div>
    );
};

export default Home;
