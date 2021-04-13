import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.row}>
                <li className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active} className={s.link}>
                        <div className={s.profile__icon}>
                            <img src={require("../../icons/profile.svg").default} />
                        </div>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/chat" activeClassName={s.active} className={s.link}>
                        <div className={s.messages__icon}>
                            <img src={require("../../icons/chat.svg").default} />
                        </div>
                        <span>Chat</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/friends" activeClassName={s.active} className={s.link}>
                        <div className={s.friends__icon}>
                            <img src={require("../../icons/friends.svg").default} />
                        </div>
                        <span>Friends</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" activeClassName={s.active} className={s.link}>
                        <div className={s.news__icon}>
                            <img src={require("../../icons/paper.svg").default} />
                        </div>
                        <span>News</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users" activeClassName={s.active} className={s.link}>
                        <div className={s.users__icon}>
                            <img src={require("../../icons/users.svg").default} />
                        </div>
                        <span>Users</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <a href="" className={s.link}>
                        <div className={s.setting__icon}>
                            <img src={require("../../icons/setting.svg").default} />
                        </div>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;