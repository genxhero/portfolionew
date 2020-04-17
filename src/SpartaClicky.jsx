/**
 * When you click on this, it bounces around the screen while an excerpt from Wizard's Last Rhymes plays
 * 
 */

import React, {useState} from 'react';
import $ from 'jquery';

const SpartaClicky = () => {
    const [bouncing, toggleBounce] = useState(false)
    async const  bounce = () => {
        toggleBounce(true);
        //Do a bunch of jquery, wait for thing to come back to original position, then set bouncing to false again
    }
    return (
        <div className={`sparta ${bouncing ? 'bouncing' : ''}`} id="sparta-clicky" onClick={bouncing ? () => false: bounce}>

        </div>
    )
}

export default SpartaClicky;