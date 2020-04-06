import React, {useState, useEffect} from 'react';
import './App.scss';
import Nav from './Nav';
import MainContent from './MainContent';
import Background from './Background';
import Intro from './Intro';
import AbTestToggle from './widgets/AbTestToggle';

const App = () =>{
  const [page, setPage] = useState(0);
  const [testGroup, setTestGroup] = useState("b")

  const navigate = (e) => {
    const index = parseInt(e.target.getAttribute("name"));
    setPage(index)
  }  
  return ( 
    <div className="App" id="App" >
       <Intro testGroup={testGroup}/>
       <Nav navigate={navigate} page={page} testGroup={testGroup}/>
       <MainContent page={page} testGroup={testGroup}/> 
       <AbTestToggle toggle={setTestGroup}/>
       <Background />
    </div>
  );
}

export default App;
