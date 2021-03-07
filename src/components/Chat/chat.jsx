import s from './Chat.module.css';
import Dialogs from "./Dialogs/Dialogs.jsx";
import Messages from "./Messages/Messages.jsx";


const Chat = (props) => {
    return (
        <div className={s.chat}>
            <Dialogs dialogs={props.chatPage.dialogs}
                     lastMessage={props.chatPage.messages}/>
            <Messages messages={props.chatPage.messages}
                      addMessage={props.addMessage}
                      updateNewMessageText={props.updateNewMessageText}
                      newMessageText={props.chatPage.newMessageText}/>
        </div>
    );
}

export default Chat;