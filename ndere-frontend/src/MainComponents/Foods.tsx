import FoodDashboard from "../features/food/dashboard/FoodDashboard";
import React from 'react';
import { Food } from "../app/models/Food";
import LoadingComponent from "../app/layouts/LoadingComponent";
import axios from "axios";
import { appendFile } from "fs";

export default function Foods() {
    const [foods, setFoods] = React.useState<Food[]>([]);

    const [loading, setLoading] = React.useState(true);
    const [submitting, setSubmitting] = React.useState(false);
    
/*     React.useEffect(() => {
      axios.get<Food[]>('https://localhost:7005/api/Food').then(response => {
        setFoods(response.data);
        setLoading(false);
      })
    }, [foods]) */
    
    React.useEffect(() => {
        axios.get<Food[]>('https://localhost:7005/api/Food').then(response => {
            setFoods(response.data);
            setLoading(false);
        })
    }, [foods.values])

    const [editMode, setEditMode] = React.useState(false);
    

    function handleFormOpen() {
        setEditMode(true);
    }
    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditFoods(food: Food) {
      setSubmitting(true);
/*       axios.post('https://localhost:7005/api/Food', food).then(() => {
            console.log('test post');
      }) */
      if (food.foodId) {
        axios.put('https://localhost:7005/api/Food', food).then(() => {
            console.log('put method tested!');
            setFoods([...foods.filter(x => x.foodId !== food.foodId), food]);
            setEditMode(false);
            setSubmitting(false);
        })
      }
      else {
        axios.post('https://localhost:7005/api/Food', food).then(() => {
            console.log('post method tested!');
            setFoods([...foods, food]);
            setEditMode(false);
            setSubmitting(false);
        })
      }
    }

    function handleDeletefood(id: string) {
      setSubmitting(true);
      axios.delete(`https://localhost:7005/api/Food/${id}`).then(() => {
        setFoods([...foods.filter(x => x.foodId !== parseInt(id))]);
        setSubmitting(false);
      })
    }

    if (loading) return <LoadingComponent open={loading}/>;

    return (
        <section className="foods">
            <div className="container">
                <h1>List of foods</h1>
                <FoodDashboard 
                  handleFormOpen={handleFormOpen} 
                  handleFormClose={handleFormClose} 
                  editMode={editMode} 
                  setEditMode={() => setEditMode} 
                  foods={foods}
                  createOrEdit={handleCreateOrEditFoods}
                  deleteFood={handleDeletefood}
                  submitting={submitting}
                />
            </div>
        </section>
    )
}