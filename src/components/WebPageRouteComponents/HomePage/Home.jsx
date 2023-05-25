import React from 'react';
import './Home.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent.jsx';
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent.jsx';
import BannerDisplay from './BannerDisplay/BannerDisplay.jsx';
import ProductDisplayCard from '../../LayOutComponents/ProductDisplayCard/ProductDisplayCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const responsivePopularProducts = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsiveHealthWellness = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='Home'>
      <HeaderComponent />

      <main>
        <BannerDisplay />

        <div className='popularProducts'>
          <section>
            <p className='POPULAR-PRODUCTS-Heading'>POPULAR PRODUCTS</p>
            <Carousel className='Carousel-PopularProducts' partialVisible={false} responsive={responsivePopularProducts}>
              <ProductDisplayCard  />
              <ProductDisplayCard />
              <ProductDisplayCard />
              <ProductDisplayCard />
              <ProductDisplayCard />
              <ProductDisplayCard />
              <ProductDisplayCard />
            </Carousel>
          </section>
        </div>

        <div className='addDisplay'>
          <section style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYV3OdX-BoBNUSD9kR_MYO9kECbhtAO9B4A&usqp=CAU)` }}>
            {/* <h1>Add Display is here</h1> */}
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
              <div className='healthAndWellnessBottomLeft' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnQlMjBmaXRuZXNzfGVufDB8fDB8fHww&w=1000&q=80)`, backgroundSize: 'cover' }}>
                {/* <h1>Picture is here</h1> */}
              </div>
              <Carousel className='healthAndWellness-ProductDisplay' partialVisible={false} responsive={responsiveHealthWellness}>
                <ProductDisplayCard />
                <ProductDisplayCard />
                <ProductDisplayCard />
                <ProductDisplayCard />
                <ProductDisplayCard />
                <ProductDisplayCard />
              </Carousel>
            </div>

          </section>
        </div>

      </main>
      <FooterComponent />
    </div>
  )
}
