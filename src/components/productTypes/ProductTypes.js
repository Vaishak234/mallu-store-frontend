import React, { useEffect, useState } from 'react'
import '../products/products.css'
import axios from '../../api/axios'
import Product from '../product/Product'

function ProductType({id}) {

  const [products,setProducts] = useState([])

  useEffect(() => {

    async function fetchProduct() {
       try {
        const res = await axios.get('/products/get-type/'+id)
        console.log(res.data);
        setProducts(res.data)
       } catch (error) {
           console.log(error.response.data);
       }
    }
    fetchProduct()
    
  },[id])

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

export default ProductType