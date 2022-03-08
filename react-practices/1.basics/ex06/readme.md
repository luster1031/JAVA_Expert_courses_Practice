# ex06 : React JSX 기반의 애플리케이션 리팩토리 

1. 설치
    ```bash
    npm i
        npm i -D webpack-cli
        npm i -D webpack-dev-server
        npm i -D sass-loader
        npm i -D node-sass

        npm i react react-dom
    ```

2. 트랜스 파일링
    ```html
    <div>
        <h1>Hello Wolrd</h1>
    </div>
    ```
    이걸 
    ```js
    React.createElement('div', React.createElement('h1', null, 'Hello World'), null);
    ```
    이걸로 바꿔야 한다.  -> **트랜스파일링** (바벨이 트랜스파일링해줌)

    + 디자인과 js 파일을 같이 쓸 수 있음
        ```js
        const message = "Hello World";
        //  JSX
        return (
            <div>
                <h1>(message)</h1>
            </div>
        );
        ```
        + 통신할 때 이런식으로 보내야함
        + 이렇게 돌리면 안 됨 -> div가 뭐냐고 물어봄

3. 추가 설치
    ```bash
    $ npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
    ```
    + 태그로 되어있는 것들 react api로 해야함 - babel/react

4. babel 설정
    > babel.config.json 설정

5. webpack.config.js 설정
    + 모든 js를 바벨이 변환 시킴
    + 내 코드만 변환시키기 위해서
        + /node_modules를 빼줌
            ```js
            rules:[
                {
                    test:/\.js$/i,
                    exclude:/node_modules/,
                    use:['babel-loader']
                }
                ..[생략]..
            ]
            ```
    ```bash
    $ npm i -D babel-loader
    ```