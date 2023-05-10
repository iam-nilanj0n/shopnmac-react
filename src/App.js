import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/WebPageRouteComponents/HomePage/Home';
import Shop from './components/WebPageRouteComponents/Shop/Shop';



const App = () => {
  return (
    < >
      <section className='App'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='shop/category' element={<Shop/>}/>
        </Routes>
      </section>
    </>
  );
};

export default App;

