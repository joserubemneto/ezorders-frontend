import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Box
        fontFamily="Roboto, sans-serif"
        bg="#EEE"
        fontWeight="500"
        color="0A100D"
      >
        Hello Worldd
      </Box>
    </ChakraProvider>
  )
}

export default App
