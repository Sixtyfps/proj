import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? s.active : ''; //isActive проверяет активна ссылка или нет
//если ссылка активна, применяется стиль s.active, если не активна то никакие стили не применяются

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className = {setActive} >Profile</NavLink>  {/*className может принимать параметром функцию
            у которой передается параметром объект у которого по ключу isActive проверяется активна ссылка или нет*/}
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className = {setActive} >Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className = {setActive} >News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className = {setActive} >Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className = {setActive} >Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;