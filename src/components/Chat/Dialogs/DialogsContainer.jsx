import {connect} from "react-redux";
import {readDialog} from "../../../redux/chatReducer";
import React from "react";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return ({
        dialogs: state.chatPage.dialogs,
    });
};



let mapStateToPropsForRedirect = (state) => {
    return ({
        isAuth: state.auth.isAuth,
    });
};



let DialogsContainer = compose(
    connect(mapStateToProps, {readDialog}),
    connect(mapStateToPropsForRedirect),
    withAuthRedirect
)(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
//
//
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
//
//
// const DialogsContainer = connect(mapStateToProps, {readDialog})(AuthRedirectComponent);

// export default DialogsContainer;
export default DialogsContainer;