import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile'
                               render={() => <Profile posts={props.posts}/>}/>
                        <Route path='/dialogs'
                               render={() => <Dialogs dialogs={props.dialogs} mesages={props.mesages}/>}/>
                        <Route path='/news' component={News}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;