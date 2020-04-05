import React from 'react';
import Projects from './Projects';
import Photos from './Photos'
import { TransitionGroup, CSSTransition} from "react-transition-group";

const PAGES = [<Projects />, <Photos />]

const MainContent = (props) => {
    const {page} = props;
    return (
      <div className="main-content">
        <TransitionGroup>
          <CSSTransition
            key={page}
            timeout={{ enter: 200, exit: 300 }}
            classNames={"fade"}
          >
            <div className="">
              {page === 0 && <Projects />}
              {page === 1 && <Photos />}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );

}

export default MainContent;

/**
 *      <TransitionGroup>
        <CSSTransition key={page} timeout={{ enter: 300, exit: 300 }}  classNames={'fade'}>
          <div className="main-content" >
            {page === 0 && <Projects />}
            {page === 1 && <Photos />}
          </div>
        </CSSTransition>
      </TransitionGroup>
 */

 /**
  *      {page === 0 && <Projects />}
        {page === 1 && <Photos />}
  */

  /**
   *   <div className="main-content" >
              {PAGES[page]}
          </div>
   */