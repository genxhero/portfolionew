/**
 * When you click on this, it bounces around the screen while an excerpt from Wizard's Last Rhymes plays
 * 
 */

import React, {useState} from 'react';
import $ from 'jquery';

const SpartaClicky = () => {
    const [bouncing, toggleBounce] = useState(false)
    const bounce = () => {
        toggleBounce(true);
    }
    return (
        <div className={`sparta ${bouncing ? 'bouncing' : ''}`} id="sparta-clicky" onClick={bounce}>

        </div>
    )
}

export default SpartaClicky;