import React, {useState, useEffect} from 'react';
import './App.scss';
import Nav from './Nav';
import MainContent from './MainContent';
import Background from './Background';
import Intro from './Intro';

const App = () =>{
  const [page, setPage] = useState(0);

  const navigate = (e) => {
    const index = parseInt(e.target.getAttribute("name"));
    setPage(index)
  }  
  return ( 
    <div className="App" id="App" >
       <Intro />
       <Nav navigate={navigate} page={page}/>
       <MainContent page={page}/> 
       <Background />
    </div>
  );
}

export default App;
