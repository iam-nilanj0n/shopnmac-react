import React from 'react';
import './ContactUs.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent'
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent';

export default function ContactUs() {

  const contactUsFormSubmitHandler = (event)=>{
     event.preventDefault()
  }
  return (
    <div className='ContactUs'>
        <HeaderComponent />
        <main className='ContactUs-Main'>
          <div className='ContactUs-Main-Left'>
            <h1>Do you encounter any problems purchasing your goods?</h1>
            <form>

              <label>Email</label>
              <input type='email'/>

              <label>First Name</label>
              <input type='text'/>

              <label>Last Name</label>
              <input type='text'/>

              <label>Company Name</label>
              <input type='text'/>

              <label>Phone Number</label>
              <input type='text'/>

              <label>Message</label>
              <textarea></textarea>

              <button onClick={(e)=>contactUsFormSubmitHandler(e)} >Send Message</button>
            </form>
          </div>

          <div className='ContactUs-Main-Right'></div>
        </main>
        <FooterComponent />
    </div>
  )
}
