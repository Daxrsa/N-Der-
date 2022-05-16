import React, { ChangeEvent } from 'react';
import Button from '../../../utils/Button';

export default function CartForm(props : any) {
    const initialState = props.cart ?? {
        id: '',
        klientiId: '',
        foodId: ''
    };

    const [cart, setCart] = React.useState(initialState);
    
    function handleSubmit() {
        props.createOrEdit(cart);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setCart({...cart, [name]: value});
        console.log(cart);
    }

    React.useEffect(() => {
        setCart(initialState)
    }, [initialState]);

    return (props.open) ? (
        <>
            <form key={cart.klientiId}>
                <div>
                    <input type="number" name="clientId" onChange={handleInputChange} defaultValue={cart.klientiId} placeholder='Client'/>
                    <input type="number" name="foodId" onChange={handleInputChange} defaultValue={cart.foodId} placeholder='Food'/>
                </div>
                <div className='form-buttons'>
                    <Button loading={props.submitting} className='btn action' onClick={() => { handleSubmit(); props.cart = {}; setCart(initialState)}}>Submit</Button>    
                    <Button className='btn' onClick={props.formClose}>Cancel</Button>
                </div>
            </form>
        </>
    ) : null;
}