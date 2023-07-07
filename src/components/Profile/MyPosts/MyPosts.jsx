import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    // let postsData = [
    //     {id: 1, message: "Hi, wassup?", likesCount: 15},
    //     {id: 2, message: "It's my first post", likesCount: 20},
    //     {id: 3, message: "lol", likesCount: 1},
    //     {id: 4, message: "wow", likesCount: 3},
    //     {id: 5, message: "Hehe", likesCount: 45},
    //     {id: 6, message: ":)", likesCount: 24}
    // ]

    let postsElements = props.postsData.map( post =>
        (<Post id={post.id} message={post.message} likesCount = {post.likesCount}/>) )

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;