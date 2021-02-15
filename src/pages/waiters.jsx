import React, { useState } from 'react'
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
  const [table, setTable] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async () => {
    if (table !== '' && description !== '') {
      setError(false)
      fetch('http://localhost:3001/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ table: table, description: description }),
      })
      setTable('')
      setDescription('')
    } else {
      setError(true)
    }
  }

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
        <Input
          type='number'
          placeholder='Table number'
          value={table}
          onChange={({ target }) => setTable(target.value)}
        />
      </Flex>
      <Flex direction='column' mt='2rem' justify='center'>
        <Text fontSize='1.2rem'>Order</Text>
        <Textarea
          placeholder='Order details'
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        {error && (
          <Text mt='1rem' color='#A30D1D'>
            Please, fill all fields!
          </Text>
        )}
      </Flex>
      <Button
        bg='none'
        overflow='hidden'
        border='2px solid #0A100D'
        color='#0A100D'
        w='100%'
        fontWeight='bold'
        mt='1.5rem'
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
        onClick={handleSubmit}
        _focus={{ outline: 'none' }}
        _active={{ bg: '#2AC769' }}>
        Submit Order
      </Button>
    </Flex>
  )
}

export default Waiters
