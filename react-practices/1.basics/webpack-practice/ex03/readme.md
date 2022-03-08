## webpack 개발 서버 설정

1. 개발 서버 설정
    > wabpack.config.js
    ```js
     devServer:{
        host:'0.0.0.0', //  아무대나 들어올 수 있음
        port:9090,
        liveReload:true, //  소스 변경됐을 때, 찾아서 서버 다시 올릴 수 있음
        hot :false,
        compress:true    //  public의 내용을 서버 메모리에 올려서 작업함
    }
    ```
2. webpack-dev-server install
    ```bash
    npm i
    npm i -D webpack-cli
    npm i -D webpack-dev-server
    ``` 
3. 스크립팅
    > package.json
    ```json
        "start": "npx webpack serve --progress",
    ```
    + ```entry : path.resolve('src/index.js'),``` 스캔한다.
4. public의 내용을 서버 메모리에 올려서 작업함 - 개발 서버 실행   
    + bundle.js가 없어도 작동 가능
    ```bash
    npm start
    ```