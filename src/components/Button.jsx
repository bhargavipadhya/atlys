import React from 'react';
import classes from './Button.module.scss';

const Button = ({ buttonText, width, onClickFn, modalOpen }) => {
    return (
        <div className={classes.container}>
            <button
                // className={classes.container__button}
                className={modalOpen && width === '15vw' ?
                    `${classes.container__button} ${classes.container__button__animateIn}` :
                    width === '15vw' ?
                        `${classes.container__button} ${classes.container__button__animateOut}` :
                        classes.container__button}
                style={{width: width}}
                onClick={onClickFn}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default Button;
