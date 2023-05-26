import React from 'react';
import './Payment.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent';
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent';

export default function Payment() {
    return (
        <div className='Payment'>
            <HeaderComponent />

            {/* Payment-Main part starts from here */}
            <main className='Payment-Main'>

                <section className='Payment-Main-section'>

                    <h1 className='Payment-Main-Heading'>CONFIRM CHECKOUT PROCESS</h1>

                    <div className='Payment-Main-Section-Top'>
                        <div className='BillingAddress-Div'>
                            <h2 className='BillingAddress-Heading'>BILLING ADDRESS</h2>
                            <p className='BillingAddress-UserName'>JYOTIRMOY SINHA</p>
                            <ul className='BillingAddress'>
                                <li>DDA FLAT, POCKET 13, DWARKA PH 1, MANGLAPURI, PALAM</li>
                                <li>NEW DELHI, NEW DELHI</li>
                                <li>110045</li>
                                <li>Bermuda</li>
                                <li><b>Ph: </b>9999652812</li>
                            </ul>
                        </div>
                        <div className='ShippingAddress-Div'>
                            <h2 className='ShippingAddress-Heading'>SHIPPING ADDRESS</h2>
                            <p className='ShippingAddress-UserName'>JYOTIRMOY SINHA</p>
                            <ul className='ShippingAddress'>
                                <li>116, DDA FLAT, POCKET 13, DWARKA PH 1, MANGLAPURI, PALAM</li>
                                <li>NEW DELHI, NEW DELHI</li>
                                <li>110045</li>
                                <li>India</li>
                                <li><b>Ph: </b>+919999652812</li>
                            </ul>
                        </div>
                    </div>

                    <div className='paymentHr-Separate'></div>

                    <div className='Payment-Main-Section-Bottom'>
                        <div className='LeftPart-Coupon-Discount'>
                            <h2 className='Coupon-Discount-Heading'>Coupon Discount</h2>
                            <p className='Coupon-Discount-subHeading'>Enter your coupon code if you have one.</p>
                            <div className='LeftPart-Coupon-Discount-Div'>
                                <input type='text' placeholder='Coupon Code' />
                                <button className='applyCoupon-Button'>Apply coupon</button>
                            </div>
                        </div>

                        <div className='RightPart-Payment-Details'>

                            <div class="table-responsive">
                                <div className='table-Headings'>
                                    <b>Image</b>
                                    <b>Product</b>
                                    <b>Price($)</b>
                                    <b>Quantity</b>
                                    <b>Total</b>
                                </div>
                                <div className='table-Details'>
                                    <img src="https://api.shopnmac.com/upload/product/thumbnail/3PMAN0AyWDY6UjcbKfOaSyrZiA7kBlzZFYzvVroQ.png" alt='tableImg' style={{ width: "100px" }} />
                                    <p>Test Product</p>
                                    <p>$15</p>
                                    <p>1</p>
                                    <p>US $15</p>
                                </div>
                                <div className='table-cartTotal'>
                                    <b>Cart Total</b>
                                    <p>US $15</p>
                                </div>
                                <div className='table-shippingCharge'>
                                    <b>Shipping Charge</b>
                                    <p>US $0</p>
                                </div>
                                <div className='table-totalPay'>
                                    <b>Total Pay</b>
                                    <p>US $15</p>
                                </div>
                            </div>

                            <div className='paymentForm-Part'>
                                <form id='paymentForm'>
                                    <div className='firstNLastName'>
                                        <div className='firstName'>
                                            <label>Card Holder First name</label>
                                            <input type='text' placeholder='Card Holder First name' />
                                        </div>
                                        <div className='lastName'>
                                            <label>Card Holder Last name</label>
                                            <input type='text' placeholder='Enter Card Holder Last name' />
                                        </div>
                                    </div>

                                    <div className='CreditCardNumber-Div'>
                                        <label>Credit Card Number</label>
                                        <input type='text' placeholder='Credit Card Number' />
                                    </div>

                                    <div className='expiryDate-Div'>
                                        <label>Expiry Date</label>
                                        <div className='expiryDate-monthYear'>
                                            <select name="cmonth" id="monthSelect" required="">
                                                <option value="" disabled>Month</option>
                                                <option value="01">January</option>
                                                <option value="02">February</option>
                                                <option value="03">March</option>
                                                <option value="04">April</option>
                                                <option value="05">May</option>
                                                <option value="06">June</option>
                                                <option value="07">July</option>
                                                <option value="08">August</option>
                                                <option value="09">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>

                                            <select name="cyear" id="yearSelect" required="">
                                                <option value="" disabled>Year</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                                <option value="2030">2030</option>
                                                <option value="2031">2031</option>
                                                <option value="2032">2032</option>
                                                <option value="2033">2033</option>
                                                <option value="2034">2034</option>
                                                <option value="2035">2035</option>
                                                <option value="2036">2036</option>
                                                <option value="2037">2037</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='cvc-Div'>
                                        <label>CVC</label>
                                        <input type='text' placeholder='Enter CVV' />
                                    </div>

                                    <div className='otpAndTermsCondition-Div'>
                                        <div className='otpAndTermsCondition-Div-Top'>
                                            <input type='text' placeholder='Enter Code →' />
                                            <button className='OTP-Button'>7746</button>
                                        </div>
                                        <div className='otpAndTermsCondition-Div-Bottom'>
                                            <input type='checkbox' />
                                            <p className='otpAndTermsCondition-Div-Terms'>By Proceeding With This Purchase, I Acknowledge That I Have Read And Agree To The <span style={{ fontWeight: 'bolder' }}>Terms And Conditions</span> Of Use</p>
                                        </div>
                                    </div>

                                    <button className='payNow-Button'>PAY NOW</button>

                                </form>
                            </div>

                        </div>
                    </div>

                </section>
            </main>


            {/* Coomon Footer component is here */}
            <FooterComponent />
        </div>
    )
}
