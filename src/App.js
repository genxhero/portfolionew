import React, {useState, useEffect} from 'react';
import './App.scss';
import Nav from './Nav';
import MainContent from './MainContent';
import BACKDROPS from './constants/backdrops';
import {getRandomInt} from './helpers/helpers';

const App = () =>{
  const [page, setPage] = useState(0)
  const [backdrop, cycleBackdrop] = useState(BACKDROPS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      cycleBackdrop(BACKDROPS[getRandomInt(0, BACKDROPS.length)])
    }, 15000);
    return () => clearInterval(interval);
  }, [])


  const navigate = (e) => {
    const index = parseInt(e.target.getAttribute("name"));
    setPage(index)
  }

  return ( 
    <div className="App" style={{"backgroundImage": `url(${backdrop})`}}>
       <Nav navigate={navigate} page={page}/>
       <MainContent page={page}/> 
    </div>
  );
}

export default App;
