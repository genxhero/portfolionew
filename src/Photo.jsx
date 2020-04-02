import React from 'react';

const Photo = props => {
    return (
        <div>
            <img alt="this is an alt. under protest" src={props.url}/>
        </div>
    )
}

export default Photo;