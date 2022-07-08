import { createContext, useContext } from "react";
import ActitivityStore from './activityStore';
import UserStore from "./userStore";

interface Store 
{
    actitivityStore : ActitivityStore;
    userStore: UserStore;
}

export const store: Store = {
    actitivityStore: new ActitivityStore(),
    userStore: new UserStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}