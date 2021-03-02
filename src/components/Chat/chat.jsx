import s from './Chat.module.css';
import Dialogs from "./Dialogs/Dialogs.jsx";
import Messages from "./Messages/Messages.jsx";

const Chat = (props) => {
    return (
        <div className={s.chat}>
            <Dialogs />
            <Messages />
        </div>
    );
}

export default Chat;