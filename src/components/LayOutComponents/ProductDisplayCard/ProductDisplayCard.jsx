import React, { useEffect, useState } from 'react';
import './ProductDisplayCard.css';
import starIcon from '../../../assets/star-Icon.png';
import heartIcon from '../../../assets/heart-Icon.png';
import { useNavigate } from 'react-router-dom';


export default function ProductDisplayCard({ productPic, productID, productName, productPrice }) {
    const navigate = useNavigate()
    const [product_name, setProduct_Name] = useState(productName);

    // by this useEffect adjusting the productName in sort
    useEffect(() => {
        if (product_name) {

            let shortNaming = product_name
            if (shortNaming.length > 28) {
                // console.log(shortNaming.slice(0,28))
                setProduct_Name(`${shortNaming.trim().slice(0, 28)}...`)
            }
        }
    }, [product_name])

    return (
        <div className='ProductDisplayCard' onClick={(e) => navigate('/product-details')}>
            <section>

                <div className='ProductDisplayCardTop'>
                    <div className='ProductDisplayCardTop-Container' >
                        <img
                            src={productPic || 'https://api.shopnmac.com/upload/product/thumbnail/j0iaZscaeH2Oc4wpRNc5nB7xspAbXRnzxnELJAT7.jpg?w=360'}
                            alt='productImage'
                            className='productImage'
                        />
                        <div className='heartAndEye' >
                            <img src={heartIcon} alt='heartIcon' className='heartIcon' />
                            <i className="fa fa-eye eyeIcon"></i>
                        </div>
                    </div>
                </div>

                <div className='ProductDisplayCardBotton'>
                    <button>Add To Cart</button>
                    <p className='productPrice'>US $</p>
                    <p className='productName'>{product_name || 'Product Name'}</p>
                    <div className='productIdAndRating'>
                        <p className='productID'>{productID || 'ID-001'}</p>
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
