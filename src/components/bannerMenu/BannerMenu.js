import React from 'react'
import './bannerMenu.css'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function BannerMenu({setMenu}) {

  return (
      <div className='bannerMenu'>
          
            <CloseIcon className="closeIcon" onClick={()=>setMenu(false)} />
          
          <div className="menuBox">
              <Link to={'/products'}> <p className='menuBox__item'> All ittems</p></Link>
              <Link to={'/products/t-shirt'}>  <p className='menuBox__item'> T-shirts</p></Link>
              <Link to={'/products/shirt'}>  <p className='menuBox__item'> Shirts</p></Link>
              <Link to={'/products/trousers'}>  <p className='menuBox__item'> Trousers</p></Link>
              <Link to={'/products/shoes'}>  <p className='menuBox__item'> shoes</p></Link>
          </div>
      </div>
  )
}

export default BannerMenu