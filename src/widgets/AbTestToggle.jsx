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
    const {toggle} = props;
    const [hidden, toggleHidden] = useState(false)
    // Not sure about the nomenclature here
    const [tooltips, toggleTooltips] = useState({"arrow": true, "switch": false})

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
          <Tooltip color="black" background="white" direction="under"/>
        </div>
      
            <button className={`toggle-btn  ${hidden ? 'collapsed' : ''}`} onClick={toggle} name="switch">
              Switch
            </button>
    
      </div>
    );
}

export default AbTestToggle;


/**
 * 
 *  hidden={!tooltips["arrow"]}
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