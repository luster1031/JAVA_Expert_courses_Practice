import React, { useState, useEffect } from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState('');
    const handleHashChange = () => {
        console.log(window.location.hash);  //  #/main, #/guestbook, #/gallery나옴
        setRoute(window.location.hash.substring(1));
    }
    useEffect(() => {
        window.addEventListener("hashchange", handleHashChange);
        return () => {   //  언 마운트 될 때
            window.removeEventListener("hashchange", handleHashChange);
        }
    }, []); //  mounte 됐을 때 실행해야함

    return (function(){
        switch(route){
            case '/':
                return <Main />
            case '/guestbook' :
                return <Guestbook />
            case '/gallery':
                return <Gallery />
            default:
                return null;
        }
    })();
}