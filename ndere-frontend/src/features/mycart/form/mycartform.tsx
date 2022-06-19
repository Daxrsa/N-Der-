import React, { ChangeEvent } from 'react';
import { Cart } from '../../../app/models/Cart';
import Button from '../../../utils/Button';

interface Props{
    
}

export default function MyCartForm(){
    return(
        <form >
            <div>
                <input type="text" placeholder='Food Id...'/>
                <input type="text" placeholder='Client Id...'/>
                <div className='form-buttons'>
                    <Button  className='btn action'>Submit</Button>    
                    <Button className='btn'>Cancel</Button>
                </div>
            </div>
        </form>
    )
}