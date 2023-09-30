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
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Center
         p={4}
         backgroundColor="whiteAlpha.800"
         borderRadius="md"
         flexDirection="column"
         width={['90%', '70%', '50%']} // Adjust width for mobile responsiveness
       >
        <Heading 
          size="lg" 
          mb={4} 
          fontSize={['20px', '24px', '28px']} 
          color="white"
          textAlign="center" // Center text on mobile
        >
          Login to explore to find what your city girl has in stock for you
        </Heading>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb={2}
          width={["100%", "100%", "300px"]}
          height="40px"
          fontSize={['16px', '20px']}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          width={["100%", "100%", "300px"]}
          height="40px"
          fontSize={['16px', '20px']} 
          margin="5px"
        />
        <Button 
          onClick={handleLogin} 
          background="#5c4c47" 
          width={["100%", "100%", "300px"]}
          height="45px"
          color="white"
          borderRadius="3px"
          fontSize={['18px', '22px']} 
          _hover={{ background: '#4a2315', color: 'white' }}
          mt={2} 
        >
          Login
        </Button>
      </Center>
    </Box>
  );
}

export default Login;
