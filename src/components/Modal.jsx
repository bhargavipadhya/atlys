import React, { useState, useRef } from 'react';
import classes from './Modal.module.scss';
import { IoClose } from "react-icons/io5";
import Card from "./Card";
import './LoginModal.css';

const Modal = ({toggleModal, pathname}) => {

    const [register, setRegister] = useState(true);

    const handleBtnClick = () => {
        setRegister((prev) => !prev);
    };

    return (
        <>
            <div onClick={toggleModal} className="overlay"/>
            <div className="modal-content">
                <Card pathname={pathname}
                      register={register}
                      handleBtnClick={handleBtnClick}
                      toggleModal={toggleModal}
                />
                <div className="close-modal" onClick={toggleModal}>
                    <IoClose/>
                </div>
            </div>
        </>
    );
};

export default Modal;
