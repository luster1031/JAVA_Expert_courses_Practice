## ex00.cra Recofiguration (내가 직접 설정)
1. 설치
    ```bash
    npm i
        npm i -D webpack-cli webpack-dev-server sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react

        npm i react react-dom
    ```
2. 설정
    babel.config.json
    webpack.config.js
3. npm 스크립팅
    ```json
      "scripts": {
            "start": "npx webpack serve --progress",
            "build": "npx webpack"
        },
    ```
4. 실행
    ```bash
    $ npm start
    $ npm run build
    ```
