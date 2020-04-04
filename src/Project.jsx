import React from 'react'

const Project = props => {
    const {project} = props;
    return (
      <div className="project">
        <a className="project-title" href={project.live} target="_blank">
          {" "}
          {project.title}
        </a>
        <p className="project-description">{project.description}</p>
        <div className="project-thumbnail">
          <img src={project.image} alt="Shut up, eslint." />
        </div>
        <h4>
          <a className="project-link" href={project.github} target="_blank">
            Github
          </a>
          <a className="project-link" href={project.live} target="_blank">
            Live Demo
          </a>
        </h4>
      </div>
    );
}

export default Project;