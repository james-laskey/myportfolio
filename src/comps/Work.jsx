import React from 'react';
import './SectionStyles.css';
import berkeley from './berkeley.png'
import badger from './badger.png'
import everstream from './everstream.png'
import salesforce from './salesforce.jpg'

function Work() {
  const workExperiences = [
    {
      id: 3,
      image: everstream, // Placeholder
      title: 'Associate Software Developer @ Everstream Analytics',
      timeline: 'Apr 2022 - Nov 2022 (Remote)',
      description: 'Contributed to full-stack solutions using Backbone.js, Django, React.js, Auth0, and Mixpanel. Operated within a KANBAN routine, prioritizing work based on company goals.',
      alt: 'Everstream Analytics'
    },
    {
      id: 1,
      image: salesforce, // Placeholder
      title: 'Software Engineer Intern @ Salesforce',
      timeline: 'May 2018 - Aug 2018 (New York)',
      description: 'Addressed bugs for the Social Cloud Platform with a focus on network security. Engineered an Active Targeting Language Widget for the SC platform using Backbone.js, PHP, CSS, and jQuery.',
      demo: 'https://docs.google.com/presentation/d/1OqD1dW_7sHW4UHOjuicVzqKDcZQrBWct/edit?slide=id.p1#slide=id.p1',
      alt: 'Salesforce internship 2018'
    },
    {
      id: 2,
      image: salesforce, // Placeholder
      title: 'Software Engineer Intern @ Salesforce',
      timeline: 'May 2017 - Aug 2017 (SF)',
      description: 'Engineered a new Aura component displaying the Engagement History of Campaigns. Utilized Java, SQL queries, and JavaScript for data transfer to Salesforce servers. Approved for second term the following year in NYC.',
      demo: 'https://drive.google.com/file/d/1M0N-OSMHMY1iI1JViuPE7bjlHkGr1AUm/view',
      alt: 'Salesforce internship 2017'
    },
    
    {
      id: 4,
      image: badger, // Placeholder
      title: 'Software Engineer & Customer Success Intern @ Badger Maps',
      timeline: 'Aug 2016 - Nov 2016 (SF)',
      description: 'Transitioned from customer service to web development. Developed a webapp/api to increase traffic and improve SEO by accumulating geojson data of the boroughs of New York.',
      alt: 'Badger Maps'
    }
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Work Experience</h2>
      <div className="entries-container">
        {workExperiences.map((experience, index) => (
          <div 
            key={experience.id} 
            className={`entry-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
          >
            <div className="entry-image">
              <img src={experience.image} alt={experience.alt} />
            </div>
            <div className="entry-content">
              <h3 className="entry-title">{experience.title}</h3>
              <p className="entry-timeline">{experience.timeline}</p>
              <p className="entry-description">{experience.description}</p>
              {experience.demo && (
                <a 
                  href={experience.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="entry-demo"
                >
                  View Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;