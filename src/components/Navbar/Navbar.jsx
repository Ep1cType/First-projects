import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.row}>
                <li className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active} className={s.link}>
                        <div className={s.account__icon}></div>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/chat" activeClassName={s.active} className={s.link}>
                        <div className={s.messages__icon}></div>
                        <span>Chat</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/friends" activeClassName={s.active} className={s.link}>
                        <div className={s.news__icon}></div>
                        <span>Friends</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" activeClassName={s.active} className={s.link}>
                        <div className={s.music__icon}></div>
                        <span>News</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <a href="" className={s.link}>
                        <div className={s.setting__icon}></div>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;