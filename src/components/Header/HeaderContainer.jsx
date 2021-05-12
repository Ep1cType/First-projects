import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, setAuthUserData, userAvatar} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.getAuth(this.props.id)


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

export default connect (mapStateToProps, {setAuthUserData, userAvatar, getAuth})(HeaderContainer) ;