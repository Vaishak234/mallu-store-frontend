import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ProductType from '../components/productTypes/ProductTypes'
import { useParams } from 'react-router-dom'

function ProductsTypePage() {

    const { id } = useParams()
    
    
  return (
      <div>
          <Navbar />
          <ProductType  id={id}/>
      </div>
  )
}

export default ProductsTypePage