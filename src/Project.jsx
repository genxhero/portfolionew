import React from 'react'

const Project = props => {
    const {project} = props;
    return (
        <div>
           <a href={project.live}> <h1>{project.title}</h1></a>     
            <p style={{ "width": "20rem" }}>{project.description}</p>
           <img style={{"width": "20rem"}} src={project.image} alt="Shut up, eslint."/>
           <h4><a href={project.github}>Github</a><a href={project.live}>Live Demo</a></h4> 
        </div>
    )
}

export default Project;