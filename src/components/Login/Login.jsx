import React from "react";
import s from "./Login.module.css"
import LoginForm from "./LoginForm/LoginForm";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    return (
        <>
            {props.isAuth ? <Redirect to={"/profile"}/> : <LoginForm login={props.login} error={props.error}/>}
        </>

    );
}

export default Login;
