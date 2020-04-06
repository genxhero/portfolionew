import React from 'react';
import AboutMe from './AboutMe';

const Intro = (props) => {
    return (
        <div className="intro">
            <h1 className="name"> Aaron Russell Goddard</h1>
            <h2 className="title">Full-Stack Software Engineer</h2>
            {props.testGroup === "a" && <AboutMe />}
        </div>
    )
}

export default Intro;