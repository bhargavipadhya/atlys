import React, { useState } from 'react';
import classes from './Modal.module.scss';
import { IoClose } from "react-icons/io5";
import Card from "./Card";

const Modal = ({modalOpen, toggleModal, pathname}) => {

    const [register, setRegister] = useState(true);

    const handleBtnClick = () => {
        setRegister((prev) => !prev);
    };

    return (
        <>
            <div onClick={toggleModal} className={classes.overlay}/>
            <div className={classes.modalContent}>
                <Card pathname={pathname}
                      register={register}
                      handleBtnClick={handleBtnClick}
                      toggleModal={toggleModal}
                      modalOpen={modalOpen}
                />
                <div className={classes.modalContent__closeModal} onClick={toggleModal}>
                    <IoClose/>
                </div>
            </div>
        </>
    );
};

export default Modal;
