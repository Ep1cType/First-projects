import {Redirect} from "react-router-dom";


export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {

        if (!props.isAuth) {
            return <Redirect to='/login' />
        }

        return (
            <Component {...props} />
        )

    };

    return RedirectComponent;

}