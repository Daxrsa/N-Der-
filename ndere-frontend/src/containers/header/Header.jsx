import React from 'react'
import './header.css';
import mainPic from '../../assets/mainPic.jpeg';
import people from '../../assets/people.png';
const Header = () => {
  return (
    <div className='ndere__header section_padding' id='home' style={{backgroundImage: `url(${mainPic})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}> 
      <div className="ndere__header-content" >
        <p className='gradient__text'>
        Restaurants delivered to your door
        </p>
        
        <div className="ndere__header-content__input">
          <input type="search" placeholder='Enter City...'/>
          <button type="button">Get Started</button>
        </div>
        
     
      </div>
    </div>
  )
}

export default Header
