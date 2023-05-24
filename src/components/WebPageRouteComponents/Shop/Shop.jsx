import React, { useEffect, useState } from 'react';
import './Shop.css'
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent.jsx';
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent.jsx';
import ProductDisplayCard from '../../LayOutComponents/ProductDisplayCard/ProductDisplayCard.jsx';
import Axios from 'axios';

// const ApiBase = 'https://api-shopnmac.urips.co.in/api/';
const ApiShopnmacShopCategoryHealthWellness = `https://api.shopnmac.com/api/web/shop/category/health-wellness/products`;
const ShopCategoryHealthWellnessImageURL = 'https://api.shopnmac.com/';

export default function Shop() {
  const [data, setData] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const [lastPageNumber, setLastPageNumber] = useState(1)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    // Axios.get(`${ApiBase}web/categories`)
    Axios.get(`${ApiShopnmacShopCategoryHealthWellness}?page=${pageNumber}`)
      // Axios.get(`${ApiShopnmac}`)
      .then((res) => {
        // console.log(res.data.data.last_page);
        setLastPageNumber(res.data.data.last_page)
        setTotalProducts(res.data.data.total)
        setData(res.data.data.data)
      })
  }, [totalProducts, pageNumber, lastPageNumber])

  const paginationHandler = (pageStatus)=>{
    if(pageStatus === 'LastPage'){
      setPageNumber(lastPageNumber)
    }

    if(pageNumber>1){
      if(pageStatus === 'PrevPage'){
        setPageNumber(prev => prev -1)
      }
    }

    if(pageNumber < lastPageNumber - 2){
      if(pageStatus === 'NextPage'){
        setPageNumber(prev => prev+1)
      }
    }

    if(pageStatus==='numberButton1'){
      setPageNumber(pageNumber)
    }
    if(pageStatus==='numberButton2'){
      setPageNumber(pageNumber+1)
    }
    if(pageStatus==='numberButton3'){
      setPageNumber(pageNumber+2)
    }
  }

  return (
    <div className='Shop'>
      <HeaderComponent />
      <main className='ShopMain'>
        <section className='ShopMainSection'>
          <div className='ShopMainTop'>
            <p>Showing</p>
            <b>Health Wellness</b>
            <p> {`${pageNumber}-${pageNumber*15}`} of {totalProducts} results</p>
            <select>
              <option value=''>Sort by Price</option>
              <option value=''>Price: Low to High</option>
              <option value=''>Price: high to Low</option>
            </select>
          </div>
          <div className='ShopProductDisplay'>
            {(data) ? (
              <>
                {data.map((ele, i) => {
                  return (
                    <ProductDisplayCard
                      key={ele.id}
                      productName={`${ele.product_name}`}
                      productID={`${ele.sku}`}
                      productPic={`${ShopCategoryHealthWellnessImageURL}/${ele.thumbnail}`} />
                  )
                })}
              </>
            ) : (
              <></>
            )}
          </div>

          <div className='ShopProductDisplayController'>
            <button
              onClick={(e) => paginationHandler('PrevPage')}
            >
              Prev
            </button>
            <button onClick={(e)=> paginationHandler('numberButton1')}>{`${pageNumber}`}</button>
            <button onClick={(e)=> paginationHandler('numberButton2')}>{`${pageNumber + 1}`}</button>
            <button onClick={(e)=> paginationHandler('numberButton3')}>{`${pageNumber + 2}`}</button>
            <button
              onClick={(e) => paginationHandler('NextPage')}
            >
              Next
            </button>
            <button
              onClick={(e) => paginationHandler('LastPage')}
            >
              Last
            </button>
          </div>
        </section>
      </main>

      <FooterComponent />
    </div>
  )
}
