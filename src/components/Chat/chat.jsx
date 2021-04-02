import s from './Chat.module.css';
import MessagesContainer from "./Messages/MessagesContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";


const Chat = (props) => {
    return (
        <div className={s.chat}>
            <DialogsContainer/>
            <MessagesContainer/>
        </div>
    );
}

export default Chat;