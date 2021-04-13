import * as React from "react";
import s from "../Users.module.css";
import photoPlug from "../../../img/plugs/avatarPlug.jpg"


const User = (props) => {



    return (
        <li className={s.item}>
            <a href="#" className={s.img__url}>
                <img src={props.imgUrl || photoPlug } alt=""/>
            </a>
            <div className={s.text}>
                <h3><span>{props.name}</span></h3>
                <span>{"props.abode.city"}, {"props.abode.country"}</span>
                <span>{"props.study"}</span>
            </div>
            <div className={s.btn_wrap}>
                {props.subscription
                    ? <button onClick={ () => { props.unfollow(props.id) } }
                              className={s.btn}>Unfollow</button>
                    : <button onClick={ () => { props.follow(props.id) } }
                              className={s.btn}>Follow</button>}
            </div>
        </li>
    );
};

export default User;