import React from "react";
import s from './Sidebar.module.css';
import SidebarFriendItem from "./SidebarFriendItem/SidebarFriendItem";


const Sidebar = (props) => {

    let sidebarElements = props.sidebarData.friends.map(friend =>
        (<SidebarFriendItem id={`${friend.id}`} name={friend.name} url={friend.imgUrl}/>));

    return <div className={s.sidebar}>
        <div className={s.sidebarTitle}>
            <h2>Friends</h2>
        </div>
        <div className={s.friends}>
            {sidebarElements}
        </div>
    </div>

}

export default Sidebar;