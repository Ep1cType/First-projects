import s from "./Users.module.css";
import User from "./User/User";
import * as React from "react";
import {followAccess, unfollowAccess} from "../../redux/usersReducer";


const UsersFunctional = (props) => {


    //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    //ЗАМЕНИЛИ  i <= pagesCount НА i <= 10, т.к. страниц слишком много
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return (
        <div className={s.friends}>
            <div>
                {pages.map(page => {
                        return (
                            <button onClick={(e) => {
                                props.onPageChanged(page);
                            }}>
                                <span className={`${s.page} ${props.currentPage === page && s.selectedPage}`}>{page}</span>
                            </button>

                        )
                    }
                )
                }

            </div>
            <div className="wrapper">
                <ul className={s.row}>
                    {props.users.map(u =>
                        <User key={u.id}
                              id={u.id}
                              name={u.name}
                              followingInProgress={props.followingInProgress}
                              toggleFollowingProgress={props.toggleFollowingProgress}
                            // abode={u.abode}
                              subscription={u.followed}
                              imgUrl={u.photos.small}
                            // study={u.study}
                              follow={props.follow}
                              followAccess={props.followAccess}
                              unfollow={props.unfollow}
                              unfollowAccess={props.unfollowAccess}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default UsersFunctional;