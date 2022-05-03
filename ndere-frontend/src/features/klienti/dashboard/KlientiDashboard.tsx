import React from 'react';
import { Klienti } from '../../../app/models/Klienti';
import '../../../styles/table.css';
import Button from '../../../utils/Button';
import '../../../styles/Components.scss';
import KlientiForm from '../form/KlientiUpdateForm';

interface Props {
    clients: Klienti[];
    editMode: boolean;
    setEditMode: () => void;
    handleFormClose: () => void;
    handleFormOpen: () => void;
    createOrEdit: (client: Klienti) => void;
    deleteClient: (id: string) => void;
}

export default function KlientiDashboard({clients, editMode, handleFormClose, handleFormOpen, 
    createOrEdit, deleteClient}: Props) {
    const [client, setClient] = React.useState({});

    return (
        <>
            <td><Button className='btn-form' onClick={() => {setClient({}); handleFormOpen()}}>Create</Button></td>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone Number</th>
                        <th>Street Name</th>
                        <th>ZipCode</th>
                        <th>City</th>
                        <th>Role</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {clients.map(client => (
                            <tr key={client.klientiId}>
                                <td>{client.klientiId}</td>
                                <td>{client.name}</td>
                                <td>{client.surname}</td>
                                <td>{client.email}</td>
                                <td>{client.password}</td>
                                <td>{client.phoneNumber}</td>
                                <td>{client.streetName}</td>
                                <td>{client.zipCode}</td>
                                <td>{client.city}</td>
                                <td>{client.role}</td>
                                <td><Button className='btn-form' onClick={() => {setClient(client); handleFormOpen()}}>Edit</Button></td>
                                <td><Button className='btn-form' onClick={() => deleteClient(client.klientiId.toString())}>Delete</Button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <KlientiForm open={editMode} client={client} formClose={handleFormClose} createOrEdit={createOrEdit}/>
        </>
    )
}