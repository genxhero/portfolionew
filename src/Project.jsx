import React from 'react'

/**
 * Displays information for a single project.
 * Expected Props
 * 
 * project: Object (TODO: shape)
 * @param {*} props 
 */
const Project = props => {
    const {project} = props;
    return (
      <div className="project">
        <a
          className="project-title"
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          {project.title}
        </a>
        <p className="project-description">{project.description}</p>
        <div className="project-thumbnail">
          <img src={project.image} alt="Shut up, eslint." />
        </div>
        <h4>
          <a
            className="project-link"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="project-link"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </h4>
      </div>
    );
}

export default Project;