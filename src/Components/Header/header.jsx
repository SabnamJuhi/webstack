import React from 'react';
import './header.css';
import Bars from '../../Assets/bars.png';
import Logo from '../../Assets/LOGO.png'
const header = () => {
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  return (
    <div>
      <div className='header-1'>
        <p>SHIPPING WITHIN THE UK MAINLAND IS FREE. WORLDWIDE DELIVERY IS &#163;4.95</p>
      </div>
      <div className='header-2'>
        <img src={Bars} alt='' />
        <img src={Logo} alt='' />
        <form className='form'>
            <input type="text" placeholder='Search..' />
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        <button type="submit"><i class="fas fa-user-circle"></i></button>
        <button type="submit"><i class="fa fa-search"></i></button>
       </div>
       <div className='header-3'>
            <a href=''>Home Page</a>
            <a href=''>Best Sellers</a>
            <a href=''>New Arrivals</a>
            <a href=''>About us</a>
            <a href=''>Blog</a>
            <a href=''>Contact us</a>
       </div>
    </div>
  )
}

export default header;
