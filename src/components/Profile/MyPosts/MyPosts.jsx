import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Add post</button>
            <div>New post</div>
            <div className={s.post}>
                <Post message={'Hi, how are you?'} likesCount={20} dislike={0} />
                <Post message={"It's my first post"} likesCount={15} dislike={1} />
            </div>
        </div>
    )
}

export default MyPosts;
