import React, { useContext, useEffect, useState } from 'react'
import './cartContainer.css'
import axios from '../../api/axios';
import Cart from '../cart/Cart'
import { CartContext } from '../../pages/CartPage';

function CartContainer() {


  const [cart,setCart] = useState([])
  const { SetChangeQtyState } = useContext(CartContext)


  useEffect(() => {

    async function fetchProduct() {
       try {
          const res = await axios.get('/cart/get')
          setCart(res.data)
       } catch (error) {
          console.log(error.response.data);
       }
    }
    fetchProduct()

   
    
  }, [])
  
  console.log(cart.length);
  
  return (
    <div className='cartContainer'>
      
      
      { cart.length == 0 ? <h2>cart is empty</h2> :
        cart.map((item,i) => {
            return (
              <Cart cart={item} />
            ) 
          }) 
        }
    </div>
  )
}

export default CartContainer