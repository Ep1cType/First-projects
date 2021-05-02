import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Chat from "./components/Chat/chat";
import News from "./components/News/News";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";

import {Route,} from "react-router-dom"
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <div className="page__layout">
                <div className="container">
                    <div className="page__window">
                        <Navbar/>
                        <Route path='/profile/:userID?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/chat'
                               render={() => <Chat/>}/>
                        <Route path='/friends'
                               render={() => <FriendsContainer/>}/>
                        <Route path='/news'
                               render={() => <News/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

