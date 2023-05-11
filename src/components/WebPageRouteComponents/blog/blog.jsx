import React from 'react';
import './blog.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent'
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent'

export default function Blog() {
  return (
    <div className='Blog'>
        <HeaderComponent/>
        <h1>Blog page is here</h1>
        <FooterComponent/>
    </div>
  )
}
