import React, {useState} from 'react';
import classes from './Feed.module.scss';
import Button from "../components/Button";
import FeedCard from "./FeedCard";
import {feedDate} from "../assets/feedData";
import LoginModal from "../components/LoginModal";

const Feed = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const createPost = () => (
        <div className={classes.createPost}>
            <p className={classes.createPost__text}>Create post</p>
            <div className={classes.createPost__inputTextArea}>
                <div className={classes.createPost__inputTextArea__iconBubble} onClick={toggleModal}>
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
            {feedDate.map((feed) => (
                <FeedCard feed={feed} />
            ))}
            {modal && <LoginModal toggleModal={toggleModal} /> }
        </div>
    );
};

export default Feed;
