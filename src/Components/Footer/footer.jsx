import React from 'react';
import './footer.css';
import Logo from '../../Assets/LOGO.png';
import Card from '../../Assets/card.png';
const footer = () => {
  return (
            <div>
            
                <div className='footer-main'>
                    <div className='footer footer-1'>
                            <img src={Logo} alt='' />
                            <span>Get all the latest information on Events,<br/>Sales and Offers. Sign up for newsletter today.</span>
                            <div>
                                <span>Enter your e-mail Address</span>
                                <div>
                                    <input type='text' />
                                    <button type='submit' />Submit
                                </div>
                            </div>
                    </div>
                    
                    <div className='footer footer-2'>
                            <span>QUICK LINKS</span>
                            <span>About Us</span>
                            <span>Shipping & Returns</span>
                            <span>Privacy Notice</span>
                            <span>FAQ</span>
                            <span>Contact Info</span>
                            <span>Terms & Conditions</span>
                    </div>
                    
                    <div className='footer footer-3'>
                            <span>SECURE PAYMENTS</span>
                            <div>
                                <img src={Card} alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div>
                    </div>
                </div>
                
            
                <div className='footer-last'>
                    <span>Copyright 2022 My Personalised Gifts | Powered by Webstep Technologies Private Limited</span>
                </div>
            </div>
  )
}

export default footer;
