import React from 'react';
import './ContactUs.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent';
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent';
import contactUsPic from '../../../assets/shopnmac-contact.jpg';
import contactPhoneIcon from '../../../assets/contact-phone-icon.png';
import mailIcon from '../../../assets/mail-icon.png';
import commentIcon from '../../../assets/comment-icon.png';
import locationIcon from '../../../assets/location-icon.png';

export default function ContactUs() {

  const contactUsFormSubmitHandler = (event) => {
    event.preventDefault()
  }
  return (
    <div className='ContactUs'>
      <HeaderComponent />
      <main className='ContactUs-Main'>

          <div className='ContactUs-Main-Left'>
            <p className='ContactUs-Main-LeftHeading'>Do you encounter any</p>
            <p className='ContactUs-Main-LeftHeading'>problems purchasing your goods?</p>
            <div className='contactUs-formBorder'>
              <form className='contactUs-form'>

                <label>Email</label>
                <input type='email' />

                <label>First Name</label>
                <input type='text' />

                <label>Last Name</label>
                <input type='text' />

                <label>Company Name</label>
                <input type='text' />

                <label>Phone Number</label>
                <input type='text' />

                <label>Message</label>
                <textarea></textarea>

                <button onClick={(e) => contactUsFormSubmitHandler(e)} >Send Message</button>
              </form>
            </div>
          </div>

          <div className='ContactUs-Main-Right'>
            <div className='ContactUs-Main-RightGrid'>
              <div >
                <img src={contactPhoneIcon} alt='contactUs-phoneIcon' className='contactUs-Icon' />
                <p className='ContactUs-Main-RightHeadings'>Call us</p>
              </div>
              <div>
                <img src={mailIcon} alt='contactUs-mailIcon' className='contactUs-Icon' />
                <p className='ContactUs-Main-RightHeadings'>Email us</p>
              </div>
              <div>
                <img src={commentIcon} alt='contactUs-commentIcon' className='contactUs-Icon' />
                <p className='ContactUs-Main-RightHeadings'>Chat to us</p>
              </div>
              <div>
                <img src={locationIcon} alt='contactUs-locationIcon' className='contactUs-Icon' />
                <p className='ContactUs-Main-RightHeadings'>Visit to us</p>
              </div>
            </div>
            <img src={contactUsPic} alt='Contact-Us-Pic' />
          </div>

      </main>
      <FooterComponent />
    </div>
  )
}
