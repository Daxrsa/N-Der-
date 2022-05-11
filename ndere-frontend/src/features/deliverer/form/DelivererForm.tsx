import React, { ChangeEvent } from 'react';
import Button from '../../../utils/Button';

export default function DelivererForm(props : any) {
    const initialState = props.deliverer ?? {
        shperndaresId: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        phoneNumber: '',
        streetName: '',
        zipCode: '',
        city: '',
        nrPersonal: ''
    };

    const [deliverer, setDeliverer] = React.useState(initialState);
    
    function handleSubmit() {
        props.createOrEdit(deliverer);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setDeliverer({...deliverer, [name]: value});
        console.log(deliverer);
    }

    React.useEffect(() => {
        setDeliverer(initialState)
    }, [initialState]);

    return (props.open) ? (
        <>
            <form key={deliverer.klientiId}>
                <div>
                    <div>
                        <input type="text" name="name" onChange={handleInputChange} defaultValue={deliverer.name} placeholder='Name'/>
                        <input type="text" name="surname" onChange={handleInputChange} defaultValue={deliverer.surname} placeholder='Surname'/>
                        <input type="text" name="email" onChange={handleInputChange} defaultValue={deliverer.email} placeholder='Email'/>
                        <input type="text" name="password" onChange={handleInputChange} defaultValue={deliverer.password} placeholder='Password'/>
                    </div>
                    <div>
                        <input type="text" name="phoneNumber" onChange={handleInputChange} defaultValue={deliverer.phoneNumber} placeholder='PhoneNumber'/>
                        <input type="text" name="streetName" onChange={handleInputChange} defaultValue={deliverer.streetName} placeholder='StreetName'/>
                        <input type="text" name="zipCode" onChange={handleInputChange} defaultValue={deliverer.zipCode} placeholder='ZipCode'/>
                        <input type="text" name="city" onChange={handleInputChange} defaultValue={deliverer.city} placeholder='City'/>
                        <input type="text" name="nrPersonal" onChange={handleInputChange} defaultValue={deliverer.nrPersonal} placeholder='NrPersonal'/>
                    </div>
                </div>
                <div className='form-buttons'>
                    <Button loading={props.submitting} className='btn action' onClick={() => { handleSubmit(); props.deliverer = {}; setDeliverer(initialState)}}>Submit</Button>    
                    <Button className='btn' onClick={props.formClose}>Cancel</Button>
                </div>
            </form>
        </>
    ) : null;
}