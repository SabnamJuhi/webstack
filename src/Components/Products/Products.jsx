import React from 'react'
import './Products.css';
import Product from '../../Assets/product.jpg';
import Product1 from '../../Assets/product1.jpg';
import Product2 from '../../Assets/product2.jpg';
import Product3 from '../../Assets/product3.jpg';
import Product4 from '../../Assets/product4.jpg';
import Product5 from '../../Assets/product5.jpg';
import Product6 from '../../Assets/product6.jpg';
import Product7 from '../../Assets/product7.jpg';
import Product8 from '../../Assets/product8.jpg';
import Product9 from '../../Assets/product9.jpg';
import Product10 from '../../Assets/product10.jpg';
import Product11 from '../../Assets/product11.jpg';
import Rightarrow from '../../Assets/right-arrow.png';
import Leftarrow from '../../Assets/left-arrow.png';
const Products = () => {
  return (
    <div className='products-main'>
        <p>Popular Personalised Gifts</p>
        <div className='products'>
            <img style={{height:'4rem',width:'4rem',paddingTop:'7rem'}} src={Leftarrow} alt='' />
            <div className='products-item'>
                    <div><img src={Product} alt='' /></div>
                    <div>
                        <span>"Cheers to a Star Friend"</span>
                        <span>Personalised Hip Flask Gift Set</span>
                        <span style={{fontweight:'Bold'}}>&#163;27.99</span>
                    </div>
            </div>
            <div className='products-item'>
                    <div><img src={Product1} alt='' /></div>
                    <div>
                        <span>3D Christening Box</span>
                        <span>Frame for a Baby Boy Gift</span>
                        <span>&#163;23.99</span>
                    </div>
            </div>
            <div className='products-item'>
                    <div><img src={Product2} alt='' /></div>
                    <div>
                        <span>Baby Christening Gift</span>
                        <span>Jade Glass Block (Star Design)</span>
                        <span>&#163;24.99</span>
                    </div>
            </div>
            <div className='products-item'>
                    <div><img src={Product3} alt='' /></div>
                    <div>
                        <span>Personalised Gift Mug for</span>
                        <span>Grandfather of the Groom</span>
                        <span>&#163;27.99</span>
                    </div>
            </div>
            <img style={{height:'4rem',width:'4rem',paddingTop:'7rem'}} src={Rightarrow} alt='' />
        </div>
        <div className='products'>
            <img style={{height:'4rem',width:'4rem',paddingTop:'7rem'}} src={Leftarrow} alt='' />
            <div className='products-item'>
                    <div><img src={Product4} alt='' /></div>
                    <div>
                        <span>Anniversary Engraved Wide</span>
                        <span>Glasses Gift Set</span>
                        <span>&#163;32.99</span>
                    </div>
            </div>
            <div className='products-item'>
                    <div><img src={Product5} alt='' /></div>
                    <div>
                        <span>Personalised Anniversary</span>
                        <span>Glass Keepsake Presentation Gift</span>
                        <span>&#163;27.99</span>
                    </div>
            </div>
            <div className='products-item'>
                    <div><img src={Product6} alt='' /></div>
                    <div>
                        <span>Engraved Brushed Steel Hip</span>
                        <span>Flask Anniversary Gift for Him</span>
                        <span>&#163;25.99</span>
                    </div>
            </div>
            <div className='products-item'>
                    <div><img src={Product7} alt='' /></div>
                    <div>
                        <span>Personalised Wedding</span>
                        <span>Anniversary Whisky Glasses Gift</span>
                        <span>&#163;38.99</span>
                    </div>
            </div>
            <img style={{height:'4rem',width:'4rem',paddingTop:'7rem'}} src={Leftarrow} alt='' />
        </div>
        <div className='products'>
            <img style={{height:'4rem',width:'4rem',paddingTop:'7rem'}} src={Leftarrow} alt='' />
            <div className='products-item'>
                <div><img src={Product8} alt='' /></div>
                <div>
                    <span>Baby Chic Splashing In Rain</span>
                    <span>Boys Wall Clock Gift</span>
                    <span>&#163;31.99</span>
                </div>
            </div>
            <div className='products-item'>
                <div><img src={Product9} alt='' /></div>
                <div>
                    <span>Astronaut Door Plaque</span>
                    <span>Personalised Gift</span>
                    <span>&#163;12.99</span>
                </div>
            </div>
            <div className='products-item'>
                <div><img src={Product10} alt='' /></div>
                <div>
                    <span>Biplane Bedroom Door</span>
                    <span>Plaque Personalised Gift</span>
                    <span>&#163;12.99</span>
                </div>
            </div>
            <div className='products-item'>
                <div><img src={Product11} alt='' /></div>
                <div>
                    <span>Yellow Digger Door</span>
                    <span>Plaque Personalised Gift</span>
                    <span>&#163;12.99</span>
                </div>
            </div>
            <img style={{height:'4rem',width:'4rem',paddingTop:'7rem'}} src={Leftarrow} alt='' />
        </div>
    </div>
  )
}

export default Products
