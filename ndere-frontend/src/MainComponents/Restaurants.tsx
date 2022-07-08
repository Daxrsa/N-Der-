import RestaurantDashboard from "../features/restaurant/dashboard/RestaurantDashboard";
import React from 'react';
import { AppRestaurant } from "../app/models/AppRestaurant";
import LoadingComponents from "../app/layouts/LoadingComponent";
import LoadingComponent from "../app/layouts/LoadingComponent";
import axios from "axios";
import { useStore } from "../app/stores/store";
import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";


 function Restaurants() {

    const {actitivityStore} = useStore();
    const [restaurants, setRestaurants] = React.useState<AppRestaurant[]>([]);
  
    const [loading, setLoading] = React.useState(true);
    const [submitting, setSubmitting] = React.useState(false);
    
/*     React.useEffect(() => {
      axios.get<Restaurant[]>('https://localhost:7005/api/Restaurant').then(
         => {
      setRestaurants(response.data);
      })
    }, []) */
   

    React.useEffect(() => {
      
      axios.get<AppRestaurant[]>('https://localhost:7005/api/AppRestaurant').then(response => {
        setRestaurants(response.data);
        console.log(response.status);
        setLoading(false);
      })
    }, [restaurants.values])
    
    const [editMode, setEditMode] = React.useState(false);
    

    function handleFormOpen() {
        setEditMode(true);
    }
    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditrestaurant(restaurant: AppRestaurant) {
      setSubmitting(true);
      if (restaurant.Id) {
        axios.put('https://localhost:7005/api/AppRestaurant', restaurant).then(() => {
          console.log('put method used');
          setRestaurants([...restaurants.filter(x => x.Id !== restaurant.Id), restaurant]);
          setEditMode(false);
          setSubmitting(false);
        })
      }
      else {
        /* mos harro me e set identity_insert on ne databaze nqs e perdor keto */
        /* restaurant.RestaurantId = parseInt(uuid()); */
        axios.post('https://localhost:7005/api/AppRestaurant', restaurant).then(() => {
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
      axios.delete(`https://localhost:7005/api/AppRestaurant/${id}`).then(() => {
        setRestaurants([...restaurants.filter(x => x.Id !== (id))]);
        setSubmitting(false);
      })
    }

    if (loading) return <LoadingComponent open={loading}/>;

    return (
        <section className="restaurant">
            <div className="container">
            <h1>{actitivityStore.title}</h1>
            <Button  placeholder='Add exclamation!' style={{backgroundColor:"red" }} onClick={actitivityStore.setTitle}/>
                <h1>-----------------------------</h1>
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

export default observer(Restaurants);

