import * as React from "react";
import s from "./Users.module.css";
import User from "./User/User";
import axios from "axios";




const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
                props.setUsers(responce.data.items);
            });
        }
    }


    let userElements = props.users.map(u =>
        <User key={u.id}
              id={u.id}
              name={u.name}
              // abode={u.abode}
              subscription={u.followed}
              imgUrl={u.photos}
              // study={u.study}
              follow={props.follow}
              unfollow={props.unfollow}
        />
    );


    return (
        <div className={s.friends}>
            <div className="wrapper">
                <ul className={s.row}>
                    <button onClick={getUsers}>Get Users</button>
                    {userElements}
                </ul>
            </div>
        </div>
    );
}




export default Users;