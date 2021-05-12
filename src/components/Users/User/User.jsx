import * as React from "react";
import s from "../Users.module.css";
import {NavLink} from "react-router-dom";


const User = (props) => {

    return (
        <li className={s.item}>
            <NavLink to={'/profile/' + props.id} href="#" className={s.img__url}>
                <img src={props.imgUrl || 'https://avatarfiles.alphacoders.com/277/277372.jpg'} alt=""/>
            </NavLink>
            <div className={s.text}>
                <h3><span>{props.name}</span></h3>
                <span>{"props.abode.city"}, {"props.abode.country"}</span>
                <span>{"props.study"}</span>
            </div>
            <div className={s.btn_wrap}>
                {props.subscription
                    ? <button className={s.btn}
                              disabled={props.followingInProgress.some(id => id === props.id)}
                              onClick={() => {
                                  props.unfollowAccess(props.id)
                              }}>Unfollow</button>
                    : <button className={s.btn}
                              disabled={props.followingInProgress.some(id => id === props.id)}
                              onClick={() => {
                                  props.followAccess(props.id)
                              }}
                    >Follow</button>}
            </div>
        </li>
    );
};

export default User;