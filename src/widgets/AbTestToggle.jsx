import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

/**
 * Expected Props 
 *
 * toggle: Function which mutates the state of the parent component, otherwise a noop
 * 
 * TODO: Get propTypes up in here.
 * 
 * @param {*} props 
 */
const AbTestToggle = props => {
    const {toggle, testGroup} = props;
    const [hidden, toggleHidden] = useState(false)

    const handleClick = () => {
        toggleHidden(hidden ? false : true)
    }

   
    return (
      <div className={`ab-test-toggle ${hidden ? "collapsed" : ""}`}>
        <div onClick={handleClick}>
          {hidden ? <FaArrowAltCircleRight /> : <FaArrowAltCircleLeft />}
        </div>
        {!hidden && (
          <button onClick={toggle}>
            {testGroup === "a" ? "Version A" : "Version B"}
          </button>
        )}
      </div>
    );
}

export default AbTestToggle;