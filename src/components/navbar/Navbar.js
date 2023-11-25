import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import BannerMenu from '../bannerMenu/BannerMenu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/loginSlice';
import useLogout from '../../hooks/useLogout';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import { CartCountContext } from '../../App';
import axios from '../../api/axios';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function Navbar() {

     const [navBg, setNavBg] = useState(false);
     const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const {cartCount ,setCartCount} = useContext(CartCountContext)
    const [count ,setCount] = useState(0)



    const logoutFn = useLogout()
    
    const user = useSelector(selectUser)


  const changeNavBg = () =>
    {
       window.scrollY >= 800 ? setNavBg(true) : setNavBg(true);
    }

    //   window.addEventListener('scroll', changeNavBg);
    
    useEffect(() => {

    async function fetchCartQty() {
       try {
          const res = await axios.get('/cart/get-count')
          setCount(res.data)
          
       } catch (error) {
          console.log(error.response.data);
       }
    }
    fetchCartQty()

   
    
  }, [cartCount])
  

  
  return (
      <>
         <div className='navbar' style={{backgroundColor:navBg?'black':'white'}}>
          <div className="navbar__left">
            
                  <MenuIcon className="menuIcon" onClick={()=>setMenu(true)}/>
              
          </div>
          <div className="navbar__middle">
              <h1 className="navbar__title">
                  Mallu Store
              </h1>
          </div>
          <div className="navbar__right">
                  <div className="searchBox">
                       <div className='searchInpBox'>
                        <input style={{display:search?"block":"none"}} type="text" placeholder='Search for items' className='searchInp' />
                       </div>
                      
                          <SearchIcon className=' icon searchIcon' onClick={()=>setSearch(!search)} />
                      
                   </div>
                  {
                      user
                          ? <p onClick={logoutFn} className="loginBtn"><LogoutIcon className='icon'/></p>
                          :  <Link className='loginBtn link' to={'/login'} ><AccountCircleOutlinedIcon className='icon'/></Link> 
                  }
                  <Badge badgeContent={count}  color="primary">
                       <Link className='link' to={'/cart'}> <ShoppingBagOutlinedIcon className='bagIcon icon' /> </Link>
                  </Badge>
          </div>
          </div>
          
          {
              menu && <BannerMenu setMenu={setMenu} />
          }
      </>
  )
}

export default Navbar