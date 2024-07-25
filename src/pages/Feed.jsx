import React, {useState} from 'react';
import classes from './Feed.module.scss';
import Button from "../components/Button";
import FeedCard from "./FeedCard";
import {feedData} from "../assets/feedData";
import Modal from "../components/Modal";
import {useLocation} from "react-router";

const Feed = () => {

    const [modal, setModal] = useState(false);
    const location = useLocation();
    const { pathname } = location;

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const createPost = () => (
        <div className={classes.createPost} onClick={toggleModal}>
            <p className={classes.createPost__text}>Create post</p>
            <div className={classes.createPost__inputTextArea}>
                <div className={classes.createPost__inputTextArea__iconBubble}>
                    <div>💬</div>
                </div>
                <div className={classes.createPost__inputTextArea__placeholder}>How are you feeling today?</div>
            </div>
            <div className={classes.createPost__button}>
                <Button buttonText="Post" width="15%" />
            </div>
        </div>
    );

    return (
        <div className={classes.feed}>
            <p className={classes.feed__helloText}>Hello Jane</p>
            <p className={classes.feed__introText}>How are you doing today? Would you like to share something with the community 🤗</p>
            {createPost()}
            {feedData.map(feed => (
                <FeedCard feed={feed} toggleModal={toggleModal}/>
            ))}
            {modal && <Modal toggleModal={toggleModal} pathname={pathname}/> }
        </div>
    );
};

export default Feed;
