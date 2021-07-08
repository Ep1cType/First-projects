import * as React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../Users/Loader";


const Profile = (props) => {

    if (!props.profile ) {
        return (
            <Loader />
        );
    }

    return (
        <div className={s.profile}>
            <div className={s.narrow}>
                <div className={s.avatar}>
                    <div>
                        <img
                            src={props.profile.photos.large || 'https://avatarfiles.alphacoders.com/277/277372.jpg'}
                            alt=""/>
                    </div>
                </div>
            </div>
            <div className={s.right}>
                <ProfileInfo profile={props.profile} userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
                <MyPostsContainer/>
            </div>
        </div>
    );
}

export default Profile;