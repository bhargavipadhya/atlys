import React, {useEffect, useState} from 'react';
import classes from './Feed.module.scss';
import Button from "../components/Button";
import FeedCard from "./FeedCard";
import {feedData} from "../assets/feedData";
import Modal from "../components/Modal";
import {useLocation, useNavigate} from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Feed = () => {

    const [modal, setModal] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();

    const toggleModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        console.log('Modal is toggled to ', modal);
    }, [modal]);

    const createPost = () => (
        <div className={modal ? `${classes.createPost} ${classes.createPost__animateIn}` : `${classes.createPost} ${classes.createPost__animateOut}`} onClick={toggleModal}>
            <p className={classes.createPost__text}>Create post</p>
            <div className={classes.createPost__inputTextArea}>
                <div className={classes.createPost__inputTextArea__iconBubble}>
                    <div>💬</div>
                </div>
                <div className={classes.createPost__inputTextArea__placeholder}>How are you feeling today?</div>
            </div>
            <Button buttonText="Post" width="10vw" modalOpen={modal}/>
        </div>
    );

    return (
        <div className={`${classes.feed} `}>
            <small onClick={() => navigate(-1)} className={classes.feed__goBack}><MdKeyboardArrowLeft /> <span>Go back</span></small>
            <p className={classes.feed__helloText}>Hello Jane</p>
            <p className={classes.feed__introText}>How are you doing today? Would you like to share something with the community 🤗</p>
            {createPost()}
            {feedData.map(feed => (
                <FeedCard feed={feed} toggleModal={toggleModal} modalOpen={modal} />
            ))}
            {modal && <Modal modalOpen={modal} toggleModal={toggleModal} pathname={pathname} /> }
        </div>
    );
};

export default Feed;
