import React, { ChangeEvent } from 'react';
import Button from '../../../utils/Button';

export default function KlientiForm(props : any) {
    const initialState = props.client ?? {
        klientiId: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        phoneNumber: '',
        streetName: '',
        zipCode: '',
        city: '',
        role: '',
        myCarts: ''
    };

    const [client, setClient] = React.useState(initialState);
    
    function handleSubmit() {
        props.createOrEdit(client);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setClient({...client, [name]: value});
        console.log(client);
    }

    React.useEffect(() => {
        setClient(initialState)
    }, [initialState]);

    return (props.open) ? (
        <>
            <form key={client.klientiId}>
                <div>
                    <div>
                        <input type="text" name="name" onChange={handleInputChange} defaultValue={client.name} placeholder='Name'/>
                        <input type="text" name="surname" onChange={handleInputChange} defaultValue={client.surname} placeholder='Surname'/>
                        <input type="text" name="email" onChange={handleInputChange} defaultValue={client.email} placeholder='Email'/>
                        <input type="text" name="password" onChange={handleInputChange} defaultValue={client.password} placeholder='Password'/>
                    </div>
                    <div>
                        <input type="text" name="phoneNumber" onChange={handleInputChange} defaultValue={client.phoneNumber} placeholder='Phone Number'/>
                        <input type="text" name="streetName" onChange={handleInputChange} defaultValue={client.streetName} placeholder='Street Name'/>
                        <input type="text" name="zipCode" onChange={handleInputChange} defaultValue={client.zipCode} placeholder='ZipCode'/>
                        <input type="text" name="city" onChange={handleInputChange} defaultValue={client.city} placeholder='City'/>
                        <input type="text" name="role" onChange={handleInputChange} defaultValue={client.role} placeholder='Role'/>
                    </div>
                </div>
                <div className='form-buttons'>
                    <Button loading={props.submitting} className='btn action' onClick={() => { handleSubmit(); props.client = {}; setClient(initialState)}}>Submit</Button>    
                    <Button className='btn' onClick={props.formClose}>Cancel</Button>
                </div>
            </form>
        </>
    ) : null;
}