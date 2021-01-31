import React from 'react'
import { ChakraProvider, Image, Flex } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import Home from './pages/home'
import Waiters from './pages/waiters'
import Kitchen from './pages/kitchen'
import logo from './images/Logo.svg'

const App = () => {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Flex
        m='4rem auto'
        p='0 2rem'
        w='100%'
        maxWidth='740px'
        align='center'
        justify='center'
        direction='column'>
        <Image src={logo} alt='EzOrders' />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/waiters'>
              <Waiters />
            </Route>
            <Route path='/kitchen'>
              <Kitchen />
            </Route>
          </Switch>
        </Router>
      </Flex>
    </ChakraProvider>
  )
}

export default App
