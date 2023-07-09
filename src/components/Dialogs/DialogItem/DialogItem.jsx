import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>

            <div className={s.userContainer}>
                <img className={s.userImage}
                     src={props.url}
                     alt="user"/>
                <div className={s.userName}>
                    {props.name}
                </div>
            </div>

        </NavLink>
    </div>
}


export default DialogItem;