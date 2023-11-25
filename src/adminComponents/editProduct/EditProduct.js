import React from 'react'
import './editProduct.css'
import { ProductImageSlider } from '../productImageSlider/ProductImageSlider'



function EditProduct() {

      const data = [
    {
      "src": "https://picsum.photos/seed/img1/600/400",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img2/600/400",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img3/600/400",
      "alt": "Image 3 for carousel"
    }
    ]

  return (
      <div className='editProduct'>
          <form action="" className='editProduct__form'>
              <h2 className="editProduct__title">Edit Car</h2>
              <div className="editProduct__inputBox">
                  <label htmlFor="">Brand</label>
                  <input type="text"  />
              </div>
              <div className="editProduct__inputBox">
                  <label htmlFor="">Add Title</label>
                  <input type="text"  />
              </div>
              <div className="editProduct__inputBox">
                  <label htmlFor="">Price per day</label>
                  <input type="text"  />
              </div>
              
              <div className="editProduct__imgSlider">
                  <ProductImageSlider data={data}/>
              </div>

              <button className="editProduct__button">Edit now</button>
          </form>
      </div>
  )
}

export default EditProduct