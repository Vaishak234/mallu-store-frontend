import React, { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockIcon from '@mui/icons-material/Lock';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { useDispatch } from 'react-redux';
import { login } from '../../features/loginSlice';
import useGoogleLogin from '../../hooks/useGoogleAuth';
import { Alert, CircularProgress } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [mobile,setMobile] = useState('9778018675')
    const [password,setPassword] = useState('12345678')
    const [errMsg, setErrMsg] = useState(null)
    const [loader,setLoader] = useState(false)
    const [showpassword,setShowPassword] = useState(false)

    const googleLogin = useGoogleLogin({setErrMsg})

    


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoader(true)
    try {
      const res = await axios.post('/auth/login',{mobile,password},{withCredentials:true})
      if (res.data) {
          console.log(res.data);
          const user = {
              email: res.data.email,
              mobile: res.data.mobile,
          }
          dispatch(login({
             user
          }))
          
          navigate('/home', { replace: true })
          setLoader(false)

      }
    } catch (error) {
      console.log(error.response.data);
        setErrMsg(error.response.data)
        setLoader(false)
     }
    }
    




  return (
      <div className='login__container'>
          <div className="login">
              <h2 className="login__title">Login with Mallu Store</h2>
               <div className="login__inputBoxsample">
                    {
                       errMsg &&  <Alert severity="error">This is an error  —  { errMsg}</Alert>

                    }
              </div>
              <div className="login__inputBox">
                  <PhoneAndroidIcon />
                  <input value={mobile} onChange={(e)=>setMobile(e.target.value)} type="text" placeholder='Enter your mobile number' />
              </div>
              <div className="login__inputBox">
                  <LockIcon />
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type={showpassword?"text":"password"} placeholder='password' />
                  <div className="passwordInp__icons">
                      {
                          showpassword ? <VisibilityOutlinedIcon onClick={() => setShowPassword(false)} className='show' />
                                       : <VisibilityOffOutlinedIcon onClick={() => setShowPassword(true)} className='false' />
                      }
                      
                  </div>
              </div>
              <div className="login__inputBoxBtn">
                  <button onClick={handleSubmit}>
                      {
                        loader ? <CircularProgress  size={18}   /> : "Login"
                      }
                  
                  </button>
              </div>
              
              
              <p className="login__login">dont have account ? <Link to={"/register"}>register</Link></p>
               <button className="login__inputBoxGoogle" onClick={()=>googleLogin()}>
                  <img src="./images/googleIcon.png" alt="" />
                  <span>Sign in with Google</span>
                  
              </button>
          </div>
      </div>
  )
}

export default Login