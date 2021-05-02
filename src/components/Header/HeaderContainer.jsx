import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, userAvatar} from "../../redux/authReducer";
import {authAPI, profileAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {

        authAPI.getAuth().then(data => {
            if(data.resultCode === 0) {
                let {email, id, login} = data.data;
                this.props.setAuthUserData(email,id, login)
                profileAPI.getProfile(this.props.id).then(data => {
                    this.props.userAvatar(data.photos.small)
                })
            }
        });

    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}

let mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id,
        userImg: state.auth.avatar
    })
};

export default connect (mapStateToProps, {setAuthUserData, userAvatar})(HeaderContainer) ;