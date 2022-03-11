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
## [04. Pure React(React API)로 컨포넌트 작성하기](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex08/src/04)
+ index.js
    + ```<App />```대신 ```React.createElement(App, null)```
+ Header.js
    + ```return (<h2>App04</h2>);```대신 ```return React.createElement('h2', null, 'App04');```
+ App.js
    ```js
    return (

        <Fragment>
            <Header/>
            <Content/>
        </Fragment>
    );
    ```
    ```js
    return React.createElement(
       Fragment, 
       null, 
       /* 가변이기 때문에 */
       React.createElement(Header, null),
       React.createElement(Content, null)
       );
    ```

+ Content.js
    ```js
    return (
        <p>Pure React(React API)로 컨포넌트 작성하기</p>
    );
    ```
    ```js
    return React.createElement('p', null, 'Pure React(React API)로 컨포넌트 작성하기');
    ```
## [05. 클래스 컨포넌트 만들기](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex08/src/05)
1. Header.js
    + Component
        ```js
        class Header extends Component{
            render(){

            }
        }
        ```

## [06. 특징3 : JSX 표현식 표기법({js epression}과 문제점) - 값을 찍어내는 것](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex08/src/06)
+ ```<img src={logo}```
+ ```{expression}```표현식 넣는 것


## [07. Dynamic HTML Rendering](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/1.basics/ex08/src/07)
+ ```<div dangerouslySetInnerHTML={{ __html : html}}/>```
    + 추천하지 않는다.
        + XSS : 크로스 사이트 스크립팅
            + 보안에 취약함
    + HTML 태그를 동적으로 생성하여 JSX element 의 특정 속성(dangerouslySetInnerHTML)으로 랜더링하는 작업은 금지하고 있지만, XSS(Cross-site Scripting) 보호 기능을 끄고 사용할 수 있다. 

## 08. 특징4 : 공백
## 09. Comment