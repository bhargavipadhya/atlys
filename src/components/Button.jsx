import React from 'react';
import classes from './Button.module.scss';

const Button = ({ buttonText, width, onClickFn, pathname }) => {
    return (
        <div className={classes.container}>
            <button
                className={classes.container__button}
                style={{width: width}}
                onClick={onClickFn}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default Button;
