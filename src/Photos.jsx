import React from 'react';
import Photo from './Photo';
import LINKS from './constants/links';

const Photos = props => {
    return (
        <div>
            <div>

            </div>

            <div>
                {LINKS.map( url => <Photo url={url} />)}
            </div>
        </div>
    )
}

export default Photos;