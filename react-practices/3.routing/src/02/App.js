import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});

    useEffect(()=>{
        const handlePopstate=(e)=>{
            console.log(e.state);

        };
        window.addEventListener("popstate",handlePopstate);
        return ()=>{
            window.removeEventListener("popstate", handlePopstate);
        }
    });

    const handleLinkClick = (e) => {
        e.preventDefault(); //  페이지 이동 막음

        const url = e.target.href.substring(e.target.href.lastIndexOf("/"));
        console.log(url);
        window.history.pushState({page:url}, e.target.text, url);   //  주소창에 넣기
        
        console.log(window.history);
        setRoute({page:url});   //  화면 변화 -> 다시 그려짐
    }

    return (
        <div>
            {
                (() => {
                    switch (route.page) {
                        case '/':
                            return <Main/>;
                        case '/gallery':
                            return <Gallery/>;
                        case '/guestbook':
                            return <Guestbook/>;
                        default:
                            return null;
                    }
                })()
            }
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
        </div>
    )
}