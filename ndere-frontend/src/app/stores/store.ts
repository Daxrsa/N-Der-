import { createContext, useContext } from "react";
import ActitivityStore from './activityStore';

interface Store 
{
    actitivityStore : ActitivityStore
}

export const store: Store = {
    actitivityStore: new ActitivityStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}