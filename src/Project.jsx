import React from 'react'
import PropTypes from 'prop-types';
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
        
        <span
          className="project-title">
          {" "}
          {project.title}
        </span>
        <h4>
          <a
            className="project-link"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>

          {project.live !== "Pending" &&
            <a
              className="project-link"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          }
        </h4>
        <p className="project-description">{project.description}</p>
        <div className="project-thumbnail">
          <img src={project.image} alt="This is an alt." />
        </div>
      </div>
    );
}

Project.propTypes = {
  project: PropTypes.object
}

export default Project;

/**
 *    <a
          className="project-title"
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
        >
 */
