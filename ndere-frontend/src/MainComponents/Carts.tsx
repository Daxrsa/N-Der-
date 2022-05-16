import CartDashboard from "../features/cart/dashboard/CartDashboard";
import React from 'react';
import { Cart } from "../app/models/Cart";
import LoadingComponent from "../app/layouts/LoadingComponent";
import axios from "axios";

export default function Carts() {
    const [carts, setCarts] = React.useState<Cart[]>([]);

    const [loading, setLoading] = React.useState(true);
    const [submitting, setSubmitting] = React.useState(false);
 

    React.useEffect(() => {
      axios.get<Cart[]>('https://localhost:7005/api/MyCart').then(response => {
        setCarts(response.data);
        setLoading(false);
      })
    }, [carts])
    
    const [editMode, setEditMode] = React.useState(false);
    

    function handleFormOpen() {
        setEditMode(true);
    }
    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditcarts(cart: Cart) {
      setSubmitting(true);
      if (cart.cartItemId) {
        axios.put('https://localhost:7005/api/MyCart', cart).then(() => {
          setCarts([...carts.filter(x => x.cartItemId !== cart.cartItemId), cart]);
          setEditMode(false);
          setSubmitting(false);
        })
      }
      else {
        axios.post('https://localhost:7005/api/MyCart', cart).then(() => {
          setCarts([...carts, cart]);
          setEditMode(false);
          setSubmitting(false);
          console.log(cart);
        })
      }
    }

    function handleDeleteCart(id: string) {
      setSubmitting(true);
      axios.delete(`https://localhost:7005/api/MyCart/${id}`).then(() => {
        setCarts([...carts.filter(x => x.cartItemId !== parseInt(id))]);
        setSubmitting(false);
      })
    }

    if (loading) return <LoadingComponent open={loading}/>;

    return (
        <section className="carts">
            <div className="container">
                <h1>Carts</h1>
                <CartDashboard 
                  handleFormOpen={handleFormOpen} 
                  handleFormClose={handleFormClose} 
                  editMode={editMode} 
                  setEditMode={() => setEditMode} 
                  carts={carts}
                  createOrEdit={handleCreateOrEditcarts}
                  deleteCart={handleDeleteCart}
                  submitting={submitting}
                />
            </div>
        </section>
    )
}