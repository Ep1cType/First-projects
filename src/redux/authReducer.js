const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_INFO = 'SET-USER-INFO';


let initialState = {
    email: null,
    userID: null,
    login: null,
    isAuth: false,
    avatar: 'https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        case SET_USER_INFO: {
            return {
                ...state,
                avatar: action.avatar

            }
        }
        default:
            return state;
    }
};

//ActionCreator's

export const setAuthUserData = (email, userID, login) => {
    return {
        type: SET_USER_DATA, data: {email, userID, login}
    };
};

export const userAvatar = (avatar) => {
    return {
        type: SET_USER_INFO, avatar
    };
};





export default authReducer ;