import React, { useEffect, useState } from 'react';
import './BannerDisplay.css';
import greaterThan from '../../../../assets/greaterThan.png';
import lesserThan from '../../../../assets/lesserThan.png';


const bannerPicUrls = ["https://api.shopnmac.com/upload/slider/banner/8Lt4P9i2mFud9F9qVupfmguzE3xq3Fio9bJ71Ur6.png",
    "https://api.shopnmac.com/upload/slider/banner/orVXOEzhcgg8CmO756sRtHCZi2DgjKE5CookPB9w.png",
    "https://api.shopnmac.com/upload/slider/banner/TgDNAQCucFg3Kas3lP6YeGLKSGQnbsQykh5vQlBd.png"]

export default function BannerDisplay() {
    const [picUrlArrayIndex, setPicUrlArrayIndex] = useState(0);
    const [secondCount, setSecondCount] = useState(0);
    const [imgClassName, setImageClassName] = useState('')

    useEffect(() => {
        if (secondCount === 4) {
            setPicUrlArrayIndex(prevIndex => prevIndex + 1)
            setSecondCount(0)
        }

        if (picUrlArrayIndex === 3) {
            setPicUrlArrayIndex(0)
        }
        if (picUrlArrayIndex < 0) {
            setPicUrlArrayIndex(2)
        }
        if (picUrlArrayIndex === 0) {
            setImageClassName('BannerPic-One')
        }
        if (picUrlArrayIndex === 1) {
            setImageClassName('BannerPic-Two')
        }
        if (picUrlArrayIndex === 2) {
            setImageClassName('BannerPic-Three')
        }

        const secondTimer = setInterval(() => {
            setSecondCount(prevCount => prevCount + 1)
        }, 1000)

        return () => {
            clearInterval(secondTimer)
        }
    }, [picUrlArrayIndex, secondCount, imgClassName])
    return (
        <div className='BannerDisplay'>
            {/* <p>{secondCount}</p> */}
            <section style={{ backgroundImage: `url(${bannerPicUrls[picUrlArrayIndex]})` }}>
                <div className='arrowControlPart'>
                    <img
                        src={lesserThan}
                        alt='lesserThan'
                        className='lesserThan'
                        onClick={(e) => {
                            setPicUrlArrayIndex(prevIndex => prevIndex - 1)
                            setSecondCount(0)
                        }}
                    />
                    <img
                        src={greaterThan}
                        alt='greaterThan'
                        className='greaterThan'
                        onClick={(e) => {
                            setPicUrlArrayIndex(prevIndex => prevIndex + 1)
                            setSecondCount(0)
                        }}
                    />
                </div>
            </section>
            {/* <img src={bannerPicUrls[picUrlArrayIndex]} alt='bannerPic' className={`${imgClassName} BannerPic`}/> */}
        </div>
    )
}
