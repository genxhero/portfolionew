/**
 * When you click on this, it bounces around the screen while an excerpt from Wizard's Last Rhymes plays
 * 
 */

import React, {useState} from 'react';

const SpartaClicky = () => {
    const [bouncing, toggleBounce] = useState(false)
    const bounce = () => {

    }
    return (
        <div className="sparta" onClick={bounce}>

        </div>
    )
}

export default SpartaClicky;