import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {readDialog} from "../../../redux/chatReducer";


let mapStateToProps = (state) => {
    return ({
        dialogs: state.chatPage.dialogs
    });
};




const DialogsContainer = connect(mapStateToProps, {readDialog})(Dialogs)

export default DialogsContainer;