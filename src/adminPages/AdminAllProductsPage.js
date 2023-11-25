import React from 'react'
import SideBar from '../adminComponents/sideBar/SideBar'
import { Link } from 'react-router-dom'
import AllProducts from '../adminComponents/allProducts/AllProducts'


function AdminAllProductPage() {
  return (
      <div>
          <SideBar />
          <AllProducts />
      
      </div>
  )
}

export default AdminAllProductPage