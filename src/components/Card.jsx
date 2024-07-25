import React from 'react';
import classes from './Card.module.scss';
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import Input from "./Input";
import {Link} from "react-router-dom";

const Card = ({register, toggleModal, pathname, handleBtnClick }) => {

    // console.log('from card',pathname)

    return (
            <div className={classes.card}>
                <p className={classes.welcomeText}>{register ? 'Sign up' : 'Welcome back'}</p>
                {/*{console.log(pathname === '/feed' ? 'yes /' : 'not /')}*/}
                <p className={classes.loginText}>{register ? 'Create an account to continue' : 'Log in to your account'}</p>

                <Input placeholder={register ? "Enter your email" : "Enter your email or username"} label={register ? "Email" : "Email or Username"} type="email" />
                {register && <Input placeholder="Choose a preferred username" label="Username" type="text" />}
                <Input placeholder={register ? "Choose a strong password" : "Enter your password"} label="Password" type="password" />

                {pathname === '/' ?
                    <Link to='/feed'>
                        <Button buttonText={register ? "Continue" : "Login Now"} width="100%" />
                    </Link>
                    :
                    register ? <Button buttonText="Continue" onClickFn={toggleModal} width="100%" /> : <Button buttonText="Login Now" onClickFn={toggleModal} width="100%" />
                }

                {register ?
                    <p className={classes.registerText}>Already have an account? <a onClick={handleBtnClick}><span>Login</span>&nbsp; <FaArrowRight /></a></p>
                     :
                    <p className={classes.registerText}>Not registered yet? <a onClick={handleBtnClick}><span>Register</span>&nbsp; <FaArrowRight /></a></p>
                }
            </div>

    );
};

export default Card;
