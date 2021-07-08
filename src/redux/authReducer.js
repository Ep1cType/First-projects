import {authAPI, profileAPI, usersAPI} from "../api/api";
import {follow, toggleFollowingProgress} from "./usersReducer";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_INFO = 'SET-USER-INFO';
const SET_ERROR = 'SET-ERROR'


let initialState = {
    email: null,
    userID: null,
    login: null,
    isAuth: false,
    avatar: 'https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg',
    error: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case SET_USER_INFO: {
            return {
                ...state,
                avatar: action.avatar

            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }
};

//ActionCreator's

export const setAuthUserData = (email, userID, login, isAuth) => {
    return {
        type: SET_USER_DATA, payload: {email, userID, login, isAuth}
    };
};

export const userAvatar = (avatar) => {
    return {
        type: SET_USER_INFO, avatar
    };
};

export const setErrorFromLogin = (error) => {
    return {
        type: SET_ERROR, payload: error
    }
}




export const getAuth = () => {
    return ((dispatch) => {
            authAPI.getAuth().then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data;
                    dispatch(setAuthUserData(email, id, login, true));
                    profileAPI.getProfile(id).then(data => {
                        if (data.photos.small !== null)
                        dispatch(userAvatar(data.photos.small))
                    })
                }
            });
        }
    )
};

export const login = (email, password, rememberMe) => {
    return ((dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setErrorFromLogin(false));
                    dispatch(getAuth());
                } else {
                    dispatch(setErrorFromLogin(true));
                }
            })
    })
};

export const logout = () => {
    return ((dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    })
};

export const followAccess = (userID) => {
    return ((dispatch) => {
            dispatch(toggleFollowingProgress(true, userID));
            usersAPI.follow(userID).then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userID))
                }
                dispatch(toggleFollowingProgress(false, userID));
            });
        }
    )
};



export default authReducer ;