import React, { createContext, useEffect, useState } from 'react'
import CartContainer from '../components/cartContainer/CartContainer'
import SubTotal from '../components/subTotal/SubTotal'
import Navbar from '../components/navbar/Navbar'
import axios from '../api/axios'
import './cartPage.css'

export const CartContext = createContext()


function CartPage() {

    
    const [changeQtyState, setChangeQtyState] = useState(false)
    

  return (
      <CartContext.Provider  value={{changeQtyState,setChangeQtyState}}>
               <Navbar />
              <div className='cartContainerPage' style={{display:"flex",justifyContent:'center',gap:"20px"}}>
                 <CartContainer/>
                 <SubTotal/>
              </div>
      </CartContext.Provider>
  )
}

export default CartPage