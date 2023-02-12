import React from 'react'
import './Reviews.css';
import Rating from '../../Assets/Rating-icon.png'

const Reviews = () => {
  return (
    <div className='Rating-div'>
        <div className='rating-1'>
            <span>Reviews</span>
            <img src={Rating} alt='' />
            <span>Trusted Customer Reviews</span>
        </div>
        <div className='rating'>
            <span>Biodiesel tbh cronut consectetur tousled poke try-hard yuccie chambray distillery viral pok pok. Adaptogen offal lorem small batch, labore godard artisan retro cornhole unicorn heirloom tempor excepteur.</span>
            <span className='blue-text'>Brenda Watson | Dec 27, 2021</span>
        </div>
        <div className='rating'>
            <span>Biodiesel tbh cronut consectetur tousled poke try-hard yuccie chambray distillery viral pok pok. Adaptogen offal lorem small batch, labore godard artisan retro cornhole unicorn heirloom tempor excepteur.</span>
            <span className='blue-text'>Brenda Watson | Dec 27, 2021</span>
        </div>
        <div className='rating'>
            <span>Biodiesel tbh cronut consectetur tousled poke try-hard yuccie chambray distillery viral pok pok. Adaptogen offal lorem small batch, labore godard artisan retro cornhole unicorn heirloom tempor excepteur.</span>
            <span className='blue-text'>Brenda Watson | Dec 27, 2021</span>
        </div>
    </div>
  )
}

export default Reviews
