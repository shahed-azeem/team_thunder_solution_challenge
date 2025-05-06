import React from 'react';

function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View More</a>}
    </div>
  );
}

export default ProjectCard;
