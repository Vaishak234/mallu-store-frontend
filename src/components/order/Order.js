import React from 'react'
import './order.css'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from '../../api/axios';


function Order({order , setChangeOrder}) {


    const removeProduct = async() => {
        try {
            const res = await axios.get('/user/remove-order/' + order._id)
            console.log(res.data);
            setChangeOrder(true)
        } catch (error) {
            console.log(error.response.data);
        }
    }
    
  return (
    <>
        {
         <div className='order'>
            <div className="order__left">
              <div className="order__leftImg">
                   <img src={"http://localhost:4000/product-images/" + order.images[0]} alt="" />
              </div>
              <div className="order__leftdescription">
                          <h4 className="title"> {order.title}</h4>
                      <div className="size">size : <span>{order.size}</span></div>
              </div>
              <div className="order__leftPriceBox">
                      <p className="price"> $ <span> {order.price} </span> </p>
                  
              </div>
                      
                <div className="singleProduct__quantityBox">
                      <p className="price">  <span> {order.qty} </span> </p>
                    
                      </div>
               </div>        
                    <div className='removeBtn' >
                            <span role='button' onClick={removeProduct}><DeleteIcon/></span>
                    </div>
               
         
         
          </div>   

         }
     
         
      </>
  )
}

export default Order