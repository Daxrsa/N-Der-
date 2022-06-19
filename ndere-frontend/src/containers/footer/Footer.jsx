import React from 'react'
import Brand from '../../components/brand/Brand.jsx'
import './footer.css';
const Footer = () => {
  return (
    <>
    <div className='footer'>
    <form className='form'>
       <h2>Contact Us</h2>
       <p>Send Us a Message</p>
       
       <input type='name' name='name' placeholder='Full Name' />
       <input type='email' name='email' placeholder='Email'/>
       <input type='text' name='subject' placeholder='Your Message'/>
       <button>Send</button>
       </form>
      
    </div>
     <Brand/>
     </>
  )
}

export default Footer