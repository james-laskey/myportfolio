import React from 'react';
import './SectionStyles.css';

function Projects() {
  const projects = [
    {
      id: 1,
      image: '/images/carbon2null.jpg', // Placeholder
      title: 'AI Agent for Carbon2Null',
      timeline: 'Spring 2025',
      description: 'SWE Technical Lead @ Open Project Berkeley. Developed an AI agent to generate, cross-reference, and export BOMs (Bill of Materials) for hundreds of commercial medical devices.',
      repo: '[Project Repo Link]',
      alt: 'Carbon2Null project'
    },
    {
      id: 2,
      image: '/images/geojson.jpg', // Placeholder
      title: 'Geojson Webapp/API for Badger Maps',
      timeline: 'Fall 2016',
      description: 'Developed a webapp/api to increase traffic and improve SEO by accumulating geojson data of the boroughs of New York.',
      alt: 'Geojson mapping project'
    },
    {
      id: 3,
      image: '/images/salesforce-widget.jpg', // Placeholder
      title: 'Active Targeting Language Widget',
      timeline: 'Summer 2018',
      description: 'Engineered an Active Targeting Language Widget for Salesforce Social Cloud Platform using Backbone.js, PHP, CSS, and jQuery.',
      demo: 'https://tinyurl.com/salesforce-summer-2018',
      alt: 'Salesforce widget'
    },
    {
      id: 4,
      image: '/images/aura-component.jpg', // Placeholder
      title: 'Salesforce Aura Component',
      timeline: 'Summer 2017',
      description: 'Engineered a new Aura component displaying the Engagement History of Campaigns. Utilized Java, SQL queries, and JavaScript for data transfer to Salesforce servers.',
      demo: 'https://tinyurl.com/salesforce-summer-2017',
      alt: 'Salesforce Aura component'
    }
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