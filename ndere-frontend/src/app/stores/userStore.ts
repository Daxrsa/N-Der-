import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import agent from "../api/agent";
import { User, UserFormValues } from "../models/user";
import { store } from "./store";

export default class UserStore {
    user: User | null = null;
    
    constructor() {
        makeAutoObservable(this);

        makePersistable(this, { name: 'UserStore', properties: ['user'], storage: window.localStorage });
    }
    
    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    register = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user = null;
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            console.log(user);
            runInAction(() => this.user = user);
        } catch (error) {
            console.log(error);
        }
    }
}