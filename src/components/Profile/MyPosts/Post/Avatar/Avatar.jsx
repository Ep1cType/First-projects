import s from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <img className={s.img}
            src={props.imgUrl}
            alt=""
        />
    );
}

export default Avatar;