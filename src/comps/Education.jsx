import React from 'react';
import './SectionStyles.css';
import berkeley from './berkeley.png'
import foothill from './foothill.jpg'

function Education() {
  const educationEntries = [
    {
      id: 1,
      image: berkeley, // Placeholder
      title: 'UC Berkeley - Cognitive/Computer Science',
      timeline: '2026 (Expected)',
      description: 'Pursuing a degree in Cognitive Science and Computer Science. I started at 18 years old straight out of high school in 2015. I come from San Bernardino, CA, and our educational system isn\'t the best out there. Hence, it took me time to adjust to the rigor of UC Berkeley. Computer Science at Cal is no joke, but I persevered. Through my internships and personal experience, I chose to take time away from UC Berkeley and take my chances at a full-time job. At the time, everyone said you did not need a degree to get a tech job, so I took the risk. It took over a year to get my first offer, but I was successful. I was then laid off right before ChatGPT was released in 2022, which is pretty ironic. I then thought the best decision was to return to Cal. They did not make it easy for me. I spent a year at two community colleges taking 20+ units a semester to fulfill requirements for Cal. I am now on track to graduate and used my veteran experience to create novel and efficient solutions in this world.',
      alt: 'UC Berkeley'
    },
    {
      id: 2,
      image: foothill, // Placeholder
      title: 'Foothill/Alameda College',
      timeline: '2023',
      description: 'Completed undergraduate requirements for UC Berkeley readmission.',
      alt: 'Foothill College'
    }
  ];

  // Split courses into categories for better display
  const courses = {
    computerScience: [
      'CS188 | Introduction to Artificial Intelligence',
      'COGSCI131 | Computational Models of Cognition',
      'COGSCI112 | Cognition of UX',
      'CS61A | Python, OOP, and Logic',
      'CS61B | Java, SQL, Data Structures, and Algorithms',
      'Website Architecture | Node.js, Javascript, MySQL'
    ],
    math: [
      'Calculus',
      'Multivariable Calculus',
      'Linear Algebra',
      'Discrete Mathematics for Computer Science',
      'Differential Equations'
    ]
  };

  return (
    <div className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="entries-container">
        {educationEntries.map((entry, index) => (
          <div 
            key={entry.id} 
            className={`entry-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
          >
            <div className="entry-image">
              <img src={entry.image} alt={entry.alt} />
            </div>
            <div className="entry-content">
              <h3 className="entry-title">{entry.title}</h3>
              <p className="entry-timeline">{entry.timeline}</p>
              <p className="entry-description">{entry.description}</p>
            </div>
          </div>
        ))}
        
        {/* Courses Section as additional cards */}
        <div className="entry-card image-left">
          <div className="entry-image">
            <img src={berkeley} alt="Computer Science Courses" /> {/* Placeholder */}
          </div>
          <div className="entry-content">
            <h3 className="entry-title">Computer Science Courses</h3>
            <ul className="courses-list">
              {courses.computerScience.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="entry-card image-right">
          <div className="entry-image">
            <img src={berkeley} alt="Mathematics Courses" /> {/* Placeholder */}
          </div>
          <div className="entry-content">
            <h3 className="entry-title">Mathematics Courses</h3>
            <ul className="courses-list">
              {courses.math.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;