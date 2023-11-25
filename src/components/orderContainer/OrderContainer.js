import React, { useEffect, useState } from 'react'
import Order from '../order/Order'
import axios from '../../api/axios'
import './orderContainer.css'

function OrderContainer() {

    const [orders, setOrders] = useState(null)
    const [changeOrders, setChangeOrder] = useState(false)
    
     useEffect(() => {

    async function fetchOrders() {
       try {
           const res = await axios.get('/user/orders')
         //  console.log(res.data);
           setOrders(res.data)
           
       } catch (error) {
          console.log(error.response.data);
       }
    }
    fetchOrders()

   
    
  }, [changeOrders])
  

  return (
      <div className='orderContainer'>
          
          {
              orders && orders.map((order) => {
                   return(
                        <Order order={order} setChangeOrder={setChangeOrder} />
                   )
              })
          }
      </div>
  )
}

export default OrderContainer