import React from 'react';
import './HeaderComponent.css';
import { useNavigate } from 'react-router-dom';
import phoneLogo from '../../../assets/phone-icon.png';
import sortDownIcon from '../../../assets/sortDownIcon.png';
import searchGlass from '../../../assets/searchGlass.png';
import cartIcon from '../../../assets/add-to-basket.png';
import shopnmacLogo from '../../../assets/shopnmac-logo.png';

export default function HeaderComponent() {
  const navigate = useNavigate()

  return (
    <div className='HeaderComponent'>
      <section>
        <img  src={shopnmacLogo} alt='shopnmacLogo' className='shopnmacLogo' onClick={(e) => navigate('/')} />

        <div className='headerParts'>

          <div className='headerPartsTop'>
            <button className='DEALS-Button' onClick={(e)=>navigate('/deals')}>DEALS</button>
            <button className='CONTACT-US-Button' onClick={(e)=>navigate('/contact-us')}>CONTACT US</button>
            <button className='BLOG-Button' onClick={(e)=>navigate('/blog')}>BLOG</button>
            <button className='Call-Button'>
              <img src={phoneLogo} alt='phoneLogo' className='phoneLogo' />
              <span>(441)293-5476</span>
            </button>
          </div>

          <div className='headerPartsSeparate'></div>

          <div className='headerPartsBottom'>
            <button className='AllCategories-Button'>
              <div className='hambergerMenu'>
                <div className='hambergerMenuLine'></div>
                <div className='hambergerMenuLine'></div>
                <div className='hambergerMenuLine'></div>
              </div>
              <span>ALL CATEGORIES</span>
            </button>

            <button className='BRANDS-Button'>
              <span>BRANDS</span>
              <img src={sortDownIcon} alt='sortDownIcon' className='sortDownIcon' />
            </button>

            <div className='searchInputBox'>
              <input type='text' placeholder='Search For Medicines and Health Products' />
              <button>
                <img src={searchGlass} alt='searchGlass' className='searchGlass' />
              </button>
            </div>

            <div className='cartAndLogin'>
              <button className='cartItems-Button'>
                <img src={cartIcon} alt='cartIcon' className='cartIcon' />
                <span className='cartItemCount'>10</span>
              </button>
              <div className='cartLoginSeparate'></div>
              <button className='LoginSignup-Button'>LOGIN/SIGNUP</button>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
