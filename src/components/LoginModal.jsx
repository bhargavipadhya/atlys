import React, { useState, useRef } from 'react';
import classes from './LoginModal.module.scss';
import Card from "./Card";
import './LoginModal.css';

const LoginModal = ({toggleModal}) => {

    return (
        <>
            <div className="modal">
                <div onClick={toggleModal} className="overlay"/>
                <div className="modal-content">
                    <Card />
                    <button className="close-modal" onClick={toggleModal}>
                        CLOSE
                    </button>
                </div>
            </div>
        </>
    );
};

export default LoginModal;
