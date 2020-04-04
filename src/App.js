import React, {useState, useEffect} from 'react';
import './App.scss';
import Nav from './Nav';
import MainContent from './MainContent';
import Background from './Background';

const App = () =>{
  const [page, setPage] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval((BACKDRROPS) => {
  //     let newBackdrop = backdrop === (BACKDROPS.length -1 ) ? 0 : (backdrop + 1);
  //     cycleBackdrop(newBackdrop);
  //     $("App").fadeIn();
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [backdrop])


  const navigate = (e) => {
    const index = parseInt(e.target.getAttribute("name"));
    setPage(index)
  }  
  return ( 
    <div className="App" id="App" >
       <Nav navigate={navigate} page={page}/>
       <MainContent page={page}/> 
       <Background />
    </div>
  );
}

export default App;
