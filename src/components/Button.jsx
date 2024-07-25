import React from 'react';
import classes from './Button.module.scss';

const Button = ({ buttonText, width }) => {
    return (
        <button className={classes.button} style={{width: width}}>{buttonText}</button>
    );
};

export default Button;
