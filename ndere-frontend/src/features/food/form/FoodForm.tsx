import React, { ChangeEvent } from 'react';
import Button from '../../../utils/Button';

export default function KlientiForm(props : any) {
    
    const initialState = props.food ?? {
        foodId: '',
        name: '',
        ingredients: '',
        price: '',
        cuisineType: '',
        restaurant: ''
    };

    const [food, setFood] = React.useState(initialState);
    
    function handleSubmit() {
        props.createOrEdit(food);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setFood({...food, [name]: value});
    }

    React.useEffect(() => {
        setFood(initialState)
    }, [initialState]);

    return (props.open) ? (
        <>
            <form key={food.FoodId}>
                <div className='food-form'>
                    <input type="text" name="name" onChange={handleInputChange} defaultValue={food.name} placeholder='Name'/>
                    <input type="text" name="ingredients" onChange={handleInputChange} defaultValue={food.ingredients} placeholder='Ingredients'/>
                    <input type="text" name="price" onChange={handleInputChange} defaultValue={food.price} placeholder='Price'/>
                    <input type="text" name="cuisineType" onChange={handleInputChange} defaultValue={food.cuisineType} placeholder='CuisineType'/>
                    <input type="text" name="restaurant" onChange={handleInputChange} defaultValue={food.restaurant} placeholder='Restaurant'/>
                </div>
                <div className='form-buttons'>
                    <Button loading={props.submitting} className='btn action' onClick={() => { handleSubmit(); props.food = {}; setFood({})}}>Submit</Button>
                    <Button className='btn' onClick={() => {setFood({});  props.formClose(); }}>Cancel</Button>
                </div>
            </form>
        </>
    ) : null;
}