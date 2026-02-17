import React from 'react';
import './SectionStyles.css';

function Blogs() {
  // Since your resume doesn't have blog posts, I'll create placeholder tech blog topics
  // based on your experience and skills. You can replace these with your actual blog posts.
  const blogPosts = [
    {
      id: 1,
      image: '/images/blog-ai.jpg', // Placeholder
      title: 'Building AI Agents for Medical Device Manufacturing',
      timeline: 'Coming Soon',
      description: 'Lessons learned from developing an AI agent to generate and cross-reference BOMs for medical devices at Carbon2Null.',
      alt: 'AI and medical devices'
    },
    {
      id: 2,
      image: '/images/blog-salesforce.jpg', // Placeholder
      title: 'My Journey as a Salesforce Intern: From Aura Components to Network Security',
      timeline: 'Coming Soon',
      description: 'Reflections on two summers at Salesforce, working on Aura components, network security, and the Active Targeting Language Widget.',
      alt: 'Salesforce experience'
    },
    {
      id: 3,
      image: '/images/blog-teaching.jpg', // Placeholder
      title: 'Teaching MERN Stack at MITxPRO: What I Learned from My Students',
      timeline: 'Coming Soon',
      description: 'Insights from co-teaching a 10-month bootcamp and guiding students through full-stack development.',
      alt: 'Teaching coding'
    },
    {
      id: 4,
      image: '/images/blog-berkeley.jpg', // Placeholder
      title: 'From Community College to UC Berkeley: My Transfer Journey',
      timeline: 'Coming Soon',
      description: 'Navigating the path from Foothill College to UC Berkeley while studying Cognitive Science and Computer Science.',
      alt: 'UC Berkeley campus'
    }
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Blog Posts</h2>
      <div className="entries-container">
        {blogPosts.map((post, index) => (
          <div 
            key={post.id} 
            className={`entry-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
          >
            <div className="entry-image">
              <img src={post.image} alt={post.alt} />
            </div>
            <div className="entry-content">
              <h3 className="entry-title">{post.title}</h3>
              <p className="entry-timeline">{post.timeline}</p>
              <p className="entry-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;