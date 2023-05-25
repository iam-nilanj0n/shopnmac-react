import React from 'react';
import './FooterComponent.css';
import facebookLogo from '../../../assets/facebookIcon.png';
import instagramLogo from '../../../assets/instagramIcon.png';
import youTubeLogo from '../../../assets/youTubeIcon.png';



export default function FooterComponent() {

  return (
    <footer className='FooterComponent'>
      <section>
        <div className='FooterComponentTopPart'>

          <div className='FooterComponentTopPart-Products'>
            <h6 className='heading'>PRODUCTS</h6>
            <ul>
              <li><a href='/'>Dermatology</a></li>
              <li><a href='/'>Health & Wellness</a></li>
            </ul>
          </div>
          
          <div className='FooterComponentTopPart-HeadQuaters'>
            <h6 className='heading'>HEADQUARTERS</h6>
            <ul>
              <li>7 North Shore Road, Devonshire Dv01, Bermuda</li>
            </ul>
          </div>

          <div className='FooterComponentTopPart-mailAddress'>
            <h6 className='heading'>MAILING ADDRESS</h6>
            <ul>
              <li>NorthShore Medical & Aesthetics Center Ltd.</li>
              <li>P.O. Box HM1839 Hamilton HMGX, Bermuda</li>
              <li>Tel: 293-5476</li>
              <li>Email: info@shopnmac.com</li>
            </ul>
          </div>

          <div className='stayUpToDate'>
            <h6 className='heading'>STAY UP TO DATE</h6>
            <input type='email' placeholder='Enter Your Email ID' />
            <button>SUBMIT</button>
          </div>
        </div>

        <div className='FooterComponentSeparate'></div>

        <div className='FooterComponentBottomPart'>
          <div className='FooterComponentBottomPart-One'>
            <p>© Copyright 2023, NorthShore Medical & Aesthetics Center Ltd.
              <br />All Rights Reserved.</p>
          </div>
          <div className='FooterComponentBottomPart-Two'>
            <a href='/#'>Term & Condition</a>
            <div></div>
            <a href='/'>Privacy Policy</a>
            <div></div>
            <a href='/'>Refund Policy</a>
          </div>
          <div className='FooterComponentBottomPart-Three'>
            <img src={facebookLogo} alt='facebookLogo' className='facebookLogo' />
            <img src={instagramLogo} alt='instagramLogo' className='instagramLogo' />
            <img src={youTubeLogo} alt='youTubeLogo' className='youTubeLogo' />
          </div>
        </div>
        <div className='FooterComponentSeparate'></div>

      </section>
    </footer >
  )
}
