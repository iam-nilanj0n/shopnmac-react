import React from 'react';
import './Cart.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent';
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent';

export default function Cart() {
  return (
    <div className='Cart'>
        <HeaderComponent/>
        <main>
            <h1>Cart is here</h1>
        </main>
        <FooterComponent/>
    </div>
  )
}
