import React from 'react'
import './DeliverySystem.css';
import Num2 from '../../Assets/num2.png';
import Num1 from '../../Assets/num1.png';
import Num3 from '../../Assets/num3.png';
const DeliverySystem = () => {
  return (
    <div className='main-div'>
      <div className='child-div'>
            <div>
                <img src={Num2} alt='' />
            </div>
            <div id='text'>
                <span className='yollow-text'>Free Shipping</span>
                <span className='white-text'>Over &#163;150</span>
            </div>
      </div>
      <div className='child-div'>
            <div>
                <img src={Num3} alt='' />
            </div>
            <div id='text'>
                <span className='yollow-text'>Fast Delivery</span>
                <span className='white-text'>First and reliable delivery</span>
            </div>
      </div>
      <div className='child-div'>
            <div>
                <img src={Num1} alt='' />
            </div>
            <div id='text'>
                <span className='yollow-text'>Safe Payments</span>
                <span className='white-text'>Safe Pay Services Provides</span>
            </div>
      </div>
      
    </div>
  )
}

export default DeliverySystem
