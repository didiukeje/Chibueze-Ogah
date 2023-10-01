import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Confetti from './components/Confetti';
import ConfettiAnimation from './components/ConfettiAnimation';

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/confetti" element={<Confetti />} />
            <Route path="/confettiAnimation" element={<ConfettiAnimation />} />
        </Routes>
        </Router>
    );
  }
  
  export default App;
  
  