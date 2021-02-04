import React from 'react'
import Orders from '../components/Orders'
import { Flex, Link, Box } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

const Kitchen = () => {
  return (
    <Flex direction='column'>
      <Box>
        <Link as={ReactLink} to={'/'}>
          Back to Home
        </Link>
      </Box>
      <Orders />
    </Flex>
  )
}

export default Kitchen
