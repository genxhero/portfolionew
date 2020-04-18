/**
 * When you click on this, it bounces around the screen while an excerpt from Wizard's Last Rhymes plays
 * 
 * The purpose is to show off how i can use jquery and React hooks to animate
 * 
 */

import React, {useState} from 'react';
import $ from 'jquery';

const SpartaClicky = () => {
    const [bouncing, toggleBounce] = useState(false)
    const bounce = async () => {
        // toggleBounce(true);
        $('#sparta-clicky').css({ "-webkit-transform": "translate(-100px, 100px)" });
        //Do a bunch of jquery, wait for thing to come back to original position, then set bouncing to false again
    }
    return (
        <div className={`sparta ${bouncing ? 'bouncing' : ''}`} id="sparta-clicky" onClick={bouncing ? () => false : bounce} />
    )
}

export default SpartaClicky;