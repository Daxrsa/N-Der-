import React from 'react'
import './brand.css';
import {google} from './imports';
import { betterCopyright } from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand'>

        <p>Copyright All Rights Reserved N'Derë</p>
        <img src={ betterCopyright} alt=" betterCopyright" width={30} height={20}/>
     
    </div>
  )
}

export default Brand