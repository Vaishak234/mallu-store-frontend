import React from 'react'
import './subBanners.css'
import SubBanner from '../subBanner/SubBanner'


function SubBanners() {

  return (
      <div className='subBanners'>
          <div className="subBanners__title">Trending</div>
          <div className="subBanners__items">
              <SubBanner img={'./images/tshirts.avif'} title={'T-shirts'}/>
              <SubBanner img={'./images/shirts.jpg'} title={'Shirts'}/>
              <SubBanner img={'./images/jeans.jpg'} title={'Bottom'}/>
              <SubBanner img={'./images/footwares.webp'} title={'Footwares'}/>
             
          </div>
      </div>
  )
}

export default SubBanners