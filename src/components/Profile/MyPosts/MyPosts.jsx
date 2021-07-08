import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as React from "react";
import {useForm} from "react-hook-form";

const MyPosts = (props) => {

    const {
        register,
        handleSubmit,
        formState: {errors, submitCount}
    } = useForm();

    const onSubmit = data => props.addPost(data);

    let postElements = props.posts.map(p =>
        <Post key={p.id}
              message={p.message}
              imgUrl={p.imgUrl}/>
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {

        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.posts}>
            <div className={s.posts__form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        My posts:
                    </label>
                    <textarea className={s.postfield}
                              ref={newPostElement}
                              type="post"
                              {...register("post", {maxLength: 50 })}
                              onChange={onPostChange}
                              placeholder="Write post"
                              value={props.newPostText}/>
                    {errors.post && <span>Слишком много символов. Максимум - 50</span>}
                    <div className={s.btn__wrapper}>
                        <div className={s.btn__block}>
                            {props.newPostText ? <button className={s.btn} type="submit">Send</button> : null}
                        </div>
                    </div>
                </form>
            </div>
            <div className="posts__item">
                {postElements}
            </div>

        </div>
    );
};

export default MyPosts;
