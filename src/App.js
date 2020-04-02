import React, {useState} from 'react';
import './App.scss';
import Nav from './Nav';
import MainContent from './MainContent';

const App = () =>{
  const [page, setPage] = useState(1)

  const navigate = (e) => {
    const index = parseInt(e.target.getAttribute("name"));
    setPage(index)
  }

  return (
    <div className="App">
       <Nav navigate={navigate} page={page}/>
       <MainContent page={page}/> 
    </div>
  );
}

export default App;
