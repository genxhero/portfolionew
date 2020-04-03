import React from 'react';
import projects from './data/project_data';
import Project from './Project';

const Projects = () => {

    return (
        <div className="projects-page">
            <div className="projects-spread">
                {projects.map(project => <Project project={project}/>)}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Projects;