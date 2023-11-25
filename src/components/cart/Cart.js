import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import './cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from '../../api/axios';
import { CartContext } from '../../pages/CartPage';
import { CartCountContext } from '../../App';


function Cart({ cart }) {
  
      const {cartCount ,setCartCount} = useContext(CartCountContext)

   const [qty,setQty] = useState(cart.qty)
   const { changeQtyState ,setChangeQtyState } = useContext(CartContext)


   async function deleteProduct() {
       try {
          const res = await axios.post('/cart/delete/'+cart.item,{size:cart.size})
          console.log(res.data);
          setQty(0)
         setChangeQtyState(!changeQtyState)
          setCartCount(!cartCount)

       } catch (error) {
          console.log(error.response.data);
       }
    }
    
   const incrementQty = async() => {
       try {
          axios.post('/cart/change-qty', { cartId: cart._id, productId: cart.item, size: cart.size, quantity: qty, count: 1 }).then((res) => {
             console.log(res.data);
             setQty(qty + 1)
                       setChangeQtyState(!changeQtyState)

           })
       } catch (error) {
          console.log(error.response.data);
       }
   }

   const decrementQty = async () => {
      try {
          const res = await axios.post('/cart/change-qty',{cartId:cart._id,productId:cart.item,size:cart.size,quantity:qty,count:-1})
             console.log(res.data);
         setQty(qty - 1)
                       setChangeQtyState(!changeQtyState)

       } catch (error) {
          console.log(error.response.data);
       }
    }
    

  return (
          
      <>
        {
           qty !== 0 &&      <div className='cart'>
            <div className="cart__left">
              <div className="cart__leftImg">
                   <img src={"http://localhost:4000/product-images/" + cart.images[0]} alt="" />
              </div>
              <div className="cart__leftdescription">
                  <h2 className="title"></h2>
                      <div className="size">size : <span>{cart.size}</span></div>
              </div>
              <div className="cart__leftPriceBox">
                      <p className="price"> $ <span> {cart.price} </span> </p>
                  
              </div>
                  <div className="cart__leftQuantityBox">
                      
                <div className="singleProduct__quantityBox">
                <div className='quantityButtons'>
                  <button onClick={()=>decrementQty()}>-</button>
                      <p className="price">  <span> {qty} </span> </p>
                  <button onClick={()=>incrementQty()}>+</button>
                </div>
                </div>
                  
              </div>
          </div>
           <span role='button' onClick={deleteProduct}>
               <DeleteIcon />
           </span>
          </div>   

         }
     
         
      </>
  )
}

export default Cart