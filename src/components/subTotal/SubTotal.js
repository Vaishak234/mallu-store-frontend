import React, { useContext, useEffect, useState } from 'react'
import './subTotal.css'
import axios from '../../api/axios'
import { CartContext } from '../../pages/CartPage'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function SubTotal() {

    const { changeQtyState } = useContext(CartContext)
    const [total,setTotal] = useState({})
    const navigate = useNavigate()


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
        
    }, [changeQtyState])

   

  return (
      <>
          
          {
            total &&
              <div className='subTotal'>
                  <div className="subTotal__total">
                      <p className="subTotal__totalLeft">MRP</p>
                      <p className="subTotal__totalRight">$ <span>{total?.total}</span></p>
                  </div>
                  <div className="subTotal__total">
                      <p className="subTotal__totalLeft">discount</p>
                      <p className="subTotal__totalRight">$ <span>{total?.total - total?.order}</span></p>
                  </div>
                  <div className="subTotal__total specialSubTotal">
                      <p className="subTotal__totalLeft">Total</p>
                      <p className="subTotal__totalRight">$ <span>{total?.order}</span></p>
                  </div>
                  <button  onClick={()=>navigate('/checkout')} className="subtotal__checkoutBtn" >
                      Checkout
                  </button>
                  <p className="subtotal__description">Free Shipping on all orders above 999 | Use code EXTRA10 to get an additional 10% off on purchases above ₹1999.</p>
              </div>
          }
      </>
  )
}

export default SubTotal