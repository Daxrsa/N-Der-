import React from 'react';
import { Restaurant } from '../../../app/models/Restaurant';
import '../../../styles/table.css';
import Button from '../../../utils/Button';
import '../../../styles/Components.scss';
import RestaurantForm from '../form/RestaurantForm';
import { AppRestaurant } from '../../../app/models/AppRestaurant';

interface Props {
    restaurants: AppRestaurant[];
    editMode: boolean;
    setEditMode: () => void;
    handleFormClose: () => void;
    handleFormOpen: () => void;
    createOrEdit: (AppRestaurant: AppRestaurant) => void;
    deleteRestaurant: (id: string) => void;
    submitting: boolean;
}

export default function RestaurantDashboard({restaurants, editMode, handleFormClose, handleFormOpen, 
    createOrEdit, deleteRestaurant, submitting}: Props) {

    const [restaurant, setRestaurant] = React.useState({});

    return (
        <>
            <td><Button className='btn action' onClick={() => {setRestaurant({}); handleFormOpen()}}>Create</Button></td>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>RestaurantId</th>
                        <th>Display Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>PhoneNumber</th>
                        <th>Bio</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {restaurants.map(restaurant => (
                            <tr key={restaurant.Id}>
                                <td>{restaurant.Id}</td>
                                <td>{restaurant.displayName}</td>
                                <td>{restaurant.username}</td>
                                <td>{restaurant.email}</td>
                                <td>{restaurant.password}</td>
                                <td>{restaurant.address}</td>
                                <td>{restaurant.phoneNumber}</td>
                                <td>{restaurant.bio}</td>
                                <td><Button className='btn' onClick={() => {setRestaurant(restaurant); handleFormOpen()}}>Edit</Button></td>
                                <td><Button className='btn action' onClick={() => deleteRestaurant(restaurant.Id.toString())}>Delete</Button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <RestaurantForm
                open={editMode}
                restaurant={restaurant}
                formClose={handleFormClose}
                createOrEdit={createOrEdit}
                submitting={submitting}
            />
        </>
    )
}