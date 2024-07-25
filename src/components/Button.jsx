import React from 'react';
import classes from './Button.module.scss';

const Button = ({ buttonText, width, onClickFn, pathname }) => {
    return (
        <button className={classes.button} style={{width: width}}
                onClick={onClickFn}
        >{buttonText}</button>
    );
};

export default Button;
