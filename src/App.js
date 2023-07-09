import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//font
import fight from "./Fonts/fight.ttf";

const App = (props) => {
    return (
        <BrowserRouter>
            <Header />
            <div className='app-wrapper' >

                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<Dialogs
                                   urlUserImage={props.state.messagesPage.dialogs}
                                   dialogsData={props.state.messagesPage.dialogs}
                                   messagesData={props.state.messagesPage.messages}/>} />
                        <Route path="/profile"
                               element={<Profile
                                   postsData={props.state.profilePage.posts}/>} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
