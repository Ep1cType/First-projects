import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import Post from './MyPosts/Post/Post.jsx';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.narrow}>
                <div className={s.avatar}>
                    <div>
                        <img
                            src="https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14044.jpg"
                            alt=""/>
                    </div>
                </div>
            </div>
            <div className={s.right}>
                <div className={s.info}>
                    <div className={s.name}>
                        <h1>Denis Chernykh</h1>
                    </div>
                    <div className={s.desc}>
                        <div className={s.row}>
                            <div className={s.title}>
                                Date of Birth:
                            </div>
                            <div className={s.text}>
                                10 July
                            </div>
                        </div>
                        <div className={s.row}>
                            <div className={s.title}>
                                City:
                            </div>
                            <div className={s.text}>
                                Krasnoyarsk
                            </div>
                        </div>
                        <div className={s.row}>
                            <div className={s.title}>
                                Education:
                            </div>
                            <div className={s.text}>
                                SibSau'21
                            </div>
                        </div>
                        <div className={s.row}>
                            <div className={s.title}>
                                Website:
                            </div>
                            <div className={s.text}>
                                Lorem, ipsum dolor.
                            </div>
                        </div>
                        <div className={s.row}>
                            <div className={s.title}>
                                Languages:
                            </div>
                            <div className={s.text}>
                                Russian, English
                            </div>
                        </div>
                    </div>
                </div>
                <MyPosts/>
                <Post message="How are you"/>
                <Post message="I'm Fine, How are you ?"/>
                <Post message="You are debil"/>
                <Post message="Diman "/>
            </div>
        </div>
    );
}

export default Profile;