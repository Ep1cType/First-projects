import React from "react";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import Login from "./Login";


class LoginContainer extends React.Component {

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        error: state.auth.error,
    })
};

export default connect(mapStateToProps, {login})(LoginContainer);



