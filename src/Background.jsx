import React, {useState, useEffect} from 'react';
import BACKDROPS from "./constants/backdrops";
import $ from 'jquery';

/**
 * Rotating Background
 * 
 * @param {*} props 
 */
const Background = (props) => {
    const [index, cycleBackdrop] = useState(0);    
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

export default Background;