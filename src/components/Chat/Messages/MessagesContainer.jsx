import * as React from "react";
import {addMessage, updateNewMessage} from "../../../redux/chatReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return ({
        messages: state.chatPage.messages,
        newMessageText: state.chatPage.newMessageText,
    })
};


const MessagesContainer = connect(mapStateToProps, {addMessage, updateNewMessage})(Messages);

export default MessagesContainer;