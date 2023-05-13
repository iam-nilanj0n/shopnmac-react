import React from 'react';
import './Shop.css'
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent.jsx';
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent.jsx';
import ProductDisplayCard from '../../LayOutComponents/ProductDisplayCard/ProductDisplayCard.jsx';

export default function Shop() {
  return (
    <div className='Shop'>
      <HeaderComponent />
      <main className='ShopMain'>
        <section className='ShopMainSection'>
          <div className='ShopMainTop'>
            <p>Showing</p>
            <b>Health Wellness</b>
            <p>1-15 of 223 results</p>
            <select>
              <option value=''>Sort by <b>Price </b></option>
              <option value=''>Price: Low to High</option>
              <option value=''>Price: high to Low</option>
            </select>
          </div>
          <div className='ShopProductDisplay'>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
            <ProductDisplayCard/>
          </div>

          <div className='ShopProductDisplayController'>
            <button>Prev</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </section>
      </main>

      <FooterComponent />
    </div>
  )
}
