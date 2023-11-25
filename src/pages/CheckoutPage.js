import React, { createContext, useEffect, useState } from 'react'
import Checkout from '../components/checkout/Checkout'
import Navbar from '../components/navbar/Navbar'
import axios from '../api/axios'


export const CheckoutContext = createContext()

function CheckoutPage() {

   const [addressState,setAddressState] = useState(false)

    const [total, setTotal] = useState({})
    
    useEffect(() => {
       
     async function fetchTotal() {
       try {
          const res = await axios.get('/cart/get-total')
           console.log(res.data);
           setTotal(res.data[0])
           
       } catch (error) {
          console.log(error.response.data);
       }
     }
        fetchTotal()  
        
    }, [])


  return (
          <CheckoutContext.Provider value={{addressState,setAddressState}}>  
              <Navbar />
              <Checkout total={total} />
            
          </CheckoutContext.Provider>
  )
}

export default CheckoutPage