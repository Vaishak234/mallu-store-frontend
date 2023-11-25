import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/loginSlice'
import axios from '../api/axios'

const useLogout = () => {

    const dispatch = useDispatch()

    const logoutFn = async () => {
       
        try {
       const res = await axios.post('/auth/logout', { withCredentials: true })
        if (res.data) {
            dispatch(logout())
            console.log(res.data);
         }
        }
     catch (error) {
      console.log(error.response.data);
      
     }
    }
       

  return logoutFn
}

export default useLogout