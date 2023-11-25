import React, { useContext, useEffect, useState } from 'react'
import './checkout.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/loginSlice'
import axios from '../../api/axios'
import EditAddress from '../editAddress/EditAddress'
import { CheckoutContext } from '../../pages/CheckoutPage'

function Checkout({ total }) {
  
   const {user} = useSelector(selectUser)
   
  const [showEdit, setShowEdit] = useState(false)
    const [details,setDetails] = useState(null)

  
  const navigate = useNavigate()

      const {addressState , setAddressState} = useContext(CheckoutContext)

  const [address, setAddress] = useState({
    firstname: "",
    lastname: "",
    address: "",
    pincode: "",
    city: "",
    district: "",
    dob: "",
    state: "",
    mobile: user.mobile,
    email:user.email,
  })

  useEffect(() => {

    async function fetchAddress() {
       try {
        const res = await axios.get('/user/get-address')
         console.log(res.data);
         setDetails(res.data)

       } catch (error) {
           console.log(error.response.data);
       }
    }
    fetchAddress()
    
  },[addressState])

 
async function handleSubmit(e) {
    e.preventDefault()

       try { 
            
        const res = await axios.post('/user/add-address' ,address)
         console.log(res);
         if (res.data) {
           setShowEdit(!showEdit)
           navigate('/delevery')
          }

        } catch (error) {
             console.log(error.response.data);
        }
    
  }
  
  return (
  
    <div id="checkoutcontainer" className="checkout">
            <div className="section__card">
                <h3 className='title'>My Informations</h3>
              <p>Email : <span>{user.email}</span></p>
            </div>
           
        {
          details ?
        
            <div class="section__card">
              <h3 class="title ">Delevery Address</h3>

              <p>{details.firstname} {details.lastname}</p>
              <p>{details.address}, {details.pincode},{details.city},{details.state}</p>
              <p>mobile no: {details.mobile}</p>

              <button class="editbutton" onClick={()=>setShowEdit(!showEdit)}>Edit</button>
            </div>
            :

             <div className="address__card">
                 <form action="/checkout" onSubmit={handleSubmit} >
                     <h3 className="address__title">Home Address</h3>
                     <div className="rows">
                       <div className="inp__rows"> <label for="">Firstname</label>
                       <input type="text" name="firstname" value={address.firstname} placeholder="Firstname" onChange={(e)=>setAddress({...address,firstname:e.target.value})} />
                     </div>
                       <div className="inp__rows"> <label for="">Lastname</label> 
                       <input type="text" name="lastname" value={address.lastname} placeholder="LastName" onChange={(e)=>setAddress({...address,lastname:e.target.value})} />
                    </div>
                     </div>
                     <div className="rows">
                       <div className="inp__rows largeInp">
                         <label for="">Address</label>
                          <input type="text" name="address" value={address.address} placeholder="Address" onChange={(e)=>setAddress({...address,address:e.target.value})} />
                        </div>
                     </div>
                     <div className="rows">
                       <div className="inp__rows"> 
                          <label for="">Pincode</label>
                          <input type="number" name="pincode" value={address.pincode} placeholder="Pincode" onChange={(e)=>setAddress({...address,pincode:e.target.value})} /> 
                        </div>
                       <div className="inp__rows"> 
                           <label for="">City</label>
                           <input type="text" name="city" value={address.city} placeholder="City" onChange={(e)=>setAddress({...address,city:e.target.value})} />
                         </div>
                     </div>
                     <div className="rows">
                       <div className="inp__rows"> 
                          <label for="">District</label>
                           <input type="text" name="district" value={address.district} placeholder="District" onChange={(e)=>setAddress({...address,district:e.target.value})} />
                        </div>
                        <div className="inp__rows"> 
                          <label for="">State</label>
                         <select name="state" id="state" value={address.state} onChange={(e)=>setAddress({...address,state:e.target.value})} >
                            <option hidden value="">Select...</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>
                     </div>
                     <h3 className="address__title">Personal details</h3>
                     <div className="rows">
                       <div className="inp__rows">
                         <label for="">Date of Birth</label>
                         <input type="date" name="dob" value={address.dob} onChange={(e)=>setAddress({...address,dob:e.target.value})} placeholder="Date of Birth" /> 
                        </div>
                       <div className="inp__rows"> 
                         <label for="">Mobile number</label>
                         <input type="text" name="mobile" value={user.mobile} onChange={(e)=>setAddress({...address,mobile:e.target.value})} placeholder="mobile" /> 
                        </div>
              </div>
                <div className="inp__rows"> 
                    <button className='address__btn' type="submit">save address</button>
                </div>
                 </form>
                  
              </div>
        }

        {
          showEdit && <EditAddress details={details} setShowEdit={setShowEdit} />
        }
        
            <div className="section__card">
                <h3 className='title'>Payment & Discount</h3>
                <p>choose mode of payment</p>
        </div> 
          <div className="checkout__totalPrice">
            <p>  your total purchace price : <span>{total?.order}</span></p>
         </div>
         <button  onClick={()=>navigate('/delevery')} className="checkout__button" >
                      proceed to payment
          </button>

      
    </div>

  )
}

export default Checkout