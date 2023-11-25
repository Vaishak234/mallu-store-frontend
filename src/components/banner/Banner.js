import React from 'react'
import './banner.css'
import { BannerSlider }  from '../slider/BannerSlider';
import SecondBanner from '../secondBanner/SecondBanner';
import SubBanners from '../subBanners/SubBanners';


function Banner() {
    
    const data = [
    {
      "src": "./images/banner1.avif",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "./images/banner2.jpg",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "./images/banner3.jpg",
      "alt": "Image 3 for carousel"
    }
    ]
    
    return (

      <div className='banner' >
            <BannerSlider data={data} />
            <SubBanners />
            <SecondBanner  img={'./images/secondBanner.webp'}/>
            <SecondBanner  img={'./images/secondBanner2.webp'}/>
      </div>
  )
}

export default Banner