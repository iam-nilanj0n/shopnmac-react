import React from 'react';
import './Home.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent.jsx';
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent.jsx';
import BannerDisplay from './BannerDisplay/BannerDisplay.jsx';
import ProductDisplayCard from '../../LayOutComponents/ProductDisplayCard/ProductDisplayCard';
// import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <div className='Home'>
      <HeaderComponent />
      
      <main>
        <BannerDisplay />

        <div className='popularProducts'>
          <section>
            <p className='POPULAR-PRODUCTS-Heading'>POPULAR PRODUCTS</p>
            <ProductDisplayCard />
          </section>
        </div>

        <div className='addDisplay'>
          <section>
            <h1>Add Display is here</h1>
          </section>
        </div>

        <div className='healthAndWellness'>
          <section>

            <div className='healthAndWellnessTop'>
              <p className='healthAndWellness-Heading'>Health & Wellness</p>
              <div className='buttonGroup'>
                <button>NEW</button>
                <div></div>
                <button>DISCOUNTED</button>
                <div></div>
                <button>POPULAR</button>
              </div>
              <button className='viewAllButton'>View All</button>
            </div>

            <div className='healthAndWellnessBottom'>
              <div className='healthAndWellnessBottomLeft'>
                <h1>Picture is here</h1>
              </div>
              <div className='healthAndWellness-ProductDisplay'>
                <ProductDisplayCard/>
                <ProductDisplayCard/>
                <ProductDisplayCard/>
                <ProductDisplayCard/>
              </div>
            </div>

          </section>
        </div>

      </main>
      <FooterComponent />
    </div>
  )
}
