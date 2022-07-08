export interface AppRestaurant{
    Id: string;
    username: string; //
    displayName: string; //
    bio: string;
    token: string;  //
    image?: string;  //
}

export interface RestaurantFormValues
{
    email:string; 
    password:string; 
    bio: string;
    displayName?:string; 
    username?:string; 
}