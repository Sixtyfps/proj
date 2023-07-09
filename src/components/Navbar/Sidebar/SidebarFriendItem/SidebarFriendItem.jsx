import React from "react";
import s from './SidebarFriendItem.module.css';


const SidebarFriendItem = (props) => {

    return <div className={s.friendItem}>
                <img src={props.url} alt=""/>
                <div>{props.name}</div>
            </div>

}

export default SidebarFriendItem;