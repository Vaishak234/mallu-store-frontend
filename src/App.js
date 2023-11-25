import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './components/product/Product';
import Products from './components/products/Products';
import  Login from './components/login/Login';
import Register from './components/register/Register';
import SingleProduct from './components/singleProduct.js/SingleProduct';
import Cart from './components/cart/Cart';
import CartContainer from './components/cartContainer/CartContainer';
import SubTotal from './components/subTotal/SubTotal';
import Checkout from './components/checkout/Checkout';
import Delevery from './components/delevery/Delevery';
import ProtectedRoute from './components/ProtectedRoutes';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createContext, useEffect, useState } from 'react';
import AdminAllUsersPage from './adminPages/AdminAllUsersPage';
import AdminDashboardPage from './adminPages/AdminDashboardPage';
import AdminAddProductPage from './adminPages/AdminAddProductPage';
import AdminAllProductPage from './adminPages/AdminAllProductsPage';
import AdminEditProductPage from './adminPages/AdminEditProductPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import DeleveryPage from './pages/DeleveryPage';
import OrdersPage from './pages/OrdersPage';
import ProductsTypePage from './pages/ProductsTypePage';
import { useDispatch } from 'react-redux';
import axios from './api/axios';


export const CartCountContext = createContext()

function App() {


  const [cartCount, setCartCount] = useState(false)
 
  const googleClientId = '976164411143-9euttbepfv1b7rjd4p20i3vpu0e6ppcr.apps.googleusercontent.com'
  
  
  
  
  return (
    <BrowserRouter>
      
      <div className="App">
        <GoogleOAuthProvider clientId={googleClientId}>
          
      <CartCountContext.Provider value={{cartCount,setCartCount}}>

        <Routes>
    
          <Route path="/login" element={
            <>  
              <Navbar />
              <Login />
            </>
          
          }>

        </Route>

        <Route path="/register" element={
            <>  
              <Navbar />
              <Register />
            </>
        }>

            </Route>
            
         <Route element={<ProtectedRoute />}>
            
        <Route path="/home" element={
          <>  
            <Navbar />
            <Banner />
            <Footer />
          </>
        }>

          </Route>
          
        <Route path="/products" element={
            <>  
            <Navbar />
            <Products />
          </>
        }>

          </Route>
          

        
        <Route path="/:id" element={ <ProductPage />   }>

         </Route>
              

      
         
          
        <Route path="/cart" element={
         
              <CartPage/>
          
        }>

        </Route>
         
        <Route path="/checkout" element={
            <CheckoutPage />
        }>

          </Route>
          

        <Route path="/delevery" element={ <DeleveryPage/>
        }>

        </Route>
         
          
        
          
          <Route path="/orders" element={
                <OrdersPage />
            }>

            </Route>
            
          <Route path="/products/:id" element={
                <ProductsTypePage />
            }>

          </Route>
         
          
          </Route>
              

          <Route path='/admin' element={<AdminDashboardPage />} />
          <Route path='/admin/addCars' element={<AdminAddProductPage />} />
          <Route path='/admin/allUsers' element={<AdminAllUsersPage/>} />
          <Route path='/admin/allCars' element={<AdminAllProductPage/>} />
          <Route path='/admin/product/id' element={<AdminEditProductPage/>} />
        
          </Routes> 
          

      </CartCountContext.Provider>


        </GoogleOAuthProvider>

      </div>

    </BrowserRouter>

  );
}

export default App;
