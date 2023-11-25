import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import SingleProduct from '../components/singleProduct.js/SingleProduct'
import Footer from '../components/footer/Footer'
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

function ProductPage() {

    let { id } = useParams();

   
    const [product,setProduct] = useState({})

   console.log(product);

  useEffect(() => {

    async function fetchProduct() {
       try {
          const res = await axios.get('/products/get-product/'+id)
          console.log(res.data);
          setProduct(res.data)
       } catch (error) {
          console.log(error.response.data);
       }
    }
    fetchProduct()
    
  },[])
   

  return (
      <>
          
                  <Navbar />
                  <SingleProduct product={product } />
                  <Footer />
      </>
  )
}

export default ProductPage