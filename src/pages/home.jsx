import React from 'react'
import { Flex, Heading, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  return (
    <Flex
      mt='6rem'
      justify='center'
      align='center'
      fontWeight='bold'
      textDecoration='underline'>
      <Link as={RouterLink} to='/waiters'>
        <Heading mr='3rem'>Waiters</Heading>
      </Link>
      <Link as={RouterLink} to='/kitchen'>
        <Heading>Kitchen</Heading>
      </Link>
    </Flex>
  )
}

export default Home
