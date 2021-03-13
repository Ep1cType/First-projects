import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";


const Avatar = (props) => {
    return (
        <img
            src={props.avatarUrl}
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
                            avatarUrl="https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg"/>
                    </div>
                </div>
            </div>
            <div className={s.right}>
                <ProfileInfo/>
                <MyPosts posts={props.profilePage.posts}
                         dispatch={props.dispatch}
                         newPostText={props.profilePage.newPostText} />
            </div>
        </div>
    );
}

export default Profile;