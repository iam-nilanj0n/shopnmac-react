import React from 'react';
import './Cart.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent';
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent';
import { useNavigate } from 'react-router-dom';

export default function Cart() {

  const navigate = useNavigate()
  return (
    <div className='Cart'>
      <HeaderComponent />
      <main className='Cart-Main'>

        <h1 className='Cart-Main-Heading'>Cart </h1>

        <div className='Cart-Main-OneTimePurchase'>
          <div className='OneTimePurchaseProducts-Details'>

          </div>
          <div>
            <p>One Time Purchase</p>
            <small>Subtotal (0 items): $0</small>
          </div>
        </div>

        <div className='Cart-Main-SubscribeProduct'>
          <div className='SubscribeProduct-Details'></div>
          <div>
            <p>Subscribe Product</p>
            <small>Subtotal (0 items): $0</small>
          </div>
        </div>

      </main>

      <button onClick={(e)=> navigate('/')} className='Cart-ContinueShopping-Button'>
        <i className='fas fa-long-arrow-alt-left' style={{fontSize: '24px',color:'white'}}></i>
        <span>
          Continue shopping
        </span>
      </button>
      <FooterComponent />
    </div>
  )
}
