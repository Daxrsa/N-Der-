import React from 'react';
import { Klienti } from '../../../app/models/Klienti';
import '../../../styles/table.css';

interface Props {
    clients: Klienti[];
}

export default function KlientiDashboard(props: Props) {
    return (
        <>
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
                    </tr>
                </thead>
                <tbody>
                        {props.clients.map(client => (
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
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    )
}