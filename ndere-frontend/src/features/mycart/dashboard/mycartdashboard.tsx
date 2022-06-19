
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Cart} from '../../../app/models/Cart'
import MyCartForm from "../form/mycartform";
import '../../../styles/table.css';
import Button from '../../../utils/Button';
import '../../../styles/Components.scss';
import MyCart from "../../../MainComponents/MyCart";
import { close } from "inspector";
import '../../../styles/Components.scss';
import '../../../styles/table.css';

interface Props{
    mycarts:Cart[];
    editMode:boolean;
    closeForm: () => void;
    openForm: (id:string) => void;
}

export default function MyCartDashboard({mycarts, editMode, openForm, closeForm}:Props){
       return(
           <>
        <table className="styled-table">
            <thead>
                <th>Cart Id</th>
                <th>Client Id</th>
                <th>Food Id</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
               {mycarts.map(mycart => (
                   <tr key={mycart.cartItemId}>
                   <td>{mycart.cartItemId}</td>
                   <th>{mycart.klientiId}</th>
                   <th>{mycart.foodId}</th>
                   <th><Button className='btn'>Edit</Button></th>
                   <th><Button className='btn action'>Delete</Button></th>
                   </tr>
           ))}
           </tbody>
        </table> 
        <MyCartForm  
         
        />
        </>
       );
}