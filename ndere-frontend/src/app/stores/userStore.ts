import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { AppRestaurant, RestaurantFormValues } from "../models/AppRestaurant";

export default class UserStore{
     user: AppRestaurant | null = null;

     constructor(){
        makeAutoObservable(this);
     }

     get isLoggedIn(){
      return !!this.user;
     }

     login = async (creds: RestaurantFormValues) => {
        try{
            const user = await agent.AccountRestaurant.login(creds);
            console.log(user);
        }catch(error){
            throw error;
        }
     }
}