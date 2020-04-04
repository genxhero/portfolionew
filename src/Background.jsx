import React, {useState, useEffect} from 'react';
import BACKDROPS from "./constants/backdrops";
import $ from 'jquery';

const Background = (props) => {
    const [index, cycleBackdrop] = useState(0);
    console.log(index)
    
    useEffect(() => {
        const interval = setInterval((BACKDRROPS) => {
        let newIndex = index === (BACKDROPS.length -1 ) ? 0 : (index + 1);
        cycleBackdrop(newIndex);
        $("background-image").fadeIn();
        }, 2000);
        return () => clearInterval(interval);
    }, [index])

    
    return (
      <div
        id="background-image"
        className="background-image"
        style={{ backgroundImage: `url(${BACKDROPS[index]})` }}
      >
      </div>
    );
}

export default Background;