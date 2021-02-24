import s from './Chat.module.css';
import {NavLink} from "react-router-dom";

const Chat = (props) => {
    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs}>
                <div className="dialogs__wrapper">
                    <ul className={s.dialogs__row}>
                        <li className={s.dialogs__item}>
                            <NavLink className={s.dialogs__item} to='/dialogs/1'>
                                <div className={s.indicator}>
                                </div>
                                <img
                                    src="https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg"
                                    alt="" className="icon"/>
                                <div className={s.text}>
                                    <h3>Denis Chernykh</h3>
                                    <div className={s.row}>
                                        <p>You: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, harum. </p>
                                        <span className={s.separator}>.</span>
                                        <time>8hr</time>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        <li className={s.dialogs__item}>
                            <NavLink className={s.dialogs__item} to='/dialogs/2'>
                                <div className={s.indicators}>
                                </div>
                                <img
                                    src="https://sun9-34.userapi.com/impf/mN2f0UjnGdzXxG6hw8zjgCWNVGVm4_sbb6T_EQ/unzv5sEl61E.jpg?size=1024x1024&quality=96&proxy=1&sign=beaae2db4a3935e2db91adbcfdaf5625&type=album"
                                    alt="" className="icon"/>
                                <div className={s.text}>
                                    <h3>Дима St3n</h3>
                                    <div className={s.row}>
                                        <p>Дима: Рили </p>
                                        <span className={s.separator}>.</span>
                                        <time>8hr</time>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        <li className={s.dialogs__item}>
                            <NavLink className={s.dialogs__item} to='/dialogs/3'>
                                <div className={s.indicator}>
                                </div>
                                <img
                                    src="https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg"
                                    alt="" className="icon"/>
                                <div className={s.text}>
                                    <h3>Denis Chernykh</h3>
                                    <div className={s.row}>
                                        <p>You: Thankst, tad osdgi sod sdfj ksdf f asf asf
                                            fdsdfsdffdsfsdfsdfsdfsdfasf </p>
                                        <span className={s.separator}>.</span>
                                        <time>8hr</time>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        <li className={s.dialogs__item}>
                            <NavLink className={s.dialogs__item} to='/dialogs/4'>
                                <div className={s.indicator}>
                                </div>
                                <img
                                    src="https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg"
                                    alt="" className="icon"/>
                                <div className={s.text}>
                                    <h3>Denis Chernykh</h3>
                                    <div className={s.row}>
                                        <p>You: Thankst, tad osdgi sod sdfj ksdf f asf asf
                                            fdsdfsdffdsfsdfsdfsdfsdfasf </p>
                                        <span className={s.separator}>.</span>
                                        <time>8hr</time>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        <li className={s.dialogs__item}>
                            <NavLink className={s.dialogs__item} to='/dialogs/5'>
                                <div className={s.indicator}>
                                </div>
                                <img
                                    src="https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg"
                                    alt="" className="icon"/>
                                <div className={s.text}>
                                    <h3>Denis Chernykh</h3>
                                    <div className={s.row}>
                                        <p>You: Th </p>
                                        <span className={s.separator}>.</span>
                                        <time>8hr</time>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.messages}>
                <div className="messages__wrapper">
                    <ul className="messages__row">
                        <li className="messages__item">
                            HOW ARE YOU
                        </li>
                        <li className="messages__item">
                            HOW ARE YOU
                        </li>
                        <li className="messages__item">
                            HOW ARE YOU
                        </li>
                        <li className="messages__item">
                            HOW ARE YOU
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Chat;