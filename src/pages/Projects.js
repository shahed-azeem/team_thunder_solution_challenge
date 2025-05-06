import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div>
      <h2 className="section-title">Projects</h2>

      <ProjectCard
        title="Athlete Management Solution"
        description="AI platform to track athlete performance & prevent injuries."
        tech="React.js, Node.js, Firebase"
        link="https://github.com/shahed-azeem/athlete-management"
      />

      <ProjectCard
        title="Finance Management Website"
        description="Responsive finance tracker with budgeting, expense charts, and local storage."
        tech="HTML, CSS, JavaScript"
        link="https://github.com/shahed-azeem/finance-tracker"
      />

      <ProjectCard
        title="Modern Telephone Directory"
        description="Fast searchable contact directory using optimized data structures."
        tech="C++"
        link="https://github.com/shahed-azeem/telephone-directory"
      />
    </div>
  );
}

export default Projects;
