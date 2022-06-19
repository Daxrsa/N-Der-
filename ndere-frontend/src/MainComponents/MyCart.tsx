import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "../app/layouts/LoadingComponent";
import { Button, List } from "semantic-ui-react";
import { Cart } from "../app/models/Cart";
import MyCartDashboard from "../features/mycart/dashboard/mycartdashboard";

export default function MyCart(){

    const[mycarts,setMyCarts] = useState<Cart[]>([]);
    const[editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get<Cart[]>('https://localhost:7005/api/MyCart').then(response => {
            console.log(response);
            setMyCarts(response.data);
        })
    }, [])

    function handleFormOpen(){
            setEditMode(true);
    }

    function handleFormClose(){
        setEditMode(false);
    }

    return (
         <>
          <MyCartDashboard 
          mycarts={mycarts}
          editMode = {editMode}
          openForm = {handleFormOpen}
          closeForm = {handleFormClose}
          />
       </>
    );
}


