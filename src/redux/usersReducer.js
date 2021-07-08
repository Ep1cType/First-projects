import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'CURRENT-PAGE';
const COUNT = 'COUNT';
const TOGGLE_LOADER = 'TOGGLE-LOADER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : [state.followingInProgress.filter(id => id !== action.userID)]
            }
        }

        default:
            return state;
    }

};

//ActionCreator's

export const follow = (userID) => {
    return {
        type: FOLLOW, userID
    };
};

export const unfollow = (userID) => {
    return {
        type: UNFOLLOW, userID
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
};

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
};

export const setTotalUsersCount = (usersCount) => {
    return {
        type: COUNT, usersCount
    }
};

export const toggleLoader = (isFetching) => {
    return {
        type: TOGGLE_LOADER, isFetching
    }
};

export const toggleFollowingProgress = (isFetching, userID) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID
    }
};

export const getUsers = (currentPage, pageSize) => {
    return ((dispatch) => {
            dispatch(toggleLoader(true));
            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleLoader(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
        }
    )
};

export const unfollowAccess = (userID) => {
    return ((dispatch) => {
            dispatch(toggleFollowingProgress(true, userID));
            usersAPI.unfollow(userID).then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userID))
                }
                dispatch(toggleFollowingProgress(false, userID));
            });
        }
    )
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

export const onPageChange = (page, pageSize) => {
    return ((dispatch) => {
            dispatch(setCurrentPage(page));
            dispatch(toggleLoader(true));
            usersAPI.getUsers(page, pageSize).then(data => {
                if (data.error === null) {
                    dispatch(toggleLoader(false));
                    dispatch(setUsers(data.items))
                }
            });
        }
    )
};

export default usersReducer ;