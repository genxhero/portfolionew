import React from 'react';

const Photo = props => {
    return (
        <div className="photo">
            <img alt="this is an alt. under protest" src={props.url}/>
        </div>
    )
}

export default Photo;