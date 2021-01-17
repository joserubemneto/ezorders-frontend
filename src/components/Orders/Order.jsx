import React from 'react'
import { Flex, Box, Heading, Text, Select } from '@chakra-ui/react'

const Order = ({ status, description, table, id }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      borderRadius="5px"
      boxShadow="0px 8px 8px rgba(0, 0, 0, 0.1)"
      p="1rem"
      bg={
        status === "DONE" && "#2AC769" ||
        status === "PREPARING" && "#F6A609"||
        "#FFF"
      }
    >
      <Flex 
        w="100%"
        justifyContent="space-between"
        align="center"
      >
        <Heading
          fontWeight="400"
          fontSize="1.125rem"
          color={ status !== "PENDING" && "#FFF" }
          mr="1rem"
        >
          Pedido <Text display="inline" fontWeight="bold">#{id.substr(0,6)}</Text>
        </Heading>
        <Box
          p="0.25rem 0.5rem"
          borderRadius="5px"
          bg={ status !== "PENDING" ? "#FFF" : "#CCC" }
        >
          <Text
            fontWeight="bold"          
            color={ status === "PENDING" && "#FFF" }
          >
            Mesa #{table}
          </Text>
        </Box>
      </Flex>

      <Text 
        mt="1rem"
        fontSize="0.875rem"
        fontWeight="400"
        color={ status !== "PENDING" && "#FFF" }
      >
        {description}
      </Text>

      <Select
        value={status}
        mt="0.5rem"
        bg={"#FFF"}
        border={ status !== "PENDING" ? "none" : "1px solid #CCC"}
      >
        <option value="PENDING">Pending</option>
        <option value="PREPARING">Preparing</option>
        <option value="DONE">Done</option>
      </Select>
    </Flex>
  )
}

export default Order
