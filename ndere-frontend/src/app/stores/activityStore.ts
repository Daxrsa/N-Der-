import {action, makeAutoObservable, makeObservable, observable, runInAction} from 'mobx';
import agent from '../api/agent';
import { AppRestaurant } from '../models/AppRestaurant';

export default class ActitivityStore
{
    title = "Hello from MobX!";
    constructor(){
        makeAutoObservable(this)
    }

    setTitle = () => {
        this.title = this.title + '!';
    }
    
    
}