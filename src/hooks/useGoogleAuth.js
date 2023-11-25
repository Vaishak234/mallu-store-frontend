import React from 'react'
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/loginSlice';


const useGoogleAuth = ({setErrMsg}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
     
      let userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`
          }
        })
      
      
      console.log(userInfo);
      
         try {
          const res = await axios.post('http://localhost:4000/api/auth/google-login',{userInfo},{withCredentials:true})
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
             
            }    
         } catch (error) {
           console.log(error.response.data);
           setErrMsg(error.response.data)
         } 
      
    }

    
  })
    
  return googleLogin
}

export default useGoogleAuth