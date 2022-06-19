import React, { ChangeEvent } from 'react';
import Button from '../../../utils/Button';

export default function KlientiForm(props : any) {
    
    const initialState = props.restaurant ?? {
        restaurantId: '',
        name: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: ''
    };

    const [restaurant, setRestaurant] = React.useState(initialState);
    
    function handleSubmit() {
        props.createOrEdit(restaurant);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setRestaurant({...restaurant, [name]: value});
    }

    React.useEffect(() => {
        setRestaurant(initialState)
    }, [initialState]);

    return (props.open) ? (
        <>
            <form key={restaurant.FoodId}>
                <div className='food-form'>
                    <input type="text" name="name" onChange={handleInputChange} defaultValue={restaurant.name} placeholder='Name'/>
                    <input type="text" name="email" onChange={handleInputChange} defaultValue={restaurant.email} placeholder='Email'/>
                    <input type="text" name="password" onChange={handleInputChange} defaultValue={restaurant.password} placeholder='Password'/>
                    <input type="text" name="address" onChange={handleInputChange} defaultValue={restaurant.address} placeholder='Address'/>
                    <input type="text" name="phoneNumber" onChange={handleInputChange} defaultValue={restaurant.phoneNumber} placeholder='PhoneNumber'/>
                </div>
                <div className='form-buttons'>
                    <Button loading={props.submitting} className='btn action' onClick={() => { handleSubmit(); props.restaurant = {}; setRestaurant(initialState) }}>Submit</Button>
                    <Button className='btn' onClick={() => {props.formClose(); setRestaurant({})}}>Cancel</Button>
                </div>
            </form>
        </>
    ) : null;
}