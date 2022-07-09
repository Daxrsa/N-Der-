import Grid from "@mui/material/Grid";
import { NavLink, useNavigate } from "react-router-dom";
import burger from "../../images/hamburger.jpg";
import { useStore } from "../../app/stores/store";
import { ChangeEvent, useState } from "react";
import Button from "../../utils/Button";
import { Alert } from "@mui/material";

export default function SignUpForm() {
    const {modalStore, userStore} = useStore();
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        name: '',
        surname: '',
        streetName: '',
        zipCode: '',
        city: ''
    }
    const [info, setInfo] = useState(initialValues);

    function handleSubmit() {
        console.log(info);
        userStore.register(info).then(() => {
            navigate('/profile'); 
            userStore.login({email: info.email, password: info.password})
        }).catch(error => { setError('Check your details!'); console.log(error)});
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setInfo({...info, [name]: value});
    }
    return (
        <section className="register-form">
            <div className="container">
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <h2>Want Free Delivery on Your First Order?</h2>
                        <form>
                            <input onChange={handleInputChange} defaultValue={info.username} name="username" type="text" placeholder="Username"/>
                            <input onChange={handleInputChange} defaultValue={info.email} name="email" type="text" placeholder="Email"/>
                            <input onChange={handleInputChange} defaultValue={info.password} name="password" type="password" placeholder="Password"/>
                            <input onChange={handleInputChange} defaultValue={info.name} name="name" type="text" placeholder="Name"/>
                            <input onChange={handleInputChange} defaultValue={info.surname} name="surname" type="text" placeholder="Surname"/>
                            <input onChange={handleInputChange} defaultValue={info.streetName} name="streetName" type="text" placeholder="StreetName"/>
                            <input onChange={handleInputChange} defaultValue={info.zipCode} name="zipCode" type="text" placeholder="Zip Code"/>
                            <input onChange={handleInputChange} defaultValue={info.city} name="city" type="text" placeholder="City"/>
                            <Button onClick={handleSubmit} className="btn action">Register</Button>
                            {error !== '' && <Alert severity="error">{error}</Alert>}
                        </form>
{/*                         <Formik
                            initialValues={initialValues}
                            onSubmit={(values) => userStore.register(values).catch(error => console.log(error))}
                            validationSchema={Yup.object().shape({
                                name: Yup.string().required(),
                                username: Yup.string().required(),
                                email: Yup.string().required().email(),
                                password: Yup.string().required()
                            })}
                        >
                            {({handleSubmit, isSubmitting, isValid, dirty}) => (
                                <form onSubmit={handleSubmit}>
                                    <input name="username" type="text" placeholder="Username"/>
                                    <input name="email" type="text" placeholder="Email"/>
                                    <input name="password" type="password" placeholder="Password"/>
                                    <input name="name" type="text" placeholder="Name"/>
                                    <input name="surname" type="password" placeholder="Surname"/>
                                    <input name="streetName" type="text" placeholder="StreetName"/>
                                    <input name="zipCode" type="text" placeholder="Zip Code"/>
                                    <input name="city" type="text" placeholder="City"/>
                                    <Button type="submit" className="btn action" disabled={!dirty || isSubmitting}>Register</Button>
                                </form>
                            )}
                        </Formik> */}
                        <p>Already have an account?</p>
                        <a onClick={modalStore.openModal}>Log In instead</a>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={burger} alt="burger" />
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}