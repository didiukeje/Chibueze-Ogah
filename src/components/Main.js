import React, { useState, useEffect } from 'react';
import { Box, Center } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

function Main() {
  const [showMessage, setShowMessage] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const showMessageHandler = () => {
    setShowMessage(true);
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="#2a1108"
    >
      <Center>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ display: showMessage ? 'block' : 'none' }}
        >
          <Box
            backgroundColor="#8f756b"
            color="white"
            padding="20px"
            borderRadius="md"
            textAlign="center"
          >
            <h1 style={{ fontSize: '24px' }}>Happy Birthday my City Boy</h1>
          </Box>
        </motion.div>
        <button onClick={showMessageHandler}>Show Message</button>
      </Center>
    </Box>
  );
}

export default Main;
