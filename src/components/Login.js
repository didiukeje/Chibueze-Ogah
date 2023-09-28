import React, { useState } from 'react';
import { Box, Input, Button, Heading, Center } from '@chakra-ui/react';
import credentials from '../data/credentials.json';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Find user in the credentials array
    const user = credentials.find((u) => u.email === email && u.password === password);

    if (user) {
      // Navigate to the main page if login is successful
      navigate('/main');
    } else {
      // Handle invalid login
      alert('Invalid email or password. Please try again.');
    }
  };
  
  return (
    <Box
      backgroundImage="url('background-image.jpg')" 
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      // filter="blur(1px)"  Apply a blur effect to the background image
     >
      <Center
         p={4}
         backgroundColor="whiteAlpha.800"
         borderRadius="md"
         flexDirection="column"
       >
        <Heading 
          size="lg" 
          mb={4} 
          fontSize="20px" 
          color="white"
        >
          Login to explore to find what your <br /> city girl has in stock for you
        </Heading>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb={2}
          width="300px"
          height="40px"
          fontSize="30px"
          outline="0"
          boxShadow="none"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          width="300px"
          height="40px"
          fontSize="30px"
          margin="5px"
          outline="0"
          boxShadow="none"
        />
        <Button 
          onClick={handleLogin} 
          background="#5c4c47" 
          width="300px" 
          height="45px"
          color="white"
          borderRadius="3px"
          fontSize="30px"
          _hover="{color: #4a2315}"
          boxShadow="none"
        >
          Login
        </Button>
      </Center>
    </Box>
  );
}

export default Login;
