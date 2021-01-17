import React from 'react'
import {
  ChakraProvider,
  Box,
  Image,
  Flex
} from '@chakra-ui/react'
import GlobalStyle from './components/GlobalStyle'
import Orders from './components/Orders'
import logo from './images/Logo.svg'

const App = () => {
  return (
    <ChakraProvider>
      <GlobalStyle/>
      <Flex
        m="4rem auto"
        p="0 2rem"
        w="100%"
        maxWidth="740px"
        align="center"
        justify="center"
        direction="column"
      >
        <Image src={logo} alt="EzOrders"/>
        <Orders/>
      </Flex>
    </ChakraProvider>
  )
}

export default App
