import React from 'react';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent.jsx';
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent.jsx';

export default function Home() {
  return (
    <div className='Home'>
        <HeaderComponent />
        <h1>Home Page</h1>
        <FooterComponent />
    </div>
  )
}
