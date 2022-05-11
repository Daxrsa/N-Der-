import React from 'react';
import { Restaurant } from '../../../app/models/Restaurant';
import '../../../styles/table.css';
import Button from '../../../utils/Button';
import '../../../styles/Components.scss';
import RestaurantForm from '../form/RestaurantForm';

interface Props {
    restaurants: Restaurant[];
    editMode: boolean;
    setEditMode: () => void;
    handleFormClose: () => void;
    handleFormOpen: () => void;
    createOrEdit: (Restaurant: Restaurant) => void;
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>PhoneNumber</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {restaurants.map(restaurant => (
                            <tr key={restaurant.restaurantId}>
                                <td>{restaurant.restaurantId}</td>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.email}</td>
                                <td>{restaurant.password}</td>
                                <td>{restaurant.address}</td>
                                <td>{restaurant.phoneNumber}</td>
                                <td><Button className='btn' onClick={() => {setRestaurant(restaurant); handleFormOpen()}}>Edit</Button></td>
                                <td><Button className='btn action' onClick={() => deleteRestaurant(restaurant.restaurantId.toString())}>Delete</Button></td>
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