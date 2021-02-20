import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import { SimpleGrid, Flex, Text, Button } from '@chakra-ui/react'
import Order from './Order'

const Orders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await fetch('https://ezorders--api.herokuapp.com/orders')
      const orders = await response.json()
      setOrders(orders)
    })()

    const socket = socketIOClient('https://ezorders--api.herokuapp.com', {
      transports: ['websocket'],
    })

    socket.on('newOrder', (order) => {
      setOrders((prevState) => [order, ...prevState])
    })

    socket.on('statusChange', (updateOrder) => {
      setOrders((prevState) =>
        prevState.map((order) =>
          order._id === updateOrder._id ? updateOrder : order
        )
      )
    })

    socket.on('cleanDoneOrders', (currentOrders) => {
      setOrders(currentOrders)
    })
  }, [])

  const handleStatusChange = (order) => {
    return ({ target: { value } }) => {
      fetch(`https://ezorders--api.herokuapp.com/orders/${order._id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: value }),
      })
    }
  }

  const clearDoneOrders = async () => {
    let doneOrders = []
    orders.map((order) => {
      if (order.status === 'DONE') doneOrders.push(order)
    })
    fetch('https://ezorders--api.herokuapp.com/orders', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orders: doneOrders }),
    })
  }

  return (
    <>
      <Flex align='center' justify='center' mt='2rem'>
        <Button
          fontSize='1rem'
          position='relative'
          mr='0.5rem'
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
          _active={{ bg: '#2AC769' }}
          onClick={clearDoneOrders}>
          <Text>Clear done orders</Text>
        </Button>
      </Flex>
      <SimpleGrid mt='3rem' columns={[1, 1, 2, 2]} gap='2rem'>
        {orders.map((order) => (
          <Order
            key={order._id}
            status={order.status}
            id={order._id}
            table={order.table}
            description={order.description}
            onChange={handleStatusChange(order)}
          />
        ))}
      </SimpleGrid>
    </>
  )
}

export default Orders
