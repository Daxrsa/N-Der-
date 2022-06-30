import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import { User } from '../models/user';
import { IUseri, UserFormValues } from '../models/Useri';
import { store } from "../stores/store";

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) => 
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

axios.defaults.baseURL = 'https://localhost:7077/api';


/* 
Doesn't work
axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) {
        if (config.headers?.Authorization != null) {
            config.headers!.Authorization = `Bearer ${token}`
        }
        return config;
    }
}) */


axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    }   catch(error) {
        console.log(error);
        return Promise.reject(error);
    }
})

const requests = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    del: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody) 
};

const Users = {
    list: (): Promise<IUseri[]> => requests.get('/User'),
    details: (id: string) => requests.get(`/User/${id}`),
    create: (user: IUseri) => requests.post('/User', user),
    update: (user: IUseri) => requests.put(`/User/${user.id}`, user),
    delete: (id: string) => requests.del(`/User/${id}`)
}

const Account = {
    current: () => requests.get('/account'),
    login: (user: UserFormValues) => requests.post('/account/login', user),
    register: (user: UserFormValues) => requests.post('/account/register', user),
}

export default {
    Users,
    Account
}