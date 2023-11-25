import React from 'react'
import './subBanner.css'


function SubBanner({img,title}) {

  return (
      <div className='SubBanner'>
          <img src={img} alt="" />
          <p className='subBanner__title'>{title }</p>
      </div>
  )
}

export default SubBanner