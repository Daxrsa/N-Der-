import React from 'react';
import { Cart } from '../../../app/models/Cart';
import '../../../styles/table.css';
import Button from '../../../utils/Button';
import '../../../styles/Components.scss';
import CartForm from '../form/CartForm';
import axios from 'axios';

interface Props {
    carts: Cart[];
    editMode: boolean;
    setEditMode: () => void;
    handleFormClose: () => void;
    handleFormOpen: () => void;
    createOrEdit: (cart: Cart) => void;
    deleteCart: (id: string) => void;
    submitting: boolean;
}

function CartItem(props: any) {
    const [client, setClient] = React.useState(null);
    const [food, setFood] = React.useState(null);

    React.useEffect(() => {
        axios.get('https://localhost:7077/api/Klienti/' + props.cart.klientiId).then(response => {
            setClient(response.data.name)
        });
    }, [props.cart.klientiId]);

    React.useEffect(() => {
        axios.get('https://localhost:7077/api/Food/' + props.cart.foodId).then(response => {
            setFood(response.data.name)
        });
    }, [props.cart.foodId]);

    return(
        <tr key={props.cart.cartItemId}>
            <td>{props.cart.cartItemId}</td>
            <td>{client}</td>
            <td>{food}</td>
            <td><Button className='btn action' onClick={() => props.deleteCart(props.cart.cartItemId.toString())}>Delete</Button></td>
        </tr>
    )
}

export default function CartDashboard({carts, editMode, handleFormClose, handleFormOpen, 
    createOrEdit, deleteCart, submitting}: Props) {

    const [cart, setCart] = React.useState({});

    return (
        <>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Client</th>
                        <th>Food</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {carts.map(cart => (
                            <CartItem cart={cart} setCart={setCart} handleFormOpen={handleFormOpen} deleteCart={deleteCart}/>
                        ))}
                </tbody>
            </table>
            <CartForm
                open={editMode}
                cart={cart}
                formClose={handleFormClose}
                createOrEdit={createOrEdit}
                submitting={submitting}
            />
        </>
    )
}