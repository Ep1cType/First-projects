import * as React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/chatReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return ({
        messages: state.chatPage.messages,
        newMessageText: state.chatPage.newMessageText,
    })
};


let mapDispatchToProps = (dispatch) => {
    return ({
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
    });
};



const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;