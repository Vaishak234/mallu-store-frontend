import { CartCountContext } from '../../App'
import axios from '../../api/axios'
import { Slider } from '../slider/Slider'
import './singleProduct.css'
import React, { useContext, useEffect, useState } from 'react'
import {  Alert, CircularProgress } from '@mui/material';

function SingleProduct({ product }) {
  
  const [size, setSize] = useState(null)
  const {cartCount ,setCartCount} = useContext(CartCountContext)
  const [loader, setLoader] = useState(false)
  const [errMsg, setErrMsg] = useState(false)
  const [alert, setAlert] = useState(false)

  

  async function addToCart() {
      setLoader(true)
       try {
          const res = await axios.post('/cart/add/'+product._id , {size})
          setCartCount(!cartCount)
         setLoader(false)
         setAlert(true)
         setTimeout(() => {
           setAlert(false) 
         },2000)
       } catch (error) {
         console.log(error.response.data);
         setLoader(false)
         setErrMsg(true)
       }
    }
    
    

  return (
     <>
      <div className='singleProduct'>
          <div className="singleProduct__left">
              {
                product.images && <Slider className="slider" data={product?.images}/>
              }
          </div>
          <div className="singleProduct__right">
        <h3 className="singleProduct__title">{product.title}</h3>
              <p className="singleProduct__description">{product.description}</p>
              <div className="singleProduct__priceBox">
                  <p className="singleProduct__price">$ {product.price}</p> <span>Includes all taxes</span>
              </div>
              <div className="singleProduct__offPrice">$ {product.offPrice}</div>

              <div className="singleProduct__sizeBox">
                  <p className="singleProduct__size">Select size</p>
                   {
                       product.size &&
                      <div className="sizeButtons">
                      {  product.size.map((item,i)=>{
                        return (
                          <>
                             <input  type="radio" hidden  value={item} onChange={(e)=>setSize(e.target.value)} name="size" id={item} />

                              <label htmlFor={item} key={i}   >{item}</label>
                            </>
                            )
                      })}
                  
                        </div>
                   }
              </div>
                
        <button  onClick={() => addToCart()} className="singleProduct__addToBagBtn">
           {
                         loader ? <CircularProgress  size={18}   /> : " Add to Bag"
            }
         
        </button>
        {
          errMsg && <p className="errMsg">! Please select size</p>
        }
       
      </div>
      
     
    </div>
      {
          alert && <Alert className='alert'  color="success">
                      Product added to cart
                    </Alert>
  }
 </>
  )
}

export default SingleProduct