import * as React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/chatReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
       <Messages addMessage={addMessage}
                 updateNewMessageText={onMessageChange}
                 messages={state.chatPage.messages}
                 newMessageText={state.chatPage.newMessageText}/>
    );
}

export default MessagesContainer;