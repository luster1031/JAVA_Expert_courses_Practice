# hash tag 
1. url에서 뽑아오기
    ```js
    const handleHashChange = () => {
        console.log(window.location.hash);  //  #/main, #/guestbook, #/gallery나옴
        const route = window.location.hash.substring(1);
        console.log(route);
    }
    ```
    ![image](https://user-images.githubusercontent.com/61460836/160954089-ed69bc33-df9a-4c9d-97c3-fb883cff75d9.png)
    + `window.location.hash`를 이용해서 url에 hash를 따온다. 


2. moute설정
    ```js
    useEffect(() => {
        window.addEventListener("hashchange", handleHashChange);
        return () => {   //  언 마운트 될 때
            window.removeEventListener("hashchange", handleHashChange);
        }
    }, []); //  mounte 됐을 때 실행해야함
    ```

3. retrun 
    ```js
    return (function(){
        return <Main />
    })();
    ```
    ```js
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
    ```
    + 함수 하나 만들고 함수를 바로 실행시켜줌 

