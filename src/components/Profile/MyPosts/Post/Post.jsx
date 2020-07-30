import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <div className={s.avatar}>
                    <img src="https://steamuserimages-a.akamaihd.net/ugc/862863922320868372/F5F39ED5D2D9AAB83BE5B7CDE9F21E91F9075C13/" alt="avatar" />
                </div>
                {props.message}
                <span className={s.like}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-thumb-up">
                        <path d="m13 5h-1.3l.3-1.1c0-.2 0-.3 0-.5v-.6c0-1.5-1.3-2.8-2.8-2.8-1.2 0-2.2.8-2.5 1.9v.3c-.3 1.1-.8 2.2-1.6 3.2-.3-.3-.7-.4-1.1-.4h-2c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h2c.6 0 1.2-.3 1.5-.7 1.2.5 2.5.7 3.7.7h2.8c.8 0 1.6-.3 2.3-.8 1-.8 1.7-2 1.7-3.3v-3.9c0-1.7-1.3-3-3-3zm-9 2.2v6.2.6h-2v-7h2zm10 4.7c0 .7-.3 1.3-.9 1.7-.3.2-.7.4-1.1.4h-2.8c-1 0-2-.2-3-.6l-.2-.1v-5.9c1.3-1.3 2.2-2.9 2.6-4.7l.1-.3c0-.2.2-.4.5-.4.4 0 .8.4.8.8v.5.1l-.2 1.2c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h1.3c.6 0 1 .4 1 1z"></path>
                    </svg>
                </span>
                {props.likesCount}
                <span className={s.dislike}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-thumb-up">
                        <path d="m13 5h-1.3l.3-1.1c0-.2 0-.3 0-.5v-.6c0-1.5-1.3-2.8-2.8-2.8-1.2 0-2.2.8-2.5 1.9v.3c-.3 1.1-.8 2.2-1.6 3.2-.3-.3-.7-.4-1.1-.4h-2c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h2c.6 0 1.2-.3 1.5-.7 1.2.5 2.5.7 3.7.7h2.8c.8 0 1.6-.3 2.3-.8 1-.8 1.7-2 1.7-3.3v-3.9c0-1.7-1.3-3-3-3zm-9 2.2v6.2.6h-2v-7h2zm10 4.7c0 .7-.3 1.3-.9 1.7-.3.2-.7.4-1.1.4h-2.8c-1 0-2-.2-3-.6l-.2-.1v-5.9c1.3-1.3 2.2-2.9 2.6-4.7l.1-.3c0-.2.2-.4.5-.4.4 0 .8.4.8.8v.5.1l-.2 1.2c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h1.3c.6 0 1 .4 1 1z"></path>
                    </svg>
                </span>
                {props.dislike}
            </div>
        </div>
    )
}

export default Post;
