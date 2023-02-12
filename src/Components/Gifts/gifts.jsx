import React from 'react'
import './gifts.css';
import Gift1 from '../../Assets/gift1.jpg';
import Gift2 from '../../Assets/gift2.jpg';
import Gift3 from '../../Assets/gift3.jpg';
const gifts = () => {
  return (
    <div className='container cont1'>
      <div className='item-1'>
            <div className='box-1-1'><img src={Gift1} alt='' /></div>
            
            <div className='box-1-2'><span>gifts for</span>
                <span>Personalised Mugs</span></div>
            
      </div>
      <div className='item-2'>
            <div className='box-2-1'><img src={Gift2} alt='' /></div>
            <div className='box-2-2'><span>gifts for</span>
                <span>Wedding Gifts</span></div>
           
      </div>
      <div className='item-3'>
            <div className='box-3-1'><img src={Gift3} alt='' /></div>
            <div className='box-3-2'><span>gifts for</span>
                <span>Her</span></div>
           
      </div>
    </div>
  )
}

export default gifts
