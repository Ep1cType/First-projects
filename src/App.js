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


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className="page__layout">
                    <div className="container">
                        <div className="page__window">
                            <Navbar/>
                            <Route path='/profile' component={Profile}/>
                            <Route path='/dialogs' component={Chat}/>
                            <Route path='/news' component={News}/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

