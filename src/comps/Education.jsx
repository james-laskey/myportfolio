import React from 'react';
import './SectionStyles.css';

function Education() {
  const educationEntries = [
    {
      id: 1,
      image: '/images/berkeley.jpg', // Placeholder
      title: 'UC Berkeley - Cognitive/Computer Science',
      timeline: '2026 (Expected)',
      description: 'Pursuing degree in Cognitive Science and Computer Science. SWE Technical Lead @ Open Project Berkeley Spring \'25.',
      alt: 'UC Berkeley'
    },
    {
      id: 2,
      image: '/images/foothill.jpg', // Placeholder
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
            <img src="/images/courses.jpg" alt="Computer Science Courses" /> {/* Placeholder */}
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
            <img src="/images/math.jpg" alt="Mathematics Courses" /> {/* Placeholder */}
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