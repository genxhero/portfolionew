import React, {useState, useEffect} from 'react';
import './App.scss';
import Nav from './Nav';
import MainContent from './MainContent';
import Background from './Background';
import Intro from './Intro';
import AbTestToggle from './widgets/AbTestToggle';
import { TransitionGroup, CSSTransition} from "react-transition-group";


const App = () =>{
  const [page, setPage] = useState(0);
  const [testGroup, setTestGroup] = useState("b")
  const lever = new Audio(
    "https://reactportfolio-sfx.s3-us-west-1.amazonaws.com/typewriter-line-break-1.wav"
  );


  /**
   * If more tests are added, will swap to a case statement.
   */
  const toggleTestGroup = (e) => {
    e.preventDefault();
    lever.play();
    setPage(0)
    if (testGroup === "a") {
      setTestGroup("b")
    } else {
      setTestGroup("a")
    }
  }

  const navigate = (e) => {
    const index = parseInt(e.target.getAttribute("name"));
    setPage(index)
  }  
  return ( 

      <TransitionGroup>
          <CSSTransition
            key={testGroup}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames={"scroll"}
          >
        <div className="App" id="App" >
          <Intro testGroup={testGroup}/>
          <Nav navigate={navigate} page={page} testGroup={testGroup}/>
          <MainContent page={page} testGroup={testGroup}/> 
          <AbTestToggle toggle={toggleTestGroup} testGroup={testGroup}/>
          <Background />
        </div>
     </CSSTransition>
       </TransitionGroup>
  );
}

export default App;
