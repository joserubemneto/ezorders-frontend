import React from 'react'
import Orders from '../components/Orders'
import { Flex, Link, Text, Heading } from '@chakra-ui/react'
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
      <Orders />
    </Flex>
  )
}

export default Kitchen
