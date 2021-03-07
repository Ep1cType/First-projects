import s from "./Messages.module.css";
import Message from "./Message/Message.jsx";
import * as React from "react";

const Messages = (props) => {

    let messageElements = props.messages.map(m =>
        <Message
            firstname={m.firstname}
            imgUrl={m.imgUrl}
            message={m.message}/>
    );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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