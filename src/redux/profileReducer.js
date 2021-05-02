const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILES = 'SET-USER-PROFILES';
const TOGGLE_LOADER = 'TOGGLE-LOADER'

// В данную функцию приходит state. Так как функция отвечает за profile, значит в state
// придёт profilePage. Значит избавляемся от конструкции this._state.profilePage
// callSubscriber больше не вызывается, так как это не наша ответственность. Мы лишь
// преобразовываем state.

let initialState = {
    posts: [
        {
            id: 1,
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            imgUrl: 'https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg'
        },
        {
            id: 2,
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            imgUrl: 'https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg'
        },
        {
            id: 3,
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            imgUrl: 'https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg'
        },
        {
            id: 4,
            message: 'Пиздец я в ахуе',
            imgUrl: 'https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg'
        },
        {
            id: 5,
            message: 'Ты шо дурак бля',
            imgUrl: 'https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg'
        },
    ],
    userProfile: null,
    newPostText: '',
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                imgUrl: 'https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg',
            };
            return  {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText,
            };
        }

        case SET_USER_PROFILES: {
            return {
                ...state,
                profile: action.userProfile
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

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};

export const setUserProfile = (userProfile) => {
    return {
        type: SET_USER_PROFILES, userProfile

    }
};

export const toggleLoader = (isFetching) => {
    return {
        type: TOGGLE_LOADER, isFetching
    }
};

export default profileReducer;