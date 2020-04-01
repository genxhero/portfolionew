import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import MainContent from './MainContent';

const App = () =>{
  const [page, setPage] = useState(0)
  const navigate = (e) => {
    const index = e.currentTarget.getAttrribute("name")
    setPage(index)
  }
  return (
    <div className="App">
       <Nav navigate={navigate}/>
       <MainContent page={page}/> 
    </div>
  );
}

export default App;
