import s from "./Messages.module.css";
import Message from "./Message/Message.jsx";
import Dialog from "../Dialogs/Dialog/Dialog";

const Messages = (props) => {

    let messagesData = [
        {
            firstname: 'Denis',
            imgUrl: 'https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg',
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
        },
        {
            firstname: 'Danil',
            imgUrl: 'https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg',
            message: 'bcxgbxcghdsghsfghdfghfdhgfg',
        },
        {
            firstname: 'Denis',
            imgUrl: 'https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg',
            message: 'cvbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        },
        {
            firstname: 'Denis',
            imgUrl: 'https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg',
            message: 'fffffffffffffffffffffffffffffffffffff',
        },
        {
            firstname: 'Danil',
            imgUrl: 'https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg',
            message: 'dffffffffffffffffffffffffffffgfdfg',
        },
    ]

    let messageElements = messagesData.map(m =>
        <Message
            firstname={m.firstname}
            imgUrl={m.imgUrl}
            message={m.message}/>
    );

    return (
        <div className={s.messages}>
            <div className="messages__wrapper">
                <ul className="messages__row">
                    { messageElements }
                </ul>
            </div>
        </div>
    );
}

export default Messages;