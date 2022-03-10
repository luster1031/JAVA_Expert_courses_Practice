# ex08 : JSX Tutorial

1. 설치 
    ```bash
    npm i -D webpack-cli webpack-dev-server sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react

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
            "debug": "npx webpack serve --progress --mode development --env",
            "build": "npx webpack"
        },
    ```
4. 실행
    ```bash
    $ npm run debug src=(실행해야하는 소스 지정)
    ```
    + 실제로 실행되는 것은
        + npx webpack serve --progress --mode development --env src=01

## [01. 특징1 : HTML과 차이점](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex08/src/01)
+ 하나의 element만 가능함 - div로 묶어줘야한다 (App.js)
    + index.js 부분에 ```<App />,```가 ```createElement('h1', null, {} )```으로 바뀌기 때문에
## [02. 특징2 : single Root Node](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex08/src/02)
+ ``` <div id="App">```
## [03. **함수 컨포넌트** 만들기](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex08/src/03)
+ Header.js 만들기
    + export default Hedaer;
+  App.js
    ```js
    import Header from './Header';
    // 생략
    <header/>
    // 생략
    ```
+ content
+ div쓰기 싫을 때 -> ```Fragment```사용
## 04. Pure React(React API)로 컨포넌트 작성하기
## 05. 클래스 컨포넌트 만들기
## 06. 특징3 : JSX 표현식 표기법 - 값을 찍어내는 것
+ ```<img src={logo}```
+ ```{expression}```표현식 넣는 것

## 07. 특징4 : 공백
## 08. Dynamic HTML Rendering
## 09. Comment