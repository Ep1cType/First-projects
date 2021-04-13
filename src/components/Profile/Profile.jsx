import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Avatar = (props) => {
    return (
        <img
            src={props.userAvatar}
            alt=""/>
    );
}

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.narrow}>
                <div className={s.avatar}>
                    <div>
                        <Avatar
                            userAvatar="https://avatarfiles.alphacoders.com/277/277372.jpg"/>
                    </div>
                </div>
            </div>
            <div className={s.right}>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        </div>
    );
}

export default Profile;