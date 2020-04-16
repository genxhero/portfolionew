import React from 'react';
import projects from './data/project_data';
import Project from './Project';
import { TransitionGroup, CSSTransition } from "react-transition-group";

/**
 * 
 * Displays a project component for every project in the database. ewgf
 * 
 * @param {*} props 
 */
const Projects = (props) => {

    return (
      <TransitionGroup>
        <CSSTransition timeout={{ enter: 300, exit: 300 }} classNames={"projects"}>
          <div className="projects">
            <div className="projects-intro">
              <p>
                This section is dedicated to the project's i've worked on over
                the past year and a half. I am always starting new projects and
                improving old ones in order to hone my skills and keep on top
                with the latest React features!
              </p>
            </div>

            <div className="projects-spread">
              {projects.map((project) => (
                <Project project={project} key={project.title} />
              ))}
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
}

export default Projects;