import s from './Chat.module.css';
import Dialogs from "./Dialogs/Dialogs.jsx";
import Messages from "./Messages/Messages.jsx";
import MessagesContainer from "./Messages/MessagesContainer";


const Chat = (props) => {
    return (
        <div className={s.chat}>
            <Dialogs dialogs={props.chatPage.dialogs}
                     lastMessage={props.chatPage.messages}/>
            <MessagesContainer store={props.store}/>
        </div>
    );
}

export default Chat;