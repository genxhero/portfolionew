import React from 'react';
import Photo from './Photo';
import LINKS from './constants/links';
import { TransitionGroup, CSSTransition } from "react-transition-group";


const Photos = props => {
 
    return (
    <TransitionGroup>
        <CSSTransition timeout={{ enter: 300, exit: 300 }}  classNames={'photos'}>
        <div className="photos">
            <div className="photos-intro" >
                <p>I am also a photographer - always looking for new event shoots, commissions, and models to expand my portfolio.  Below is a sample of my work</p>
            </div>

            <div className="photos-spread">
                {LINKS.map( url => <Photo url={url} key={url}/>)}
            </div>
        </div>
           </CSSTransition>
      </TransitionGroup>
    )
}

export default Photos;