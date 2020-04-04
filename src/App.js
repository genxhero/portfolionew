import React, {useState} from 'react';
import './App.scss';
import Nav from './Nav';
import MainContent from './MainContent';
import BACKDROPS from './constants/backdrops';
import {getRandomInt} from './helpers/helpers';

const App = () =>{
  const [page, setPage] = useState(0)
  const backdrop = BACKDROPS[getRandomInt(0, BACKDROPS.length)]
  console.log(backdrop)
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
