import { Alert } from "@mui/material";
import { observer } from "mobx-react-lite";
import react, { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../app/stores/store";
import Button from "../../utils/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default observer (function LoginForm() {
    const navigate = useNavigate();

    const {userStore} = useStore();
    
    const [error, setError] = useState(''); 

    const initialValues = {
        email: '',
        password: ''
    }

    const [info, setInfo] = useState(initialValues);

    function handleSubmit() {
        userStore.login(info).then(() => {navigate('/')}).catch((error) => { setError('Invalid Email or Password'); console.log(error)});
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setInfo({...info, [name]: value});
    }
    return (
        <>
            <div className="container">
                <form>
                    <input type="text" onChange={handleInputChange} defaultValue={info.email} name="email" placeholder="Email"/>
                    <input type="password" onChange={handleInputChange} defaultValue={info.password} name="password" placeholder="Password"/>
                    <Button className="btn action maxwidth" onClick={handleSubmit}>Login</Button>
                    {error !== '' && <Alert severity="error">{error}</Alert>}
                </form>
            </div>
        </>
    )
})