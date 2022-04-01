import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/about/About";
import Login from "./component/user/Login";
import Setting from "./component/user/Settings";
import Join from "./component/user/Join";
import Error4040 from "./component/error/Error404";
import Me from "./component/about/Me";

import './assets/scss/App.scss'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='gallery' element={<Gallery />} />
                <Route path='guestbook' element={<Guestbook />} />
                <Route exact path='about' element={<About />}>
                    <Route path='me' element={<Me />}/>
                </Route>
                <Route path='/user/login' element={<Login />} />
                <Route path='/user/settings' element={<Setting />} />
                <Route path='/user/join' element={<Join />} />
                <Route path='*' element={<Error4040 />} />
            </Routes>
        </Router>
    );
}