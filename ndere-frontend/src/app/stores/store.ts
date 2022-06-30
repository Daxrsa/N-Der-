import { createContext, useContext } from "react";
import { hydrate } from "react-dom";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import UsersStore from "./usersStore";
import UserStore from "./userStore";

interface Store {
    usersStore: UsersStore;
    userStore: UserStore;
    commonStore: CommonStore;
    modalStore: ModalStore;
}

export const store: Store = {
    usersStore: new UsersStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}