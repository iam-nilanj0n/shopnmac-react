import React from 'react';
import './FooterComponent.css';
import facebookLogo from '../../../assets/facebookIcon.png' ;
import instagramLogo from '../../../assets/instagramIcon.png'; 
import youTubeLogo from '../../../assets/youTubeIcon.png'; 

export default function FooterComponent() {
  return (
    <footer className='FooterComponent'>
      <section>
        <div className='FooterComponentTopPart'>
          <div className='Products'>
            <p className='heading'>PRODUCTS</p>
          </div>
          <div>
            <p className='heading'>HEADQUARTERS</p>
            <p>7 North Shore Road, Devonshire Dv01,</p>
            <p>Bermuda</p>
          </div>
          <div>
            <p className='heading'>MAILING ADDRESS</p>
            <p>NorthShore Medical & Aesthetics Center</p>
            <p>Ltd.</p>
            <p>P.O. Box HM1839 Hamilton HMGX,</p>
            <p>Bermuda</p>
            <p>Tel: 293-5476</p>
            <p>Email: info@shopnmac.com</p>
          </div>
          <div className='stayUpToDate'>
            <p className='heading'>STAY UP TO DATE</p>
            <input type='email' placeholder='Enter Your Email ID' />
            <button>Submit</button>
          </div>
        </div>

        <div className='FooterComponentSeparate'></div>

        <div className='FooterComponentBottomPart'>
          <div className='FooterComponentBottomPart-One'>
            <p>© Copyright 2023, NorthShore Medical & Aesthetics Center Ltd.</p>
            <p>All Rights Reserved.</p>
          </div>
          <div className='FooterComponentBottomPart-Two'>
            <p>Term & Condition</p>
            <div></div>
            <p>Privacy Policy</p>
            <div></div>
            <p>Refund Policy</p>
          </div>
          <div className='FooterComponentBottomPart-Three'>
            <img src={facebookLogo} alt='facebookLogo' className='facebookLogo'/>
            <img src={instagramLogo} alt='instagramLogo' className='instagramLogo'/>
            <img src={youTubeLogo} alt='youTubeLogo' className='youTubeLogo'/>
          </div>
        </div>
        <div className='FooterComponentSeparate'></div>

      </section>
    </footer>
  )
}
