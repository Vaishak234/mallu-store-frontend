import React, { useContext } from 'react'
import './product.css'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import { CartCountContext } from '../../App'

function Product({ product }) {

    const navigate = useNavigate()

    
    async function addToCart() {
        try {
            const res = await axios.post('/addCart/',{productId:product.id,price:product.price})
            console.log(res);
            
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const navigateFn = (id) => {
        navigate(`/${id}`)
    }
  
  return (
      <div className='product' onClick={()=>navigateFn(product._id)}>
          <img src={"http://localhost:4000/product-images/" + product.images[0]} alt="" />
          <h2 className="product__title">{product.title}</h2>
          <div className="product__priceBox">
              <p className="product__price"><span>Rs.</span>  {product.price}</p>
              <p className="product__offPrice"><span>Rs.</span>  {product.offPrice}</p>
              <p className="product__offPercent"><span>off</span>  {product.offPercent} %</p>
          </div>
         
      </div>
  )
}

export default Product