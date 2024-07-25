import React from 'react';
import { BiRadioCircle } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { IoIosSquareOutline } from "react-icons/io";
import classes from './WelcomeScreen.module.scss';
import Card from "../components/Card";
import {useLocation} from 'react-router-dom';

const WelcomeScreen = () => {

    const location = useLocation();
    const { pathname } = location;

    const logo = () => (
        <div className={classes.logo}>
            <div className={classes.logo__container}>
                <div className={classes.logo__container__shape}><BiRadioCircle /></div>
                <div className={classes.logo__container__shape}><IoMdClose /></div>
            </div>
           <div className={classes.logo__container}>
               <div className={classes.logo__container__shape}><IoPlayOutline /></div>
               <div className={classes.logo__container__shape}><IoIosSquareOutline /></div>
           </div>
        </div>
    );



    return (
        <div className={classes.welcome}>
            {logo()}
            <Card register={null} pathname={pathname}/>
        </div>
    );
};

export default WelcomeScreen;
