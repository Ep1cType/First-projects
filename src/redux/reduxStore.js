import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    chatPage: chatReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;