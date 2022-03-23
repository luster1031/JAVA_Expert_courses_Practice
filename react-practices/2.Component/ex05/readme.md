# ex05 : Component Lifecycle

+ 01 : class Component Lifecycle
    + 1, 2번 섞여서 불린다. 
    1. Lifecycle 1 : mount
        1. constructor
        2. getDerivedStateFromProps : props로 받아온 값을 state에 동기화한다.[```"react": "^17.0.2"```]
        3. render
        4. ★ componentDidMount : 컴포넌트 생성을 마치고 렌더링 작업이 끝난 후, 
    2. Lifecycle 2 : update
        + getDerivedStateFromProps : props로 받아온 값을 state에 동기화한다. 
        + shoudComponentUpdate : props나 state을 변경했을 때, 리렌더링 여부를 결정한다. 
        + render
        + getSnapshotBeforeUpdate: render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출 [react v16.3]
        + ★ componentDidUpdate : DOM 업데이트가 끝난 직후 호출된다. DOM 작업이 가능하다. 
    3. Lifecycle 3 : Unmount
        + componentWillUnmount : 컴포넌트를 DOM에서 제거하기 전

+ 02 : Alternative(대용) : Functional Component LifeCyle : useEffect Hook

1. 설치
    ```bash
    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react

    $ npm i react react-dom prop-types
    ```


2. 설정
config/babel.config.json
config/webpack.config.js

3. npm 스크립팅
    ```bash
    "scripts": {
        "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
        "build": "npx webpack"
    }
    ```
    

4. 실행
$ npm run debug src={01|02|03|04|... }
