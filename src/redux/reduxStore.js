import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    chatPage: chatReducer,
    friendsPage: friendsReducer,
});

let store = createStore(reducers);

export default store;