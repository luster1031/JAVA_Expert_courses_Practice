# emaillist
1. 설치 
    ```bash
    npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    npm i react react-dom
    ```
2. 설정
    + babel.config.json
    + webpack.config.js
        + function으로 바꾸고, env를 매개변수로, 안에 코드를 return으로 
        + ```entry : path.resolve('src/${env.src}/index.js'),```할 때마다 바꿔줘야 하기 때문에

3. 스크립팅 
    ```json
      "scripts": {
            "debug": "npx webpack serve --progress --mode development",
            "build": "npx webpack"
        },
    ```
4. 실행
    ```bash
    $ npm run debug
    ```