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
                    <NavLink to="/dialogs" activeClassName={s.active} className={s.link}>
                        <div className={s.messages__icon}></div>
                        <span>Messages</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" activeClassName={s.active} className={s.link}>
                        <div className={s.news__icon}></div>
                        <span>News</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <a href="" className={s.link}>
                        <div className={s.music__icon}></div>
                        <span>Music</span>
                    </a>
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