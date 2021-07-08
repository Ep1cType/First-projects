import * as React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return ({
        friends: state.friendsPage.friends,
    });
};


// let AuthRedirectComponent = withAuthRedirect(Friends)

let mapStateToPropsForRedirect = (state) => {
    return ({
        isAuth: state.auth.isAuth,
    });
};

export default compose(
    connect(mapStateToProps),
    connect(mapStateToPropsForRedirect),
    withAuthRedirect
)(Friends)

// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
//
//
// const FriendsContainer = connect(mapStateToProps)(AuthRedirectComponent)
//
// export default FriendsContainer;