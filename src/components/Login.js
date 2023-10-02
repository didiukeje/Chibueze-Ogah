import React, { useState } from 'react';
import { Box, Input, Button, Heading, Center } from '@chakra-ui/react'; // Import Flex component
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
      position="relative" // Set position to relative for the background container
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      {/* Create an overlay for the background image with a blur effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage="url('background-image.jpg')"
        filter="blur(8px)" // Adjust the blur intensity as needed
        zIndex="-1" // Place it behind the content
      />
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
          textAlign="center"
          width="350px"
        >
          Login to explore what your City Girl has in stock for you!
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
