import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <a href='/'>
                        <img
                            src={require("../../icons/logo.svg").default}
                            alt=""/>
                    </a>
                </div>
                <div className={s.loginBox}>
                    {props.isAuth ? <div className={s.login}>
                            <span>{props.login}</span>
                            <img className={s.avatar} src={props.userImg} alt=""/>
                        </div>
                        : <NavLink to={'/login'}>
                            log in
                        </NavLink>}
                </div>
            </div>
        </header>
    )
}



export default Header;