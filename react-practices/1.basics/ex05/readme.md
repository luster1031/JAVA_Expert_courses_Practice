# ex05 : React API 기반의 애플리케이션 리팩토리
+ js 함수 
1. 설치
    ```bash
    npm i
        npm i -D webpack-cli
        npm i -D webpack-dev-server
        npm i -D sass-loader
        npm i -D node-sass

        npm i react react-dom
    ```
2. webpack.config.js 설정
    ```js
            historyApiFallback : true   //  에러나면 번들링되는 시점으로 돌려나줌
    ```
3. 코드 리팩토링
    > App.js
    ```js
    //  reactDom에 create하는 것
    const App = React.createElement('h1', null, 'Hello World');
    ```

    <br>
    
    > index.js
    ```js
    ReactDOM.render(App(), document.getElementById('root'));    
    ```
    + ReactDom에 있는 걸 Dom에 동기화 시키는 것
    + react 변경한 점 찾아줘서 반영함
    + id가 root인 dom을 찾아서 반영해줌
4. 스크립팅
    > package.json
    ```json
    "scripts": {
        "start":"npx webpack serve --progress",
        "build" : "npx webpack"
    },
    ```