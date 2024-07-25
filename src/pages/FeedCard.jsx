import React from 'react';
import Button from "../components/Button";
import classes from './FeedCard.module.scss';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const FeedCard = ({ feed, toggleModal }) => {
    return (
        <div className={classes.feedCard} key={feed.id} onClick={toggleModal}>
            <div className={classes.feedCard__user}>
                {/*<img src=""/>*/}
                <div className={classes.feedCard__user__info}>
                    <FaRegCircleUser className={classes.feedCard__user__info__img}/>
                    <div>
                        <p className={classes.feedCard__user__info__name}>{feed.name}</p>
                        <p className={classes.feedCard__user__info__minutes}>{feed.time}minutes ago {feed.edited ? '• Edited' : ''}</p>
                    </div>
                </div>
                <IoEllipsisHorizontalSharp />
            </div>

            <div className={classes.feedCard__textArea}>
                <div className={classes.feedCard__textArea__iconBubble}>
                    <div>{feed.emoji}</div>
                </div>
                <div className={classes.feedCard__textArea__text}>{feed.text}</div>
            </div>
            <div className={classes.feedCard__comments}>
                 <FaRegMessage className={classes.feedCard__comments__icon}/> &nbsp; {feed.comments} comments
            </div>
        </div>
    );
};

export default FeedCard;
