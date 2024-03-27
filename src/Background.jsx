import React, {useState, useEffect} from 'react';
//import BACKDROPS from "./constants/backdrops";
import $ from 'jquery';
import BG1 from "./images/BG01.jpg";
import BG2 from "./images/BG02.jpg";
import BG3 from "./images/BG03.jpg";
import BG4 from "./images/BG04.jpg";
import BG5 from "./images/BG05.jpg";
import BG6 from "./images/BG06.jpg";
import BG7 from "./images/BG07.jpg";


/**
 * Rotating Background
 * TODO: Refactor to use CSS Transition.
 * @param {*} props 
 */

const BACKDROPS = [BG1, BG2, BG3, BG4, BG5, BG6, BG7]

const Background = (props) => {
    const [index, cycleBackdrop] = useState(0);

    //
    const images = preloadImages(BACKDROPS);


    useEffect(() => {
        const interval = setInterval( () => {
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
