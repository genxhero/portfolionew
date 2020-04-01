import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Projects';

const App = () =>{
  const PAGES = [<Projects />];

  return (
    <div className="App">
       <Projects />
    </div>
  );
}

export default App;
