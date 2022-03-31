# ex02: React Router Basic II: HTML5 history API
## 1. url뽑기
```js
const handleLinkClick = (e) => {
    e.preventDefault();

    console.log(e.target.href);
}
```

![image](https://user-images.githubusercontent.com/61460836/160957432-673d7b6d-cefa-4c50-b58b-2421b131f5a7.png)

<br>


```js
const handleLinkClick = (e) => {
    e.preventDefault();

    const url = e.target.href.substring(e.target.href.lastIndexOf("/"));
    console.log(url);
}
```
![image](https://user-images.githubusercontent.com/61460836/160957595-9d6ba4c9-8078-454c-a027-5468f06fa414.png)

## 2. router함수 설정
```js
<div>
    {
        router()
    }
</div>
```
+ Main이 첫 화면에 나오게

```js
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
</div>
```

## 3. 뒤로가기 버튼 
```js
 useEffect(()=>{
    const handlePopstate=(e)=>{
        console.log(e.state);

    };
    window.addEventListener("popstate",handlePopstate);
    return ()=>{
        window.removeEventListener("popstate", handlePopstate);
    }
});
```
![image](https://user-images.githubusercontent.com/61460836/160959271-888fd7b0-9525-4944-9c9c-b2f07978c7e8.png)
+ 뒤로가기 두번 누른 것