import React from 'react';
import AboutMe from './AboutMe';
import PropTypes from 'prop-types';

const Intro = (props) => {
    return (
        <div className="intro">
            <h1 className="name"> Aaron Russell Goddard</h1>
            <h2 className="title">Full-Stack Software Engineer</h2>
            {props.testGroup === "a" && <AboutMe top={true} />}
        </div>
    )
}


Intro.defaultProps = {
    testGroup: "a"
}

Intro.propTypes = {
    testGroup: PropTypes.string
}
export default Intro;