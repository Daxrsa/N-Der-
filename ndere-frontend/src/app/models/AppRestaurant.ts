export interface AppRestaurant{
    Id: string;
    email?:string;
    username: string; //
    displayName: string; //
    password?:string;
    address?:string;
    phoneNumber?:string;
    bio?: string;
    token: string;  //
    image?: string;  //
}

export interface RestaurantFormValues
{
    Id:string;
    email:string; //
    
    password:string; //
    address?:string;
    phoneNumber?:string;
    bio?: string;
    displayName?:string; //
    username?:string; //
}