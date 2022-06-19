import React, { useState, useEffect } from 'react';
import { Food } from '../../../app/models/Food';
import { Restaurant } from '../../../app/models/Restaurant';
import '../../../styles/table.css';
import Button from '../../../utils/Button';
import '../../../styles/Components.scss';
import KlientiForm from '../form/FoodForm';
import axios from 'axios';

interface Props {
    foods: Food[];
    editMode: boolean;
    setEditMode: () => void;
    handleFormClose: () => void;
    handleFormOpen: () => void;
    createOrEdit: (food: Food) => void;
    deleteFood: (id: string) => void;
    submitting: boolean;
}


function Foods(props: any) {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        axios.get('https://localhost:7077/api/Restaurant/' + props.food.restaurant).then(response => {
            setRestaurant(response.data.name)
        });
    }, [props.food.restaurant]);

    return (
        <tr key={props.food.foodId}>
            <td>{props.food.foodId}</td>
            <td>{props.food.name}</td>
            <td>{props.food.ingredients}</td>
            <td>{props.food.price}</td>
            <td>{props.food.cuisineType}</td>
            <td>{restaurant}</td>
            <td><Button className='btn' onClick={() => {props.setFood(props.food); props.handleFormOpen()}}>Edit</Button></td>
            <td><Button className='btn action' onClick={() => props.deleteFood(props.food.foodId.toString())}>Delete</Button></td>
        </tr>
    )
}

export default function FoodDashboard({foods, editMode, handleFormClose, handleFormOpen, 
    createOrEdit, deleteFood, submitting}: Props) {
    
        const [food, setFood] = useState({});

        function getRestaurantById(id: number) {
            let res = '';
            axios.get('https://localhost:7077/api/Restaurant/' + id).then(response => {
                res = response.data.name;
            });
            return res;
        }

    return (
        <>
            <td><Button className='btn action' onClick={() => {setFood({}); handleFormOpen()}}>Create</Button></td>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>FoodId</th>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Price</th>
                        <th>CuisineType</th>
                        <th>Restaurant</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map(food => (
                        <Foods food={food} setFood={setFood} handleFormOpen={handleFormOpen} deleteFood={deleteFood}/>
                    ))}
                </tbody>
            </table>
            <KlientiForm
                open={editMode}
                food={food}
                formClose={handleFormClose}
                createOrEdit={createOrEdit}
                submitting={submitting}
            />
        </>
    )
}