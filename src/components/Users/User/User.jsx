import * as React from "react";
import s from "../Users.module.css";
import photoPlug from "../../../img/plugs/avatarPlug.jpg"
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../../api/api";


const User = (props) => {





    return (
        <li className={s.item}>
            <NavLink to={'/profile/' + props.id} href="#" className={s.img__url}>
                <img src={props.imgUrl || "https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg" } alt=""/>
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
                                  props.toggleFollowingProgress(true, props.id);
                                  usersAPI.unfollow(props.id).then(data => {
                                      if (data.resultCode === 0) {
                                          props.unfollow(props.id)
                                      }
                                      props.toggleFollowingProgress(false, props.id);
                                  });
                              }}
                    >Unfollow</button>
                    : <button className={s.btn}
                              disabled={props.followingInProgress.some(id => id === props.id)}
                              onClick={() => {
                                  props.toggleFollowingProgress(true, props.id);
                                  usersAPI.follow(props.id).then(data => {
                                      if (data.resultCode === 0) {
                                          props.follow(props.id);
                                      }
                                      props.toggleFollowingProgress(false, props.id);
                                  });
                              }}
                    >Follow</button>}
            </div>
        </li>
    );
};

export default User;