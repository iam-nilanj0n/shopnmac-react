import React from 'react';
import './ProductDetails.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent'
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent'
import ProductDisplayCard from '../../LayOutComponents/ProductDisplayCard/ProductDisplayCard';

export default function ProductDetails() {
    return (
        <div className='ProductDetails'>
            <HeaderComponent />
            <main className='ProductDetailsMain'>
                
                <section className='ProductDetailsMain-Section'>

                    <div className='CustomerChoice'>
                        <p className='CustomerChoiceHeading'>CUSTOMERS ALSO BROUGHT</p>
                        <div className='CustomerChoiceProducts'>
                            <ProductDisplayCard />
                            <ProductDisplayCard />
                            <ProductDisplayCard />
                            <ProductDisplayCard />
                            <ProductDisplayCard />
                        </div>
                    </div>

                </section>
            </main>
            <FooterComponent />
        </div>
    )
}
