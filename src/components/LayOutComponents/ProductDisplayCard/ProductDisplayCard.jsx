import React from 'react';
import './ProductDisplayCard.css';
import starIcon from '../../../assets/star-Icon.png';
import heartIcon from '../../../assets/heart-Icon.png';

export default function ProductDisplayCard({ productPic, productID, productName, productPrice }) {
    return (
        <div className='ProductDisplayCard'>
            <section>

                <div className='ProductDisplayCardTop'>
                    <div className='ProductDisplayCardTop-Container'>
                        <img src='/' alt='productImage' className='productImage' />
                        <div className='heartAndEye'>
                            <img src={heartIcon} alt='heartIcon' className='heartIcon' />
                            <i class="fa fa-eye eyeIcon"></i>
                        </div>
                    </div>
                </div>

                <div className='ProductDisplayCardBotton'>
                    <button>Add To Cart</button>
                    <p className='productPrice'>US $</p>
                    <p className='productName'>Product Name</p>
                    <div className='productIdAndRating'>
                        <p className='productID'>ID-001</p>
                        <div className='productRatingBox'>
                            <p>0</p>
                            <img src={starIcon} alt='starIcon' className='starIcon' />
                            <div className='productRatingSeparate'></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
