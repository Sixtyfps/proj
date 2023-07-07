import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img
                src="https://png.pngtree.com/illustrations/20190327/ourmid/pngtree-cure-starry-sky-night-sky-star-png-image_38228.jpg"
                alt=""/>
        </div>
        <div>
            avatar + description
        </div>
       <MyPosts/>
    </div>
}

export default Profile;