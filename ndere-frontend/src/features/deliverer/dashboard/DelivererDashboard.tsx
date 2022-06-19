import React from 'react';  
import { Deliverer } from '../../../app/models/Deliverer';
import '../../../styles/table.css';
import Button from '../../../utils/Button';
import '../../../styles/Components.scss';
import DelivererForm from '../form/DelivererForm';

interface Props {
    deliverers: Deliverer[];
    editMode: boolean;
    setEditMode: () => void;
    handleFormClose: () => void;
    handleFormOpen: () => void;
    createOrEdit: (deliverer: Deliverer) => void;
    deleteDeliverer: (id: string) => void;
    submitting: boolean;
}

export default function DelivererDashboard({deliverers, editMode, handleFormClose, handleFormOpen, 
    createOrEdit, deleteDeliverer, submitting}: Props) {

    const [deliverer, setDeliverer] = React.useState({});

    return (
        <>
            <td><Button className='btn action' onClick={() => {setDeliverer({}); handleFormOpen()}}>Create</Button></td>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>PhoneNumber</th>
                        <th>StreetName</th>
                        <th>Zip Code</th>
                        <th>City</th>
                        <th>NrPersonal</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {deliverers.map(deliverer => (
                            <tr key={deliverer.shperndaresId}>
                                <td>{deliverer.shperndaresId}</td>
                                <td>{deliverer.name}</td>
                                <td>{deliverer.surname}</td>
                                <td>{deliverer.email}</td>
                                <td>{deliverer.password}</td>
                                <td>{deliverer.phoneNumber}</td>
                                <td>{deliverer.streetName}</td>
                                <td>{deliverer.zipCode}</td>
                                <td>{deliverer.city}</td>
                                <td>{deliverer.nrPersonal}</td>
                                <td><Button className='btn' onClick={() => {setDeliverer(deliverer); handleFormOpen()}}>Edit</Button></td>
                                <td><Button className='btn action' onClick={() => deleteDeliverer(deliverer.shperndaresId.toString())}>Delete</Button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <DelivererForm
                open={editMode}
                deliverer={deliverer}
                formClose={handleFormClose}
                createOrEdit={createOrEdit}
                submitting={submitting}
            />
        </>
    )
}