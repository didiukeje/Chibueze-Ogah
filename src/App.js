// import React from 'react';
import { useState, Input } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BirthdayContent from './components/BirthdayContent';
// import Login from './components/Login';
// import logo from './logo.svg';
import './App.css';

function App() {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
    return (
        <Flex>
        <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={input} onChange={handleInputChange}/>
            {!isError ? (
                    <FormHelperText>
                    Enter the special email you were given by Didi.
                    </FormHelperText>
                ) : (
                <FormErrorMessage>Your speacial email is required.</FormErrorMessage>
            )}
        </FormControl>
        </Flex>
    // <Router>
    //   <Routes>
    //     <Route exact path='/' element={<HomePage />}/>
    //     <Route exact path='/Login' element={<Login />}/>
    //     <Route exact path='/BirthdayContent' element={<BirthdayContent />}/>
    //   </Routes>
    // </Router>
  );
}

export default App;
