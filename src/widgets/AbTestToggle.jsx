import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import Tooltip from './Tooltip';


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
    // Not sure about the nomenclature here
    const [tooltips, toggleTooltips] = useState({"arrow": false, "switch": false})

    const handleClick = () => {
        toggleHidden(hidden ? false : true)
    }

   
    return (
      <div className={`ab-test-toggle ${hidden ? "collapsed" : ""}`}>
        <div className="show-hide-arrow" 
             onClick={handleClick} name="arrow" 
             onMouseEnter={() => toggleTooltips({"arrow": true})}
             onMouseLeave={() => toggleTooltips({ "arrow": false })}
             >
          {hidden ? <FaArrowAltCircleRight /> : <FaArrowAltCircleLeft />}
          <Tooltip 
            hidden={!tooltips["arrow"]}
            color="black" 
            background="white" 
            direction="under" 
            message={hidden ? 'Show' : "Hide"}
            />
        </div>
      
            <button 
               className={`toggle-btn  ${hidden ? 'collapsed' : ''}`} 
               onClick={toggle} name="switch"
               onMouseEnter={() => toggleTooltips({ "switch": true })}
               onMouseLeave={() => toggleTooltips({ "switch": false })}
               >
              Switch
            </button>
        <Tooltip
          hidden={!tooltips["switch"]}
          color="black"
          background="white"
          direction="under"
          message={`Two versions of this page were made. You are in test group "${testGroup.toUpperCase()}". Click the button to change test groups and switch between page layouts.`}
        />
      </div>
    );
}

export default AbTestToggle;


/**
 * 
 *    
 *  <TransitionGroup>
          <CSSTransition
            key={hidden}
            timeout={{ enter: 300, exit: 300 }}
            classNames={"fade"}
          >
            <div className="">
              {page === 0 && <Projects />}
              {page === 1 && <Photos />}
              {(page === 2 && testGroup === "b") && <AboutMe />}
            </div>
          </CSSTransition>
        </TransitionGroup>
 */