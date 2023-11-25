import React, { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockIcon from '@mui/icons-material/Lock';
import './register.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { Alert, CircularProgress } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


function Register() {

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [mobile,setMobile] = useState('')
    const [errMsg, setErrMsg] = useState(null)
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const [showpassword,setShowPassword] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        setLoader(true)

    try {
      const res = await axios.post('/auth/signup',{email,mobile,password},{withCredentials:true})
      if (res.data) {
          console.log(res.data);
          navigate('/login',{replace:true})
         setLoader(false)
      }
    } catch (error) {
      console.log(error.response.data);
        setErrMsg(error.response.data)
        setLoader(false)
    }
  }

  return (
      <div className='register__container'>
          <div className="register">
              <h2 className="register__title">Register with Mallu Store</h2>
              <div className="register__inputBoxsample">
                    {
                     errMsg &&  <Alert severity="error">This is an error  —  { errMsg}</Alert>

                    }
              </div>
              <div className="register__inputBox">
                  <MailOutlineIcon />
                  <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter yout email'/>
              </div>
              <div className="register__inputBox">
                  <PhoneAndroidIcon />
                  <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Enter your mobile number' />
              </div>
              <div className="register__inputBox">
                  <LockIcon />
                  <input  value={password} type={showpassword?"text":"password"} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
                  <div className="passwordInp__icons">
                      {
                          showpassword ? <VisibilityOutlinedIcon onClick={() => setShowPassword(false)} className='show' />
                                       : <VisibilityOffOutlinedIcon onClick={() => setShowPassword(true)} className='false' />
                      }
                      
                  </div>
               </div>
              <div className="register__inputBoxBtn">
                  <button onClick={handleSubmit}>
                       {
                         loader ? <CircularProgress  size={18}   /> : "Register"
                       }
                  </button>
                
              </div>
              <p className="register__login" style={{marginBottom:'10px'}}>Already registered ? <Link to={"/login"}>Login</Link></p>
              

            
          </div>
      </div>
  )
}

export default Register