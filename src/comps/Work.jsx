import React from 'react';
import './SectionStyles.css';

function Work() {
  const workExperiences = [
    {
      id: 1,
      image: '/images/salesforce1.jpg', // Placeholder
      title: 'Software Engineer Intern @ Salesforce',
      timeline: 'May 2018 - Aug 2018 (NY & SF)',
      description: 'Addressed bugs for the Social Cloud Platform with a focus on network security. Engineered an Active Targeting Language Widget for the SC platform using Backbone.js, PHP, CSS, and jQuery.',
      demo: 'https://tinyurl.com/salesforce-summer-2018',
      alt: 'Salesforce internship 2018'
    },
    {
      id: 2,
      image: '/images/salesforce2.jpg', // Placeholder
      title: 'Software Engineer Intern @ Salesforce',
      timeline: 'May 2017 - Aug 2017 (SF)',
      description: 'Engineered a new Aura component displaying the Engagement History of Campaigns. Utilized Java, SQL queries, and JavaScript for data transfer to Salesforce servers. Approved for second term the following year in NYC.',
      demo: 'https://tinyurl.com/salesforce-summer-2017',
      alt: 'Salesforce internship 2017'
    },
    {
      id: 3,
      image: '/images/everstream.jpg', // Placeholder
      title: 'Associate Software Developer @ Everstream Analytics',
      timeline: 'Apr 2022 - Nov 2022',
      description: 'Contributed to full-stack solutions using Backbone.js, Django, React.js, Auth0, and Mixpanel. Operated within a KANBAN routine, prioritizing work based on company goals.',
      alt: 'Everstream Analytics'
    },
    {
      id: 4,
      image: '/images/badger.jpg', // Placeholder
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