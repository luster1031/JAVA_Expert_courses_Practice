# kanbanboard
![image](https://user-images.githubusercontent.com/61460836/158583972-8d75be31-8a38-45e2-9ec0-190663631c76.png)


1. 설치 
    ```bash
    npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions 
    npm i react react-dom prop-types
    ```
2. 설정 
    + babel.config.json
    + webpack.config.js
3. 스크립트 추가하기
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


## 필터
+ false
    ```js
    const result = [0,1,2,3,4].filter(function(e){
        return false;   //  false로 하면 해당하는 얘는 안 넣음
    })
    console.log(result);
    ```
+ true;
    ```js
    const result = [0,1,2,3,4].filter(function(e){
        return true;   //  다 나옴
    })
    console.log(result);
    ```
+ key값이 꼭 필요함




1. 삭제
+ state에 넣어두고
    + 삭제가 오면
    + data.json에 찾아서 없앰
    + 우린 상태 변화시킴 
+ render가 다시 되면서 없어짐(다시 DOM에 그림 -> react가 해줌)


