import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Projects';
import Nav from './Nav';
import MainContent from './MainContent';

const App = () =>{

  return (
    <div className="App">
       <Nav />
       <MainContent /> 
    </div>
  );
}

export default App;
