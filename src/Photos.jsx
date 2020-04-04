import React from 'react';
import Photo from './Photo';
import LINKS from './constants/links';

const Photos = props => {
    return (
        <div>
            <div className="photos-intro" >
                <p>I am also a photographer - always looking for new event shoots, commissions, and models to expand my portfolio.  Below is a sample of my work</p>
            </div>

            <div className="photos-spread">
                {LINKS.map( url => <Photo url={url} key={url}/>)}
            </div>
        </div>
    )
}

export default Photos;