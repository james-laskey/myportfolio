import React from 'react';
import './SectionStyles.css';
import openproject from './openproject.jpg'

function Projects() {
  const projects = [
    {
      id: 1,
      image: openproject, // Placeholder
      title: 'AI Agent for Carbon2Null',
      timeline: 'Spring 2025',
      description: 'SWE Technical Lead @ Open Project Berkeley. Developed an AI agent to generate, cross-reference, and export BOMs (Bill of Materials) for hundreds of commercial medical devices.',
      repo: '[Project Repo Link]',
      alt: 'Carbon2Null project'
    },
    
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Projects</h2>
      <div className="entries-container">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`entry-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
          >
            <div className="entry-image">
              <img src={project.image} alt={project.alt} />
            </div>
            <div className="entry-content">
              <h3 className="entry-title">{project.title}</h3>
              <p className="entry-timeline">{project.timeline}</p>
              <p className="entry-description">{project.description}</p>
              <div className="entry-links">
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="entry-demo"
                  >
                    View Demo →
                  </a>
                )}
                {project.repo && (
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="entry-repo"
                  >
                    GitHub Repo →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;