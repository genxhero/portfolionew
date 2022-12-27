import React from 'react';
import PropTypes from 'prop-types';

/**
 * Expected Props
 * 
 * url: String, link to a photograph
 * 
 * @param {*} props 
 */
const Photo = props => {
    return (
        <div className="photo">
            <img alt="" src={props.url}/>
        </div>
    )
}

Photo.propTypes = {
    url: PropTypes.string
}

export default Photo;