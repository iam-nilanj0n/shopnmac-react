import React from 'react';
import './ContactUs.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent'
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent';

export default function ContactUs() {
  return (
    <div className='ContactUs'>
        <HeaderComponent />
        <h1>Contact-Us page is here</h1>
        <FooterComponent />
    </div>
  )
}
