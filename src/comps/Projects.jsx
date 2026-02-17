import React from 'react';
import './SectionStyles.css';
import openproject from './openproject.jpg'
import tasku from './tasku.png'
import foothill from './foothill.jpg'
import bm from './bm.png'

function Projects() {
  const projects = [
    {
      id: 1,
      image: openproject, // Placeholder
      title: 'AI Agent for Carbon2Null',
      timeline: 'Spring 2025',
      description: 'SWE Technical Lead @ Open Project Berkeley. Developed an AI agent to generate, cross-reference, and export BOMs (Bill of Materials) for hundreds of commercial medical devices.',
      repo: 'https://github.com/james-laskey/carbon2null_bomgeneration',
      alt: 'Carbon2Null project'
    },
    {
      id: 2,
      image: tasku, // Placeholder
      title: 'React Native University App',
      timeline: 'Spring 2025',
      description: 'Developed an app along with two other UC Berkeley students that was centered around helping college students make money. It was an app that acted like fiverr or gig but exclusively for students at universities. The app integrates with Mapbox api and Square api for several features. The team I worked with got distracted by school and eventually the passion died out. I did about 99% of the code base on the frontend and backend regardless.',
      repo: 'https://github.com/james-laskey/task_app',
      alt: 'Task App Logo'
    },
    {
      id: 3,
      image: foothill, // Placeholder
      title: 'Foothill College SLI Internship Database',
      timeline: 'Spring 2023',
      description: 'Worked with the Director of the Foothill College Science Learning Institute to create a live database for the prospective internships they had available for students. The students originally had to look through a PDF file to find the information but I created a webapp that could display the information more efficiently using the PERN stack and Vercel hosting. I struggled with configuring the proper system design on this project as I had no one to consult and did the entire project on my own. Working on educational software has a different expectation and aesthetic involved from my perspective.',
      repo: 'https://github.com/james-laskey/sli_internship_database',
      alt: 'Foothill SLI Database'
    },
    {
      id: 4,
      image: bm, // Placeholder
      title: 'Swift iOS Fitness App: Bare Minimum Fitness (BM Fit)',
      timeline: '2022',
      description: 'Independently developed an iOS app using Swift that generates workouts based on specific preferences. The app also had training guides and a fitness tracker for your workouts. The system design was fairly simply and all the dataa stayed on the users device as more complex networking was not necessary in this situation. I ran alpha and beta tests with over 50 users and reported no crashes on the app. I was a personal trainer at one point and wanted to combine my skills and ultimately prove I can get something of value on the app store. I fo not pay the 99$ fee for the developer livencse so the app is no longer live. I am no longer a personal trainer and focusing on my technical career. This was a great personal milestone.',
      repo: 'https://github.com/james-laskey/ios-bmfit',
      alt: 'Carbon2Null project'
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