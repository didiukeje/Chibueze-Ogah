// import React from 'react';
// import { useState, Input } from 'react';
// import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Flex } from '@chakra-ui/react'


// const Login = ()=> {
//     const [input, setInput] = useState('')
  
//     const handleInputChange = (e) => setInput(e.target.value)
  
//     const isError = input === ''
//     return (
//         <Flex>
//         <FormControl isInvalid={isError}>
//             <FormLabel>Email</FormLabel>
//             <Input type="email" value={input} onChange={handleInputChange}/>
//             {!isError ? (
//                     <FormHelperText>
//                     Enter the special email you were given by Didi.
//                     </FormHelperText>
//                 ) : (
//                 <FormErrorMessage>Your speacial email is required.</FormErrorMessage>
//             )}
//         </FormControl>
//         </Flex>
//     );
// };

// export default Login;