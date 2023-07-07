import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Gonzaleoz"},
        {id: 3, name: "Parovoz"},
        {id: 4, name: "Teremok"},
        {id: 5, name: "Jazzep"},
        {id: 6, name: "Mullermilch"}
    ]

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Wassup"},
        {id: 3, message: "Hello"}
    ]

    let dialogsElements = dialogsData.map( dialog =>
        (<DialogItem id={`${dialog.id}`} name={dialog.name} />) );

    let messagesElements = messagesData.map( message =>
        (<Message id={message.id} message={message.message} />))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;