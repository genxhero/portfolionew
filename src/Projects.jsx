import React from 'react';
import projects from './data/project_data';
import Project from './Project';

const Projects = () => {

    return (
      <div className="projects-page">
        <div className="projects-intro">
            <p>
                This section is dedicated to the project's i've worked on over the past year and a half. I am always starting new projects and improving old ones in order to hone my skills and keep on top with the latest React features!
            </p>
        </div>

        <div className="projects-spread">
          {projects.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </div>
      </div>
    );
}

export default Projects;