import React, {useState, useEffect} from 'react';
import BACKDROPS from "./constants/backdrops";
import $ from 'jquery';

/**
 * Rotating Background
 * TODO: Refactor to use CSS Transition.
 * @param {*} props 
 */
const Background = (props) => {
    const [index, cycleBackdrop] = useState(0);

    //
    const images = preloadImages(BACKDROPS);

    //Item 1: Change BACKDROPS to be an array of images stored in the main folder

    useEffect(() => {
        const interval = setInterval((BACKDRROPS) => {
        let newIndex = index === (BACKDROPS.length -1 ) ? 0 : (index + 1);
        cycleBackdrop(newIndex);
        $("background-image").fadeIn();
        }, 4000);
        return () => clearInterval(interval);
    }, [index])

    
    return ( <div  className="background-image" style={{ backgroundImage: `url(${BACKDROPS[index]})` }} /> );
}

/**
 * 
 * @param {[string]} arrayOfImageURL 
 */
const preloadImages =  arrayOfImageURL => {
    let images = [];
    for (let i=0; i < arrayOfImageURL.length; i++) {
        let image = new Image(arrayOfImageURL[i]);
        images.push(image)
    }
    return images;
}

export default Background;

//  BACKUP RETURN STATEMENT  return ( <div  className="background-image" style={{ backgroundImage: `url(${BACKDROPS[index]})` }} /> );
