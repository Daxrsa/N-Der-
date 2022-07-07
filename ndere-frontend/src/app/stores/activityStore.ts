import {action, makeAutoObservable, makeObservable, observable} from 'mobx';
import { AppRestaurant } from '../models/AppRestaurant';

export default class ActitivityStore
{
    activities : AppRestaurant[] = [];
    selectedActivity : AppRestaurant | null = null;
    editMode = false;
    loading = false;
    loadingInitial = false;
     
    constructor(){
        makeAutoObservable(this)
    }

    loadActivities = async () => {
        this.loadingInitial = true;
    }
}