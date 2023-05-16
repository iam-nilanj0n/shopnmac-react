import React, { useState } from 'react';
import './ProductDetails.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent'
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent'
import ProductDisplayCard from '../../LayOutComponents/ProductDisplayCard/ProductDisplayCard';
import starIcon from '../../../assets/star-Icon.png';

const styleArr = [{
    display: 'inherit'
}, {
    display: 'none'
}]

const fontStyleArr = [{
    fontWeight: 'bolder'
}, {
    fontWeight: 'inherit'
}]

export default function ProductDetails() {
    const [productItemCount, setProductItemCount] = useState(1);
    const [showDescriptionAdditionalInfo, setShowDescriptionAdditionalInfo] = useState([styleArr[0], styleArr[1]])
    const [descriptionAddInfoFont, setDescriptionAddInfoFont] = useState([fontStyleArr[0], fontStyleArr[1]])

    const productItemCountHandler = (countState) => {
        if (countState === 'increase') {
            setProductItemCount(prev => prev + 1)
        }

        if (productItemCount > 1) {
            if (countState === 'decrease') {
                setProductItemCount(prev => prev - 1)
            }
        }
    }

    const informationShowHandler = (informationType) => {
        if (informationType === 'description') {
            setShowDescriptionAdditionalInfo([styleArr[0], styleArr[1]])
            setDescriptionAddInfoFont([fontStyleArr[0], fontStyleArr[1]])
        }

        if (informationType === 'additionalInfo') {
            setShowDescriptionAdditionalInfo([styleArr[1], styleArr[0]])
            setDescriptionAddInfoFont([fontStyleArr[1], fontStyleArr[0]])
        }
    }

    return (
        <div className='ProductDetails'>
            <HeaderComponent />
            <main className='ProductDetailsMain'>

                <section className='ProductDetailsMain-Section'>

                    <div className='ProductDetailsMain-SectionTop'>
                        <p className='ProductDetailsMain-SectionTopHeading'>Showing Product of <b>Product Name</b></p>
                        <div className='productDispalyAndDetails'>
                            <div className='productDispalyAndDetails-Left'>

                            </div>

                            <div className='productDispalyAndDetails-Middle'>
                                <div className='productDispalyAndDetails-Middle-Top'>
                                    <b>Product Name</b>
                                    <b>Categories: Health & Wellness</b>
                                    <b>Item Code</b>
                                    <div className='productDetails-RatingBox'>
                                        <p>0</p>
                                        <img src={starIcon} alt='starIcon' className='starIcon' />
                                        <div className='productRatingSeparate'></div>
                                        <p>0</p>
                                        <p className='productDetails-RatingBoxRating'>Rating</p>
                                    </div>
                                </div>

                                <div className='productDispalyAndDetails-Middle-Bottom'>
                                    <b>US $</b>
                                    <b>Unit:</b>
                                    <b>Weight:</b>
                                    <button className='fa fa-heart-o productDetails-WishList'>
                                        Add to Wishlist
                                    </button>
                                    <div className='productShare-Div'>
                                        <p>Share This Items:</p>
                                        <div className='productShare-Buttons'>
                                            <button className='fa fa-facebook' />
                                            <button className='fa fa-twitter' />
                                            <button className='fa fa-whatsapp' />
                                            <button className='fa fa-linkedin' />
                                        </div>
                                    </div>

                                </div>
                                <button className='productDetails-ReviewButton'>Post Your Product Review</button>
                            </div>

                            <div className='productDispalyAndDetails-Right-AddToCartBox'>
                                <b className='productDispalyAndDetails-Right-Heading'>
                                    <span className='span1'>One Time Puschase</span>
                                    <span className='span2'>US $</span>
                                </b>
                                <p className='InStock'>In Stock.</p>

                                <div className='productItemCount'>
                                    <p className='minusSign' onClick={(e) => productItemCountHandler('decrease')}>-</p>
                                    <p>{productItemCount}</p>
                                    <p className='plusSign' onClick={(e) => productItemCountHandler('increase')}>+</p>
                                </div>
                                <button className='productDispalyAndDetails-Right-AddToCartButton'>Add to cart</button>
                            </div>
                        </div>

                        <div className='ProductDetailsMain-SectionBottom'>
                            <p className='ProductDetailsMain-SectionBottom-Heading'>
                                <span className='description' onClick={(e) => informationShowHandler('description')} style={descriptionAddInfoFont[0]}>Description</span>
                                <span className='ProductDetailsMain-SectionBottom-Separate'>/</span>
                                <span className='AddInfo' onClick={(e) => informationShowHandler('additionalInfo')} style={descriptionAddInfoFont[1]}>Additional Information</span>
                            </p>
                            <p className='ProductDetailsMain-SectionBottom-Main-Description' style={showDescriptionAdditionalInfo[0]}>
                                Ultra K2-D3 provides the recommended amount of vitamins K2 and a liberal amount of vitamin D3, the preferred form of vitamin D. These vitamins are specific for calcium metabolism, bone health and density retention.
                                * Research has recently shown the majority of North Americans are deficient in these vitamins, especially during dark winter months, and thought to be directly responsible for a portion of adult bone breakage. As a pleasant tasting, chewable tablet, Ultra K2-D3 is easily taken by people who find it difficult to swallow supplements and need vitamins K2 and D3.
                            </p>
                            <div className='ProductDetailsMain-SectionBottom-Main-AdditionalInformation' style={showDescriptionAdditionalInfo[1]}>
                                <b>Other ingredients</b>
                                <p>Sorbitol, fructose, rice bran, stearic acid (vegetable source), cellulose, natural flavors, magnesium stearate (vegetable source), silicon dioxide</p>
                                <b>Suggested Use</b>
                                <p>DIRECTIONS: Take one tablet with or between meals or as directed by your doctor.</p>
                                <b>Warnings</b>
                                <p>KEEP OUT OF THE REACH OF CHILDREN</p>
                            </div>
                        </div>
                    </div>

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
