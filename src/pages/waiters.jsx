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
import { ReactComponent as Back } from '../assets/back.svg'

const Waiters = () => {
  return (
    <Flex direction='column' mt='3rem' maxWidth='565px' w='100%'>
      <Flex align='center' justify='space-between'>
        <Heading mr='3rem' fontSize='1.5rem'>
          Waiters
        </Heading>
        <Flex align='center' justify='center'>
          <Text mr='0.5rem'>Back to home</Text>
          <Link as={ReactLink} to={'/'}>
            <Back />
          </Link>
        </Flex>
      </Flex>
      <Heading alignSelf='center' fontSize='1.5rem' mt='2rem'>
        New Order
      </Heading>
      <Flex direction='column' mt='2rem' justify='center'>
        <Text fontSize='1.2rem'>Table number</Text>
        <Input placeholder='Table number' />
      </Flex>
      <Flex direction='column' mt='2rem' justify='center'>
        <Text fontSize='1.2rem'>Order</Text>
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
