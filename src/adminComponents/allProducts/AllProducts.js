import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import './allProducts.css'


function AllProducts() {


  const [products,setProducts] = useState([])

  useEffect(() => {

    async function fetchProducts() {
      const res = await axios.get('/admin/all-products')
      console.log(res.data);
      setProducts(res.data)
    }
    fetchProducts()
    
  }, [])
    
  return (
      <div className='allUsers__container'>
      <div className='allUsers'>
          <h2 className='allUsers__title'> All products</h2>
      <table>
        <tr>
            <th>No.</th>
            <th>Title</th>
            <th>price</th>
          </tr>
          {
            products &&
            products.map((product,i) => {
              return (
                  <tr key={product._i}>
                   <td>{i+1}</td>
                   <td>{product.title}</td>
                   <td>{product.price}</td>
                  </tr>
              )
            })
        }
      
       
      </table>
      </div>
      </div>
  )
}

export default AllProducts