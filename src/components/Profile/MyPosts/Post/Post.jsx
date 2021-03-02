import Avatar from './Avatar/Avatar.jsx';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.img}>
                <Avatar imgUrl={props.imgUrl}/>
            </div>
            <div className={s.text}>
                {props.message}
            </div>
        </div>
    );
}

export default Post;