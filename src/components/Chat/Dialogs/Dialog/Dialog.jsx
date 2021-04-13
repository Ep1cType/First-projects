import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import * as React from "react";

const Dialog = (props) => {
    return (
        <li >
            <NavLink onClick={() => { props.readit(props.id) }} className={s.dialogs__item} to={"/chat/" + props.id} >
                    {props.read
                        ? <div className={s.indicator}/>
                        : null}
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