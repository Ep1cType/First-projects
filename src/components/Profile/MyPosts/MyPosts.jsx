import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.posts.map(p =>
        <Post message={p.message}
              imgUrl={p.imgUrl}/>
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={s.posts}>
            <div className={s.posts__form}>
                <form action="#" method="POST" />
                My posts:
                <textarea className={s.postfield}
                          ref={newPostElement}
                          onChange={onPostChange}
                          placeholder="Write post"
                          value={props.newPostText}/>
                <div className={s.btn__wrapper}>
                    <div className={s.btn__block}>
                        <button className={s.btn} onClick={addPost}>Send</button>
                    </div>
                </div>
            </div>
            <div className="posts__item">
                {postElements}
            </div>

        </div>
    );
}
    
export default MyPosts;
