import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile, toggleLoader} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import Loader from "../Users/Loader";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;

        if (!userID) {
            userID = this.props.authUserID;
        }

        this.props.getProfile(userID);
    }

    render() {
        return (
            (this.props.isFetching ? <Loader/> : <Profile {...this.props} profile={this.props.profile}/>)
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    authUserID: state.auth.userID,
});


//Обернули контейнерную компоненту другой компонентой, которая берёт из url id пользователя и передаёт его в компоненту
let withUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {
    setUserProfile, toggleLoader, getProfile
})(withUrlDataContainerComponent);