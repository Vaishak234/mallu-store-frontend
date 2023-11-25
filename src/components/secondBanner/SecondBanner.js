import React from 'react'
import './secondBanner.css'

function SecondBanner({img}) {
  return (
      <div className='secondBanner'>
          <img src={img} alt="" />
      </div>
  )
}

export default SecondBanner