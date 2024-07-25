import React from 'react';
import classes from './Card.module.scss';
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import Input from "./Input";

const Card = () => {
    return (
            <div className={classes.card}>
                <p className={classes.welcomeText}>Welcome back</p>
                <p className={classes.loginText}>Log in to your account</p>

                <Input placeholder="Enter your email or username" label="Email or Username" type="email" />
                <Input placeholder="Enter your password" label="Password" type="password" />

                <Button buttonText="Login Now" width="100%"/>
                <p className={classes.registerText}>Not registered yet? <a><span>Register</span>&nbsp; <FaArrowRight /></a></p>
            </div>

    );
};

export default Card;
