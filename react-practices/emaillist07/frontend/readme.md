# emaillist
1. 설치 
    ```bash
    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions 
    $ npm i react react-dom prop-types react-addons-update
    ```
2. 설정
    + babel.config.json
    + webpack.config.js
        + function으로 바꾸고, env를 매개변수로, 안에 코드를 return으로 
        + ```entry : path.resolve('src/${env.src}/index.js'),```할 때마다 바꿔줘야 하기 때문에

3. 스크립팅 
    ```json
      "scripts": {
            "build": "npm run build:frontend && npm run build:backend",
            "build:frontend": "npx webpack --config config/webpack.config.js --mode production", 
            "build:backend": "cd ../backend && mvn clean package",
            "dev": "",
            "dev:frontend": "npx webpack serve --config config/webpack.config.js --progress --mode development",
            "dev:backend": "cd ../backend && mvn spring-boot:run"
        },
    ```
4. 실행
    ```bash
    $ npm run dev:frontend
    ```


+ `:global(.App)` 안 하면 해싱이 되기 때문에 `import style './'`해줘야한다. 
+ scss
    + css
        ```css
        .Emaillist li a:before {
            content:'X'
        }
        .Emaillist li a:hover, a:visited, a:active {
            text-decoration: none;
            color: #fff;
        }
        ```
    + scss
        ```scss
        &:before {
            content:'X'
        }
        &:hover, &:visited, &:active {
            text-decoration: none;
            color: #fff;
        }
        ```
        + `&`로 바꾼다. 

