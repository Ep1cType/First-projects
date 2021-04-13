import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {readActionCreator} from "../../../redux/chatReducer";


let mapStateToProps = (state) => {
    return ({
        dialogs: state.chatPage.dialogs
    });
};

let mapDispatchToProps = (dispatch) => {
    return ({
        readit: (dialogID) => {
            dispatch(readActionCreator(dialogID));
        }
    });
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;