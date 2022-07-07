
import { RequestPageSharp } from '@mui/icons-material';
import axios, { AxiosResponse } from 'axios';
import { request } from 'http';
import { AppRestaurant, RestaurantFormValues } from '../models/AppRestaurant';
import { Restaurant } from '../models/Restaurant';


const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}


axios.defaults.baseURL = 'https://localhost:7005/api';


axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T> (url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T> (url).then(responseBody)
}

const AccountRestaurant = {
    current: () => requests.get<AppRestaurant>('/account'),
    login: (restaurant: RestaurantFormValues) => requests.post<AppRestaurant>('/account/login', restaurant),
    register: (restaurant: RestaurantFormValues) => requests.post<AppRestaurant>('/account/register', restaurant)

}

const AppRestaurants = {
    list: () => requests.get<AppRestaurant[]>('/apprestaurants'),
    details: (Id:string) => requests.get<AppRestaurant>(`/apprestaurants/${Id}`),
    create: (apprestaurant: AppRestaurant) => axios.post<void>('/apprestaurants', apprestaurant),
    update: (apprestaurant: AppRestaurant) => axios.put<void>(`/apprestaurants/${apprestaurant.Id}`, apprestaurant),
    delete: (Id:string) => axios.delete<void>(`/apprestaurant/${Id}`)
}

const agent = {
    AppRestaurants,
    AccountRestaurant
}

export default {
    AccountRestaurant,
    AppRestaurants,
  
  };