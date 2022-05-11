import RestaurantDashboard from "../features/restaurant/dashboard/RestaurantDashboard";
import React from 'react';
import { Restaurant } from "../app/models/Restaurant";
import LoadingComponents from "../app/layouts/LoadingComponent";
import LoadingComponent from "../app/layouts/LoadingComponent";
import axios from "axios";

export default function Restaurants() {
    const [restaurants, setRestaurants] = React.useState<Restaurant[]>([]);

    const [loading, setLoading] = React.useState(true);
    const [submitting, setSubmitting] = React.useState(false);
    
/*     React.useEffect(() => {
      axios.get<Restaurant[]>('https://localhost:7005/api/Restaurant').then(response => {
      setRestaurants(response.data);
      })
    }, []) */
   

    React.useEffect(() => {
      axios.get<Restaurant[]>('https://localhost:7005/api/Restaurant').then(response => {
        setRestaurants(response.data);
        setLoading(false);
      })
    }, [restaurants])
    
    const [editMode, setEditMode] = React.useState(false);
    

    function handleFormOpen() {
        setEditMode(true);
    }
    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditrestaurant(restaurant: Restaurant) {
      setSubmitting(true);
      if (restaurant.restaurantId) {
        axios.put('https://localhost:7005/api/Restaurant', restaurant).then(() => {
          console.log('put method used');
          setRestaurants([...restaurants.filter(x => x.restaurantId !== restaurant.restaurantId), restaurant]);
          setEditMode(false);
          setSubmitting(false);
        })
      }
      else {
        /* mos harro me e set identity_insert on ne databaze nqs e perdor keto */
        /* restaurant.RestaurantId = parseInt(uuid()); */
        axios.post('https://localhost:7005/api/Restaurant', restaurant).then(() => {
          console.log('post method used');
          setRestaurants([...restaurants, restaurant]);
          setEditMode(false);
          setSubmitting(false);
          console.log(restaurant);
        })
      }
    }

    function handleDeleterestaurant(id: string) {
      setSubmitting(true);
      axios.delete(`https://localhost:7005/api/Restaurant/${id}`).then(() => {
        setRestaurants([...restaurants.filter(x => x.restaurantId !== parseInt(id))]);
        setSubmitting(false);
      })
    }

    if (loading) return <LoadingComponent open={loading}/>;

    return (
        <section className="restaurant">
            <div className="container">
                <h1>restaurant</h1>
                <RestaurantDashboard 
                  handleFormOpen={handleFormOpen} 
                  handleFormClose={handleFormClose} 
                  editMode={editMode} 
                  setEditMode={() => setEditMode} 
                  restaurants={restaurants}
                  createOrEdit={handleCreateOrEditrestaurant}
                  deleteRestaurant={handleDeleterestaurant}
                  submitting={submitting}
                />
            </div>
        </section>
    )
}