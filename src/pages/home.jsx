import React from 'react'
import { Flex, Heading, Link, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  return (
    <Flex
      mt='6rem'
      justify='center'
      align='center'
      fontWeight='bold'
      textDecoration='none'>
      <Link as={RouterLink} to='/waiters' _hover={{ textDecoration: 'none' }}>
        <Button
          fontSize='2rem'
          position='relative'
          padding='1.5rem 2rem'
          mr='3rem'
          bg='none'
          overflow='hidden'
          border='2px solid #0A100D'
          color='#0A100D'
          _focus={{ outline: 'none' }}
          _hover={{
            color: '#FFF',
            border: '2px solid #2AC769',
            _before: {
              width: '100%',
            },
          }}
          _before={{
            content: `''`,
            position: 'absolute',
            top: '0%',
            width: '0',
            height: '100%',
            bgColor: '#2AC769',
            zIndex: -1,
            transition: '.5s ease',
          }}
          _active={{ bg: '#2AC769' }}>
          Waiters
        </Button>
      </Link>
      <Link as={RouterLink} to='/kitchen' _hover={{ textDecoration: 'none' }}>
        <Button
          fontSize='2rem'
          position='relative'
          padding='1.5rem 2rem'
          bg='none'
          overflow='hidden'
          border='2px solid #0A100D'
          color='#0A100D'
          _focus={{ outline: 'none' }}
          _hover={{
            color: '#FFF',
            border: '2px solid #2AC769',
            _before: {
              width: '100%',
            },
          }}
          _before={{
            content: `''`,
            position: 'absolute',
            top: '0%',
            width: '0',
            height: '100%',
            bgColor: '#2AC769',
            zIndex: -1,
            transition: '.5s ease',
          }}
          _active={{ bg: '#2AC769' }}>
          Kitchen
        </Button>
      </Link>
    </Flex>
  )
}

export default Home
