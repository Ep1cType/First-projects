import s from "./Messages.module.css";
import Message from "./Message/Message.jsx";
import * as React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/state";

const Messages = (props) => {

    let messageElements = props.messages.map(m =>
        <Message
            firstname={m.firstname}
            imgUrl={m.imgUrl}
            message={m.message}/>
    );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.messages}>
            <div className="messages__wrapper">
                <ul className={s.messages__row}>
                    { messageElements }
                </ul>
                <form action="#" method="POST" />
                <textarea className={s.messagefield}
                          ref={newMessageElement}
                          onChange={onMessageChange}
                          placeholder="Write message"
                          value={props.newMessageText}/>
                <div className={s.btn__wrapper}>
                    <div className={s.btn__block}>
                        <button className={s.btn} onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;