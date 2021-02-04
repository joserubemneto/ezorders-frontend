import React from 'react'
import {
  Flex,
  Text,
  Textarea,
  Input,
  Heading,
  Button,
  Link,
} from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

const Waiters = () => {
  return (
    <Flex direction='column' justify='center' align='center' mt='3rem'>
      <Link as={ReactLink} to='/'>
        Back to home
      </Link>
      <Heading fontSize='1.5rem'>New Order</Heading>
      <Flex direction='column' mt='2rem' justify='center'>
        <Text fontSize='1.5rem'>Table number</Text>
        <Input placeholder='Table number' />
      </Flex>
      <Flex direction='column' mt='2rem' justify='center'>
        <Text fontSize='1.5rem'>Order</Text>
        <Textarea placeholder='Order details' />
      </Flex>
      <Button
        bg='#C52233'
        w='100%'
        color='#FFF'
        fontWeight='normal'
        mt='1.5rem'
        _hover={{ fontWeight: 'bold' }}>
        Submit Order
      </Button>
    </Flex>
  )
}

export default Waiters
