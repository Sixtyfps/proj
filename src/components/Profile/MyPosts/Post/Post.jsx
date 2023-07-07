import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIsmpJQm0OTBcGyY-Y3ECq4UMpN2lAcagoQ&usqp=CAU" alt=""/>
            {props.message}
            <div>
                <span className={s.likeCounter}>{props.likesCount}</span>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;