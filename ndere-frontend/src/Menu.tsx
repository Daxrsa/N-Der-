import { Box, Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from './app/stores/store';
import LoginForm from './features/users/LoginForm';
import userProfile from "./images/user-profile_white.svg";
import logo from './logo.svg';
import SignUp from './features/users/SignUpForm';
import Button from './utils/Button';

export default observer(function Menu() {
    const {userStore: {user}} = useStore();
    const {userStore, modalStore} = useStore();

    function handleOpen() {
        modalStore.openModal();
    }
    function handleClose() {
        modalStore.closeModal();
    }
    return (
        <header>
            <nav className="container">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                    <h3>N'Derë</h3>
                </NavLink>
                <ul>
                    <li><NavLink to="/foods">Foods</NavLink></li>
                    <li><NavLink to="/Restaurant">Restaurants</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/AboutUs">About Us</NavLink></li>
                </ul>
                {userStore.isLoggedIn ? (
                    <div className='flex'>
                        <img src={userProfile} alt="user-profile" />
                        <NavLink className="btn white" to="/profile">Profile</NavLink>
                        <Button className="btn white" onClick={userStore.logout}>Log Out</Button>
                    </div>
                ) : (
                    <div className="flex">
                        <NavLink className="btn white" to="/signup">Sign Up</NavLink>
                        <Button className="btn white" onClick={handleOpen}>Log In</Button>
                        <Modal
                            open={modalStore.state.open}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                            >
                            <Box sx={{width: 400 }}>
                                <h2 id="parent-modal-title">Welcome Back</h2>
                                <p id="parent-modal-description">Log in with your details below</p>
                                <LoginForm />
                            </Box>
                        </Modal>
                    </div>
                )}
            </nav>
        </header>
    );
});