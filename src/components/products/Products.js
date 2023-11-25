import React, { useEffect, useState } from 'react'
import './products.css'
import Product from '../product/Product'
import axios from '../../api/axios'

function Products() {

  const [products,setProducts] = useState([])

  useEffect(() => {

    async function fetchProduct() {
       try {
        const res = await axios.get('/products/get-all')
        console.log(res.data);
        setProducts(res.data)
       } catch (error) {
           console.log(error.response.data);
       }
    }
    fetchProduct()
    
  },[])

  return (
      <div className='products'>
      <div className='products__container'>
  
        {
          products.map((product,i) => {
            return (
                  <Product key={i} product={product} />
              )
          })
        }
        
          
          
      </div>
      </div>
  )
}

export default Products