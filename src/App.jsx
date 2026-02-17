import React, { useState } from 'react';
import './index.css';
import MatrixBackground from './comps/MatrixBackground';

// Import your section components
import Work from './comps/Work';
import Education from './comps/Education';
import Projects from './comps/Projects';
import Blogs from './comps/Blogs';

function App() {
  const [activeSection, setActiveSection] = useState('work');

  const renderSection = () => {
    switch(activeSection) {
      case 'work':
        return <Work />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'blogs':
        return <Blogs />;
      default:
        return <Work />;
    }
  };

  return (
    <>
      <MatrixBackground />
      <div className="app">
        {/* Header Section with your actual info */}
        <header className="header">
          <h1 className="name">James Laskey</h1>
          <p className="quote">"I learned how to code before AI."</p>
          <div className="contact-info">
            <a href="mailto:james.laskey23@berkeley.edu">james.laskey23@berkeley.edu</a>
            <a href="https://github.com/james-laskey" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/james-laskey" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </header>

        {/* 2x2 Button Grid */}
        <div className="button-grid">
          <button 
            className={`grid-button ${activeSection === 'work' ? 'active' : ''}`}
            onClick={() => setActiveSection('work')}
          >
            Work
          </button>
          <button 
            className={`grid-button ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
          <button 
            className={`grid-button ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button 
            className={`grid-button ${activeSection === 'blogs' ? 'active' : ''}`}
            onClick={() => setActiveSection('blogs')}
          >
            Blogs
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="content-section">
          {renderSection()}
        </div>
      </div>
    </>
  );
}

export default App;