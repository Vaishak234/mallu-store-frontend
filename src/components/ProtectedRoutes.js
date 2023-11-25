import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from '../features/loginSlice'


const ProtectedRoute = () => {

    const location = useLocation()
    const user = useSelector(selectUser)
    
      
    return (
          
                user? <Outlet />
                : <Navigate to={'/login'} state={ {from:location}} replace />
     )    
}

export default ProtectedRoute