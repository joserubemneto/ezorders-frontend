import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SimpleGrid } from '@chakra-ui/react'
import Order from './Order'

const Orders = () => {
  const [ orders, setOrders ] = useState([])
  useEffect( () => {
    (async () => {
      const orders = await axios.get("http://localhost:3001/orders")
      setOrders(orders.data)
    })()
  })

  return (
    <SimpleGrid mt="3rem" columns={[1, 1, 2, 2]} gap="2rem">
      {orders.map((order) => (
        <Order 
          key={order._id} 
          status={order.status}
          id={order._id} 
          table={order.table}
          description={order.description}/>
      ))}
    </SimpleGrid>
  )
}

export default Orders
