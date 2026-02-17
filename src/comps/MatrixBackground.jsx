import React, { useEffect, useState } from 'react';
import './MatrixBackground.css';

function MatrixBackground() {
  const [lines, setLines] = useState([]);
  
  const codeSnippets = [
    'import React from "react";',
    'function Developer() {',
    '  const [skills, setSkills] = useState([]);',
    '  useEffect(() => {',
    '    fetch("/api/experience")',
    '      .then(res => res.json())',
    '      .then(data => setSkills(data));',
    '  }, []);',
    '  return (',
    '    <div className="portfolio">',
    '      <h1>James Laskey</h1>',
    '      <TechStack skills={skills} />',
    '    </div>',
    '  );',
    '}',
    'export default Developer;',
    '',
    '// Full Stack Developer',
    'const technologies = {',
    '  frontend: ["React", "Vue", "Swift"],',
    '  backend: ["Node.js", "Python", "Java"],',
    '  database: ["PostgreSQL", "MongoDB"]',
    '};',
    '',
    'class Experience {',
    '  constructor(company, role, years) {',
    '    this.company = company;',
    '    this.role = role;',
    '    this.years = years;',
    '  }',
    '}',
    '',
    'const salesforce = new Experience("Salesforce", "SWE Intern", 2);',
    'const everstream = new Experience("Everstream", "Developer", 1);',
    'const badgerMaps = new Experience("Badger Maps", "SWE Intern", 1);',
    '',
    'function solveProblems() {',
    '  while(!success) {',
    '    learn();',
    '    code();',
    '    improve();',
    '  }',
    '}',
    '',
    '// UC Berkeley Cognitive Science',
    'const education = {',
    '  school: "UC Berkeley",',
    '  major: "Cognitive/Computer Science",',
    '  graduation: "2026"',
    '};',
    '',
    'const skills = [',
    '  "JavaScript", "Python", "Java",',
    '  "React", "Node.js", "PostgreSQL"',
    '];'
  ];

  useEffect(() => {
    // Initialize lines with empty strings
    setLines(Array(codeSnippets.length).fill(''));
    
    const intervals = codeSnippets.map((snippet, index) => {
      let charIndex = 0;
      const lineDelay = index * 800; // Stagger start times
      
      setTimeout(() => {
        const interval = setInterval(() => {
          if (charIndex <= snippet.length) {
            setLines(prev => {
              const newLines = [...prev];
              newLines[index] = snippet.substring(0, charIndex);
              return newLines;
            });
            charIndex++;
          } else {
            clearInterval(interval);
            
            // After 4 seconds, start deleting
            setTimeout(() => {
              const deleteInterval = setInterval(() => {
                if (charIndex >= 0) {
                  setLines(prev => {
                    const newLines = [...prev];
                    newLines[index] = snippet.substring(0, charIndex);
                    return newLines;
                  });
                  charIndex--;
                } else {
                  clearInterval(deleteInterval);
                  
                  // Restart after 1.5 seconds
                  setTimeout(() => {
                    charIndex = 0;
                    const restartInterval = setInterval(() => {
                      if (charIndex <= snippet.length) {
                        setLines(prev => {
                          const newLines = [...prev];
                          newLines[index] = snippet.substring(0, charIndex);
                          return newLines;
                        });
                        charIndex++;
                      } else {
                        clearInterval(restartInterval);
                      }
                    }, 80);
                  }, 1500);
                }
              }, 40);
            }, 4000);
          }
        }, 80);
        
        return interval;
      }, lineDelay);
      
      return null;
    });

    return () => {
      intervals.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  return (
    <div className="matrix-background">
      <div className="matrix-container">
        {lines.map((line, index) => (
          <div 
            key={index} 
            className="matrix-line"
            style={{
              animationDelay: `${index * 2}s`,
              opacity: 0.08 + (index * 0.01)
            }}
          >
            <span className="line-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="line-content">{line}</span>
            {index === lines.length - 1 && line === codeSnippets[index] && (
              <span className="cursor">_</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatrixBackground;