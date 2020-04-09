import React from 'react';

/**
 * TODO: in/out animation unless that's going to be attached to the main app's testGroup stateslice?
 * @param {*} props 
 */

const AboutMe = props => {
    return (
      <div className={`about-me ${props.top ? "top" : ""}`}>
        <h1>About Me</h1>
        <div className="about-me-section">
          <h3 className="about-me-subtitle">History</h3>
          <p className="about-me-text">
             Born and bred in Southern California, I grew up around the time the internet was
            really starting to take off. As a result, I've always immersed
            myself in technology. What I like about web development is the
            gestalt, the omnibus: every little thing about it fills me with
            exhilaration! The way I an apply my problem solving skills (and love
            for puzzles), the way I can exercise my creativity on a canvas of
            code, I could go on forever!
          </p>
        </div>

        <div className="about-me-section reverse">
          <h3 className="about-me-subtitle">Skills</h3>
          <ul className="about-me-list"></ul>
        </div>
      </div>
    );
}

export default AboutMe;