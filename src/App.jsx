import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/about" element={<div style={{ padding: '10rem' }}>About Page (Coming Soon)</div>} />
        <Route path="/resume" element={<div style={{ padding: '10rem' }}>Resume Page (Coming Soon)</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
