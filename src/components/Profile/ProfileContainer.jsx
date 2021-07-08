import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, setUserProfile, toggleLoader, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import Loader from "../Users/Loader";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;

        if (!userID) {
            userID = this.props.authUserID;
            if (!this.props.authUserID) {
                userID = 16622;
            }
        }

        this.props.getProfile(userID);
        this.props.getUserStatus(userID);
    }

    render() {


        return (
            (this.props.isFetching ? <Loader/> : <Profile {...this.props} profile={this.props.profile}/>)
        )
    }
}







// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});
//
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);



//Обернули контейнерную компоненту другой компонентой, которая берёт из url id пользователя и передаёт его в компоненту
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    authUserID: state.auth.userID,
    userStatus: state.profilePage.userStatus,
});

export default compose(
    connect(mapStateToProps, {
        setUserProfile, toggleLoader, getProfile, getUserStatus, updateUserStatus,
    }),
    withRouter,
    connect(mapStateToPropsForRedirect),
    // withAuthRedirect
)(ProfileContainer)

// export default connect(mapStateToProps, {
//     setUserProfile, toggleLoader, getProfile
// })(withUrlDataContainerComponent);