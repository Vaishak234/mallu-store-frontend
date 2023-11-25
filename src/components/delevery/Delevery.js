import React, { useState } from 'react'
import './delevery.css'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'

function Delevery({ total }) {

  const [paymentMethod, setPaymentMethod] = useState(null)
  const [errMsg,setErrMsg] = useState(false)
  const navigate = useNavigate()

  const orderSuccess = async () => {
    try {
      const res = await axios.post('/payment/order-success', { status: "success", amount: total.order });
      console.log(res.data);
      navigate('/orders' ,{replace:true})

    } catch (error) {
      console.log(error.response.data);
    }
  }


  const upiPaymentHandler = async (e) => {
    e.preventDefault();
    try {
      const orderUrl = `/payment/order`;
    const response = await axios.post(orderUrl,{amount:total.order});
    const { data } = response;
    
    const options = {
    key: 'rzp_test_OGGKvKmh72gIBZ',
    name: "Your App Name",
    description: "Some Description",
    order_id: data.id,
    handler: async (response) => {
      try {
       const paymentId = response.razorpay_payment_id;
       const url = `/payment/capture/${paymentId}`;
       const captureResponse = await axios.post(url, {amount:total.order})
        console.log(captureResponse.data);
        orderSuccess()
      } catch (err) {
      console.log(err.response.data);
    }
  },
  theme: {
    color: "#686CFD",
  },
};
const rzp1 = new window.Razorpay(options);
rzp1.open();
  } catch (error) {
       console.log(error.response.data);
    }
  };
  
  function handlePayment(e) {
    if (paymentMethod === 'upi') {
       upiPaymentHandler(e)
    } else {
      setErrMsg(true)
    }
  }
   


  return (
    <div className='delevery'>
  
    
            <div className="delevery__card">
                <h3>My Informations</h3>
                <p>Email : <span>user.email</span></p>
            </div>
 
             <div className="delevery__card " id="payment__popup" >
              <h3>Payment Methods</h3>
              <div>
                <input required type="text" name="user" value="user._id" hidden />
                  {/* <div className="payment__options">
                     <input required type="radio" name="payment" value="cod" id="cod__btn" />
                     <label for="cod__btn">Cash on Delevery</label>
                  </div>
                   <div className="payment__options">
                     <input  required  type="radio" name="payment" value="card" id="card__btn" />
                      <label for="card__btn">card</label>
                   </div> */}
                  
                   <div className="payment__options">
                     <input  required  type="radio" name="payment" onChange={(e)=>setPaymentMethod(e.target.value)} value="upi" id="rpay__btn" />
                      <label for="rpay__btn">upi</label>
                   </div>
                   <p className="text-danger"  id="errMsg">please select a payment option for continue.</p>
                   <p >Total : <span>{total.order}</span></p>
                    <button className='delevery__btn' onClick={handlePayment} >continue purchase</button>
                    {
                       errMsg && <p className="errMsg">Please select a payment method</p>
                    }
                </div>
            </div>
        </div>

     
  )
}

export default Delevery