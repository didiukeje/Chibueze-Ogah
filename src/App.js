// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BirthdayContent from './components/BirthdayContent';
import {Login} from './components/Login';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={HomePage}/>
        <Route exact path='/Login' Component={Login}/>
        <Route exact path='/BirthdayContent' Component={BirthdayContent}/>
      </Routes>
    </Router>
  );
}

export default App;
