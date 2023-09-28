// import React from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Heading,
//   Text,
//   Button,
//   Image,
//   Flex
// } from '@chakra-ui/react';

// function Confetti() {
//   return (
//     <ChakraProvider>
//       {/* Section 1 */}
//       <Box
//         backgroundColor="#5c4c47"
//         color="#fff"
//         minHeight="100vh"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Heading fontSize="3xl" mb="4">
//           Happy Birthday, My Love!
//         </Heading>
//         <Text fontSize="lg" mb="8">
//           You make every moment special. Here's to a day as wonderful as you are.
//         </Text>
//         <Image
//           src="/fave-modified.png" // Replace with your image URL
//           alt="Birthday Image"
//           borderRadius="lg"
//           boxSize="300px"
//           objectFit="cover"
//           mb="4"
//         />
//         <Button
//           backgroundColor="#8f756b"
//           color="#fff"
//           _hover={{ backgroundColor: '#644c46' }}
//         >
//           Watch More
//         </Button>
//       </Box>

//       {/* Section 2 */}
//       <Box
//         backgroundColor="#8f756b"
//         color="#fff"
//         minHeight="100vh"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Flex>
//           <Box flexDirection="column">
//             <Heading fontSize="3xl" mb="4">
//               You're the Best!
//             </Heading>
//             <Text fontSize="lg" mb="8">
//               Your love brightens my world. Cheers to many more happy years together.
//             </Text>
//           </Box>
//         <Image
//           src="/bueze.jpg" // Replace with your image URL
//           alt="Birthday Image"
//           borderRadius="lg"
//           boxSize="400px"
//           objectFit="cover"
//           mt=""
//         />
//         </Flex>
//         <Button
//           backgroundColor="#5c4c47"
//           color="#fff"
//           _hover={{ backgroundColor: '#1c0d06' }}
//         >
//           Watch More
//         </Button>
//       </Box>

//       {/* Section 3 */}
//       <Box
//         backgroundColor="#5c4c47"
//         color="#fff"
//         minHeight="100vh"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Heading fontSize="3xl" mb="4">
//           You Deserve the World!
//         </Heading>
//         <Text fontSize="lg" mb="8">
//           Your smile is my greatest gift. Wishing you the happiest of birthdays.
//         </Text>
//         <Image
//           src="/bueze.jpg" // Replace with your image URL
//           alt="Birthday Image"
//           borderRadius="lg"
//           boxSize="300px"
//           objectFit="cover"
//           mb="4"
//         />
//         <Button
//           backgroundColor="#8f756b"
//           color="#fff"
//           _hover={{ backgroundColor: '#644c46' }}
//         >
//           Watch More
//         </Button>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default Confetti;

import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      {/* Section 1 */}
      <Box
        backgroundColor="#5c4c47"
        color="#fff"
        minHeight="100vh"
        padding="20px" // Add padding for mobile
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center" // Center text on mobile
      >
        <Heading fontSize={['2xl', '3xl']} mb="4"> {/* Adjust font size for mobile */}
          Happy Birthday, My Love!
        </Heading>
        <Text fontSize={['md', 'lg']} mb="8"> {/* Adjust font size for mobile */}
          You make every moment special. Here's to a day as wonderful as you are.
        </Text>
        <Image
          src="/fave-modified.png"
          alt="Birthday Image"
          borderRadius="lg"
          boxSize={['200px', '300px']} // Adjust image size for mobile
          objectFit="cover"
          mb="4"
        />
        <Button
          backgroundColor="#8f756b"
          color="#fff"
          _hover={{ backgroundColor: '#644c46' }}
        >
          Watch More
        </Button>
      </Box>

      {/* Section 2 */}
      <Box
        backgroundColor="#8f756b"
        color="#fff"
        minHeight="100vh"
        padding="20px" // Add padding for mobile
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center" // Center text on mobile
      >
        <Heading fontSize={['2xl', '3xl']} mb="4"> {/* Adjust font size for mobile */}
          You Deserve the World!
        </Heading>
        <Text fontSize={['md', 'lg']} mb="8"> {/* Adjust font size for mobile */}
          Your smile is my greatest gift. Wishing you the happiest of birthdays.
        </Text>
        <Image
          src="/bueze.jpg"
          alt="Birthday Image"
          borderRadius="lg"
          boxSize={['200px', '300px']} // Adjust image size for mobile
          objectFit="cover"
          mb="4"
        />
        <Button
          backgroundColor="#8f756b"
          color="#fff"
          _hover={{ backgroundColor: '#644c46' }}
        >
          Watch More
        </Button>
      </Box>
      {/* Section 3 */}
      <Box
        backgroundColor="#5c4c47"
        color="#fff"
        minHeight="100vh"
        padding="20px" // Add padding for mobile
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center" // Center text on mobile
      >
        <Heading fontSize={['2xl', '3xl']} mb="4"> {/* Adjust font size for mobile */}
          You Deserve the World!
        </Heading>
        <Text fontSize={['md', 'lg']} mb="8"> {/* Adjust font size for mobile */}
          Your smile is my greatest gift. Wishing you the happiest of birthdays.
        </Text>
        <Image
          src="/bueze.jpg"
          alt="Birthday Image"
          borderRadius="lg"
          boxSize={['200px', '300px']} // Adjust image size for mobile
          objectFit="cover"
          mb="4"
        />
        <Button
          backgroundColor="#8f756b"
          color="#fff"
          _hover={{ backgroundColor: '#644c46' }}
        >
          Watch More
        </Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
