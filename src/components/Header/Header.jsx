import React from "react";
import s from './Header.module.css';
import logo from '../../logo.png';

const Header = () => {
    return <header className={s.header}>
        <span className={s.logo}>
            SOCIAL NETWORK
        </span>
        {/*<img*/}
        {/*    src={logo}*/}
        {/*    alt="logo"/>*/}
    </header>
}

export default Header;