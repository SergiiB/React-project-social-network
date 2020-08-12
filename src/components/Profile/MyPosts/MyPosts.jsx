import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} dislike={p.dislike}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
            </div>
            <button onClick={addPost}>Add post</button>
            <div>New post</div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;
