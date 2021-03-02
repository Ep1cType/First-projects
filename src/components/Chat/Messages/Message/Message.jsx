import s from "./Message.module.css";

const Message = (props) => {
    return (
        <li className={s.message__item}>
            <div className={s.message__user}>
                <img
                    src={props.imgUrl}
                    alt=""/>
                <div className={s.message__name}>
                    <h3>{props.firstname}</h3>
                </div>
            </div>
            <div className={s.message}>
                <p>{props.message}</p>
            </div>
        </li>
    );
}

export default Message;