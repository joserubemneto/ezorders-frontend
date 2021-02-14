import React from 'react'
import Orders from '../components/Orders'
import { Flex, Link, Text, Heading, Button } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { Link as ReactLink } from 'react-router-dom'
import { ReactComponent as Back } from '../assets/back.svg'

const Kitchen = () => {
  return (
    <Flex direction='column' mt='3rem'>
      <Flex align='center' justify='space-between'>
        <Heading mr='3rem' fontSize='1.5rem'>
          Kitchen
        </Heading>
        <Flex align='center' justify='center'>
          <Text mr='0.5rem'>Back to home</Text>
          <Link as={ReactLink} to={'/'}>
            <Back />
          </Link>
        </Flex>
      </Flex>
      <Flex align='center' justify='center' mt='2rem'>
        <Button
          fontSize='1rem'
          position='relative'
          mr='0.5rem'
          border='2px solid #0A100D'
          color='#0A100D'
          _hover={{ bg: '#2AC769' }}
          _focus={{ outline: 'none', bg: '#2AC769' }}
          _before={{
            content: `''`,
            position: 'absolute',
            top: '0%',
            width: '100%',
            height: '100%',
            bgColor: '#0A100D',
            zIndex: -1,
            transition: '.7s ease',
          }}>
          <Text>Clean done orders</Text>
          <CheckIcon borderRadius='100px' p='0.5rem' w='35px' h='35px' />
        </Button>
      </Flex>
      <Orders />
    </Flex>
  )
}

export default Kitchen
