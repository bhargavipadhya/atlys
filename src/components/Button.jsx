import React from 'react';
import classes from './Button.module.scss';

const Button = ({ buttonText }) => {
    return (
        <button className={classes.button}>{buttonText}</button>
    );
};

export default Button;
