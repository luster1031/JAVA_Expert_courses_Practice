# 2. ex01 : 전통적인 DOM API 기반의 애플리케이션
```shell
${ex01} npm init -y
```
## 1. Dev Server 만들기- client test (개발용)
```shell
${ex01} npm i -D express
```
> sev-server.js
+ dev server가 애플리케이션을 랜딩하는 페이지 - public
    ```js
    const application = express().use(express.static(path.join(__dirname,'public')));
    ```
    > package.json
    ```json
    "scripts": {
        "start": "node dev-server"
    },
    ```
+ es6인지 require인지 알려줘야함
    + es6 module system
        > package.json
        ```json
        "type":"module",
        ```
        + ex00.cra 는 node가 실행하지 않음 그래서 필요 없음
        

> index.html
+ 어플리케이션 정의
    > index.js
    ```js
    //  어플리케이션 정의
    function App(){
        const App = document.createElement('h1');
        App.textContent = 'Hello World';
        return App;   
    }

    document
        .getElementById('root')
        .appendChild(App());
    ```
    + root라는 id에 App을 자식으로 추가
