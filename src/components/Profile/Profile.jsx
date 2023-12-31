import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo dialogsData={props.postsData}/>
        <MyPosts postsData={props.postsData}/>
    </div>
}

export default Profile;