import s from './MyPosts.module.css';

const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            <form action="#" method="POST" />
            My posts:
            <textarea>
                
            </textarea>
            <div className={s.btn__wrapper}>
                <div className={s.btn__block}>
                    <button className={s.btn}>Send</button>
                </div>
            </div>
        </div>
    );
}
    
export default MyPosts;