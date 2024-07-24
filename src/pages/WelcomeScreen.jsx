import React from 'react';
import { BiRadioCircle } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { IoIosSquareOutline } from "react-icons/io";
import classes from './WelcomeScreen.module.scss';
import Card from "../components/Card";

const WelcomeScreen = () => {

    const logo = () => (
        <div className={classes.logo}>
            <span className={classes.logo__shape}><BiRadioCircle /></span>
            <span className={classes.logo__shape}><IoMdClose /></span>
            <span className={classes.logo__shape}><IoPlayOutline /></span>
            <span className={classes.logo__shape}><IoIosSquareOutline /></span>
        </div>
    );



    return (
        <div>
            {/*{logo()}*/}
            <Card/>
        </div>
    );
};

export default WelcomeScreen;
