# ex03 : Component - React Event
### [01 : Inline Handler](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex03/src/01)
### [02 : Function Handler](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex03/src/02)
### [03 : Synthetic Event(이벤트 합성)](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex03/src/03)
### [04 : Event Handler 예제들)](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex03/src/04)
### 05 : Event Handler에서 'ref'사용하기 : Functional Component
+ state
    1. 제어 컴포넌트/비제어 컴포넌트
    2. 상태 컴포넌트

### 06 : Event Handler에서 'ref'사용하기 : Class Component

1. 설치 
    ```bash
    $ npm i -D webpack-cli webpack-dev-server sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react

    $ npm i react react-dom
    ```
2. 설정 
    + babel.config.json
    + config/webpack.config.js
3. 스크립트 추가하기
    ```json
        "scripts": {
        "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
        "build": "npx webpack"
        },
    ```
4. 실행
    ```bash
    $ npm run debug src=(실행해야하는 소스 지정)
    ```