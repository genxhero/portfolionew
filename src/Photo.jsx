import React from 'react';

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
            <img alt="this is an alt. under protest" src={props.url}/>
        </div>
    )
}

export default Photo;