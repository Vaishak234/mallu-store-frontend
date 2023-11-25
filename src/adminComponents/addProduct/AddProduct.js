import React, { useEffect, useState } from 'react'
import './addProduct.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from '../../api/axios';



function OptionTag({ category }) {
    let types =[]

    if (category === 'topWares') {
        types = ['shirt','t-shirt','hoodies','sleeveless']
    }
    else if (category === 'bottomwares') {
        types = ['jeans','cargos','joggers','shorts']
    }
    else if (category === 'footwares') {
        types = ['shoes','sandals']
    }
    else if (category === 'accessories') {
        types = ['watches']
    }

  return (
      <>
          {
              types.map((type) => <option value={type}>{type}</option>
            )
          }
      </>
  )
}


function AddProduct() {

    const [files, setFiles] = useState([])
    
    const [product, setProduct] = useState({
        title: "",
        price: "",
        offPrice: "",
        offPercent: "",
        description: "",
        category: "",
        type: "",
        size: [],
       
    })


   
    const handleSubmit = async (e) => {
        
        e.preventDefault()
        try {
            
            console.log(files);
            let formData = new FormData();

            for (let index = 0; index < files.length; index++) {
                formData.append('files', files[index])
            }
            
            formData.append("product", JSON.stringify(product));
            const res = await axios.post('/addProduct' ,formData,{ headers: { 'content-type': 'multipart/form-data' },withCredentials:true})
         
           console.log(res);

        } catch (error) {
             console.log(error.response.data);
        }
    }


  return (
      <div className='addProduct'>
          
          <form action="" className='addProduct__form'>
              <h2 className="addProduct__title">Add a Product</h2>
              <div className="addProduct_inputCover">
                  <div className="addProduct__inputBox">
                    <label htmlFor="">Title</label>
                    <input value={product.title} onChange={(e)=>setProduct({...product,title:e.target.value})} type="text"  />
                  </div>
                  <div className="addProduct__inputBox">
                  <label htmlFor="">Description</label>
                  <input value={product.description} onChange={(e)=>setProduct({...product,description:e.target.value})} type="text"  />
                  </div>
              </div>
            <div className="addProduct_inputCover">
              <div className="addProduct__inputBox">
                  <label htmlFor="">Price</label>
                  <input value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})} type="text"  />
              </div>
              <div className="addProduct__inputBox">
                  <label htmlFor="">Off Price</label>
                  <input value={product.offPrice} onChange={(e)=>setProduct({...product,offPrice:e.target.value})} type="text"  />
              </div>
              </div>
              <div className="addProduct_inputCover">
                 <div className="addProduct__inputBox">
                  <label htmlFor="">Off Percentage</label>
                  <input value={product.offPercent} onChange={(e)=>setProduct({...product,offPercent:e.target.value})} type="text"  />
                  </div> 
                  <div className="addProduct__inputBox">
                     <label htmlFor="">Select category</label>
                    <select value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}>
                         <option hidden >Select category</option>
                         <option value="topWares">TopWares</option>
                         <option value="bottomwares">Bottomwares</option>
                         <option value="footwares">FootWares</option>
                         <option value="accessories">Accessories</option>
                      </select>
                  </div>     
              </div>
              <div className="addProduct_inputCover">
                  <div className="addProduct__inputBox">
                     <label htmlFor="">Select type</label>
                      <select value={product.type} onChange={(e) => setProduct({ ...product, type: e.target.value })}>
                            <option hidden >Select category</option>
                           <OptionTag key={product.category} category={product.category}/>
                      </select>
                      
                  </div>

                  <div className="addProduct__inputBoxSize">
                     <h3 htmlFor="">Select size</h3>
                      <div className="checkboxes">
                          
                        <div className="inputcheckBox__cover">
                          <input name='size' id='small' onChange={(e)=> e.target.checked && setProduct({...product,size:[...product.size,e.target.value]})} value={'small'} type='checkbox' />
                          <label htmlFor="small"> small</label>
                      </div>
                      <div className="inputcheckBox__cover">
                          <input name='size' id='large' value={'large'}  onChange={(e)=>e.target.checked && setProduct({...product,size:[...product.size,e.target.value]})} type='checkbox' />
                          <label htmlFor="large"> large</label>
                      </div>
                      <div className="inputcheckBox__cover">
                          <input name='size' id='medium' value={'medium'} onChange={(e)=>e.target.checked && setProduct({...product,size:[...product.size,e.target.value]})} type='checkbox' />
                          <label htmlFor="medium"> medium</label>
                      </div>
                      <div className="inputcheckBox__cover">
                          <input name='size' id='xl' value={'xl'} onChange={(e)=>e.target.checked && setProduct({...product,size:[...product.size,e.target.value]})} type='checkbox' />
                          <label htmlFor="xl"> xl</label>
                      </div>
                      <div className="inputcheckBox__cover">
                          <input name='size' id='xxl' value={'xxl'} onChange={(e)=>e.target.checked && setProduct({...product,size:[...product.size,e.target.value]})} type='checkbox' />
                          <label htmlFor="xxl"> xxl</label>
                      </div>
                      <div className="inputcheckBox__cover">
                          <input name='size' id='xxxl' value={'xxxl'} onChange={(e)=>e.target.checked && setProduct({...product,size:[...product.size,e.target.value]})} type='checkbox' />
                          <label htmlFor="xxxl"> xxxl</label>
                      </div>
                     </div>
                    
                      
                  </div>
              </div>

              <div className="addProduct__ImgBox">
                  <label >Upload upto 6 photos</label>
                  <label style={{marginTop:'10px'}}  htmlFor="imgInp" className='imgInpContainer'>
                      <AddAPhotoIcon className='addIcon'/>
                  </label>
                  <input type="file" multiple="multiple" onChange={(e)=>setFiles(e.target.files)} id='imgInp'/>
              </div>
             
              <button onClick={handleSubmit} className="addProduct__button">Post now</button>
          </form>
      </div>
  )
}

export default AddProduct