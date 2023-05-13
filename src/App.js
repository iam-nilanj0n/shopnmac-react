import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/WebPageRouteComponents/HomePage/Home';
import Shop from './components/WebPageRouteComponents/Shop/Shop';
import Deals from './components/WebPageRouteComponents/deals/Deals';
import ContactUs from './components/WebPageRouteComponents/contact-us/ContactUs';
import Blog from './components/WebPageRouteComponents/blog/blog';
import ProductDetails from './components/WebPageRouteComponents/Product-Details/ProductDetails';



const App = () => {
  return (
    < >
      <section className='App'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop/category/health-wellness' element={<Shop/>}/>
          <Route path='/deals' element={<Deals/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/product-details' element={<ProductDetails/>}/>
        </Routes>
      </section>
    </>
  );
};

export default App;

