import { makeAutoObservable } from "mobx"

interface Open {
    open: boolean;
}

export default class ModalStore {
    state: Open = {
        open: false
    }

    constructor() {
        makeAutoObservable(this)
    }

    openModal = () => {
        this.state.open = true;
    }
    closeModal = () => {
        this.state.open = false;
    }
}