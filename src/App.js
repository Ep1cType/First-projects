import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Chat from "./components/Chat/chat";
import News from "./components/News/News";


import {
    Route,
    Switch,
    Redirect,
    withRouter,
    BrowserRouter,
} from "react-router-dom"
import Friends from "./components/Friends/Friends";
import {addPost} from "./redux/state";


function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className="page__layout">
                <div className="container">
                    <div className="page__window">
                        <Navbar/>
                        <Route path='/profile'
                               render={() => <Profile profilePage={props.state.profilePage}
                                                      addPost={props.addPost}
                                                      updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path='/chat' render={() => <Chat chatPage={props.state.chatPage}
                                                                addMessage={props.addMessage}
                                                                updateNewMessageText={props.updateNewMessageText}/>}/>
                        <Route path='/friends' render={() => <Friends state={props.state.friendsPage}/>}/>
                        <Route path='/news' render={() => <News/>}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

