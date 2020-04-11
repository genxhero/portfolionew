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
    const {toggle} = props;
    const [hidden, toggleHidden] = useState(false)

    const handleClick = () => {
        toggleHidden(hidden ? false : true)
    }

   
    return (
      <div className={`ab-test-toggle ${hidden ? "collapsed" : ""}`}>
        <div className="show-hide-arrow" onClick={handleClick}>
          {hidden ? <FaArrowAltCircleRight /> : <FaArrowAltCircleLeft />}
        </div>
      
            <button className={`toggle-btn  ${hidden ? 'collapsed' : ''}`} onClick={toggle}>
              Switch
            </button>
    
      </div>
    );
}

export default AbTestToggle;


/**
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