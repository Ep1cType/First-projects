const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'CURRENT-PAGE'
const COUNT = 'COUNT'
const TOGGLE_LOADER = 'TOGGLE-LOADER'

debugger;
let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }

// Экшн, который берёт пользователей из базы данных и перезаписывает их в стейт. users: ...action.users

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case COUNT: {
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        }

        case TOGGLE_LOADER: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:
            return state;
    }

};

//ActionCreator's

export const followActionCreator = (userID) => {
    return {
        type: FOLLOW, userID
    };
};

export const unfollowActionCreator = (userID) => {
    return {
        type: UNFOLLOW, userID
    };
};

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS, users
    }
}

export const currentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}

export const usersCountActionCreator = (usersCount) => {
    return {
        type: COUNT, usersCount
    }
}

export const toggleLoaderActionCreator = (isFetching) => {
    return {
        type: TOGGLE_LOADER, isFetching
    }
}



export default usersReducer ;