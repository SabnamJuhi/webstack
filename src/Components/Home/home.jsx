import React from 'react'
import './home.css';
import Display from '../../Assets/display.png';
import Rightleaf from '../../Assets/right.png';
import Leftleaf from '../../Assets/left.png';
import Giftimage from '../../Assets/gift-image.png';

const home = () => {
  return (
    <div className='Home'>
      <div className='Home-1'>
        
          <div className='child-1'><img src={Display} alt='' /></div>
          
          <div className='child-2'>
              <span>We sell gifts that can be</span><br/>
              <span>Personalised</span>
          
              <div className='Shopping-logo'>
                  <img src={Leftleaf} alt='' />
                  <div>Shop Now</div>
                  <img src={Rightleaf} alt='' />
              </div>
          </div>
      
      </div>
      <div className='Home-2'>
          <div className='gift-text'>
            <span style={{color:'blue',fontSize:'1.5rem',paddingtop:'2rem'}}>Find the perfect personal gift for any adventure.</span><br/>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <span>Lorem Ipsum has been the industry standard dummy text</span>
          </div>
          <div className='gift-boxes'>
            <div className='gift-box-1'>
              <img src={Giftimage} alt='' />
              <div>
                <span>Jewellery</span>
                <span>Boxes</span>
              </div>
            </div>
            <div className='gift-box-1'>
              <img src={Giftimage} alt='' />
              <div>
                <span>Baby &</span>
                <span>Christening</span>
              </div>
            </div>
            <div className='gift-box-1'>
              <img src={Giftimage} alt='' />
              <div>
              <span>Wooden</span>
              <span>Boxes</span>
              </div>
            </div>
            <div className='gift-box-1'>
              <div><img style={{height:'3rem'}}src={Giftimage} alt='' /></div>
              
              <div className='new-box'>
              <span>Personalised</span>
              <span>Mugs</span>
              </div>
            </div>
            <div className='gift-box-1'>
              <img src={Giftimage} alt='' />
              <div>
                <span>Anniversary</span>
                <span>Gifts</span>
              </div>
            </div>
            <div className='gift-box-1'>
              <img src={Giftimage} alt='' />
              <div>
              <span>Birthday</span>
              <span>Gifts</span>
              </div>
            </div>
            <div className='gift-box-1'>
              <img src={Giftimage} alt='' />
              <div>
              <span>Childrens</span>
              <span>Gifts</span>
              </div>
            </div>
            <div className='gift-box-1'>
              <img src={Giftimage} alt='' />
              <div>
                <span>Gifts for</span>
                <span>Him & Her</span>
              </div>
            </div>
            <div className='gift-box-1'>
              <img src={Giftimage} alt='' />
              <div>
                <span>Gifts for</span>
                <span>Pet</span>
              </div>
            </div>
            <div className='gift-box-1'>
              <img src={Giftimage} alt='' />
              <div>
              <span>Wedding</span>
              <span>Gifts</span>
              </div>
            </div>
            <div className='gift-box-1'>
              <img src={Giftimage} alt='' />
              <div>
                <span>Names<span>
                  </span>Frames</span>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default home
