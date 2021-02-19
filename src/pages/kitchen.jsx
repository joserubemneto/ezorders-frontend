import React from 'react'
import Orders from '../components/Orders'
import { Flex, Link, Text, Heading } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { ReactComponent as Back } from '../assets/back.svg'

const Kitchen = () => {
  return (
    <Flex direction='column' mt='3rem'>
      <Flex align='center' justify='space-between'>
        <Flex align='center' justify='center'>
          <Link as={ReactLink} to={'/'} mr='0.5rem'>
            <Back />
          </Link>
          <Text>Back to home</Text>
        </Flex>
        <Heading mr='3rem' fontSize='2rem'>
          Kitchen
        </Heading>
      </Flex>
      <Orders />
    </Flex>
  )
}

export default Kitchen
