import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Delevery from '../components/delevery/Delevery'
import axios from '../api/axios'

function DeleveryPage() {


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
      <>
         <Navbar />
          <Delevery total={total} />
      </>
  )
}

export default DeleveryPage