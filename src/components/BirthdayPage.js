import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 

function BirthdayPage() {
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
          Happy Birthday, CITY BOY!
        </Heading>
        <Text fontSize={['18px', '24px']} mb="8" width="100%"> {/* Adjust font size for mobile */}
          You make every moment special. Here's to a day as wonderful as you are.
          Chibueze Pascal Ogah, you are welcome to this website specially built for you by your 
          one and only CITY GIRL. Sit back and read with smiles because I'm sure you're definitely
          smiling with a big grin on your face. And Oh, click the link below to watch your CITY BOY video
          as the one and only City Boy I know who is a fashionista and a Hot Boy.
        </Text>
        <Image
          src="/fave-modified.png"
          alt="Birthday Image"
          borderRadius="lg"
          boxSize={['200px', '300px']} // Adjust image size for mobile
          objectFit="cover"
          mb="4"
        />
        <Link to="https://drive.google.com/file/d/1miM45jNMRu1KRhgvOAcTGcujtnJvLdYf/view?usp=drive_link">
          <Button
            backgroundColor="#8f756b"
            color="#fff"
            _hover={{ backgroundColor: '#644c46' }}
          >
            Watch More
          </Button>
        </Link>
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
          Your kind heart and persona is exceptional!
        </Heading>
        <Text fontSize={['18px', '24px']} mb="8"> {/* Adjust font size for mobile */}
          I will start with the fact that you put efforts in making sure everyone around
          you ger to feel your love. You've shown me kindness even whenever you are not in the right 
          state of mind. I have made several efforts to make sure I put in serious efforts to commend
          you whenever I get the opportunity to. Thank you for always pushing me to do greater things.
          However I curated a list of the moments where you have
          shown extreme kindness. Click the link below to check it out.
        </Text>
        <Image
          src="/church.JPG"
          alt="Birthday Image"
          borderRadius="lg"
          boxSize={['200px', '300px']} // Adjust image size for mobile
          objectFit="cover"
          mb="4"
        />
        <Link to="https://drive.google.com/file/d/1k0e30atw6vY_2rSxlcKkbOI83mbFtM90/view?usp=drive_link">
        <Button
          backgroundColor="#5c4c47"
          color="#fff"
          _hover={{ backgroundColor: '#644c46' }}
        >
          Watch More
        </Button>
        </Link>
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
        <Heading fontSize={['2xl', '3xl']} mb="4" mt="80px"> {/* Adjust font size for mobile */}
          You Have been a romantic man and a homely man!
        </Heading>
        <Text fontSize={['18px', '24px']} mb="8"> {/* Adjust font size for mobile */}
          When we started talking, I thought you had a stone heart because I felt you were trying
          to form toxic masculinity. As time goes by, you softened us and became extremely sweet and
          I guess that it was then I fell LOL! Thank you for learning how to becaome a sweet man and 
          giving fire compliments. Your compliments always get to me, you improvise every single time. 
          You also a great cook and unfortunatley, I haven't eaten your food before but nevertheless 
          weldone Chef Bezos. Below is a link to a curated moments of when you have given me fire 
          compliments and the amazing meals you have made. You still owe me pasta and sauce LOL!
        </Text>
        <Image
          src="/bueze.jpg"
          alt="Birthday Image"
          borderRadius="lg"
          // boxSize={['200px', '300px']} // Adjust image size for mobile
          objectFit="cover"
          mb="4"
          height={["300px", "450px"]}
          width={["200px", "300px"]}
        />
        <Link to="https://drive.google.com/file/d/10urxVCbt69-H2zPeL-GB_nVH6-Oe8Hfe/view?usp=drive_link">
        <Button
          backgroundColor="#8f756b"
          color="#fff"
          _hover={{ backgroundColor: '#644c46' }}
        >
          Watch More
        </Button>
        </Link>
      </Box>
      {/*Section 4 */}
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
          Happy Birthday and Happy Boyfriend's Day!
        </Heading>
        <Text fontSize={['18px', '24px']} mb="8"> {/* Adjust font size for mobile */}
          The past few months have been one of my happiest moments since my adult years and you have been
          quite responsible for that. Thank you for being an amazing partner and a good friend, I cherish
          every moment spent with you. You have been a hardworking and a strong-willed man and I am super 
          proud of you my hot Boi. On this new year of yours, I pray for God's blessing and favour in your life,
          you will find your destiny helper. Everything you have asked God for will be granted and exceeded.
          You will always shine in all your endeavours and all your heart desires will be fulfilled. This is 
          your year to shine and I want you to believe it. Happy Birthday my StarBoy, keep shining.
          And oh, Happy Boyfriend's Day my not-so-Boyfriend.
        </Text>
        <Image
          src="/coat.JPG"
          alt="Birthday Image"
          borderRadius="lg"
          boxSize={['200px', '300px']} // Adjust image size for mobile
          objectFit="cover"
          mb="4"
        />
        <Box>
          <Link to="https://drive.google.com/file/d/10nJPo_HkccEpCoXz0BnpXRzyMRD_oTf4/view?usp=drive_link">
            <Button
              backgroundColor="#5c4c47"
              color="#fff"
              _hover={{ backgroundColor: '#644c46' }}
              mr="20px"
            >
              Watch More
            </Button>
          </Link>
          <Link to="/confettiAnimation">
          <Button
            backgroundColor="#5c4c47"
            color="#fff"
            _hover={{ backgroundColor: '#644c46' }}
          >
           Birthday Wish
          </Button>
          </Link>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default BirthdayPage;
