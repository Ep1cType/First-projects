import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return ({
        dialogs: state.chatPage.dialogs
    });
};

// let mapDispatchToProps = () => {
//     return ({
//
//     });
// };


const DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer;