import React, {useState, useEffect} from 'react';
import './App.scss';
import Nav from './Nav';
import MainContent from './MainContent';
import BACKDROPS from './constants/backdrops';
import {getRandomInt} from './helpers/helpers';

const App = () =>{
  const [page, setPage] = useState(0)
  const [backdrop, cycleBackdrop] = useState(0);

  useEffect(() => {
    const interval = setInterval((BACKDRROPS) => {
      let newBackdrop = backdrop === (BACKDROPS.length -1 ) ? 0 : (backdrop + 1);
      cycleBackdrop(newBackdrop);
    }, 10000);
    return () => clearInterval(interval);
  }, [backdrop])


  const navigate = (e) => {
    const index = parseInt(e.target.getAttribute("name"));
    setPage(index)
  }  
  return ( 
    <div className="App" style={{"backgroundImage": `url(${BACKDROPS[backdrop]})`}}>
       <Nav navigate={navigate} page={page}/>
       <MainContent page={page}/> 
    </div>
  );
}

export default App;
