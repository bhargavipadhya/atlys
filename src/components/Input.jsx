import React, {useState} from 'react';
import classes from './Input.module.scss';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";


const Input = ({type, label, placeholder}) => {
    const [inputValue, setInputValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={classes.input}>
            {type === 'password' ?
                <label className={classes.input__labelPassword}>
                    Password
                    <span className={classes.forgotPassword}>Forgot password?</span>
                </label>
                :
                <label className={classes.input__label}>{label}</label>}
            <span className={classes.input__container}>
                <input
                    type={type}
                    value={inputValue}
                    onChange={handleChange}
                    className={classes.input__container__field}
                    placeholder={placeholder}
                />
                {type === 'password' ? <span className={classes.input__container__icon} onClick={togglePasswordVisibility}>{showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}</span> : null}
            </span>
        </div>
    );
};

export default Input;
