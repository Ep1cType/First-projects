import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <li className={s.dialogs__item}>
            <NavLink className={s.dialogs__item} to={"/dialogs/" + props.id}>
                <div className={s.indicator}>
                </div>
                <img
                    src={props.imgUrl}
                    alt="" className="icon"/>
                <div className={s.text}>
                    <h3>{props.name}</h3>
                    <div className={s.row}>
                        <p>You: {props.message} </p>
                        <span className={s.separator}>.</span>
                        <time>{props.time}</time>
                    </div>
                </div>
            </NavLink>
        </li>
    );
}

export default Dialog