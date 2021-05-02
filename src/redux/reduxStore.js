import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    chatPage: chatReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;