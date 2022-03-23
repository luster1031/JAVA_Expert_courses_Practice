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
    4. 예제
        + src/01


+ 02 : Alternative(대용) : Functional Component LifeCyle : useEffect Hook
    1. Alternative 01 : getDerivedStateFromProps
        + DOM이 그려진 다음에 한번 더 호출됨
            ```js
            /**
             *   1. Alternative 01: getDerivedStateFromProps
            *      두번 호출 됨
            */
            if(boxColor !== color ) {
                setBoxColor(color);
            }

            ```
    2. After Rendering 함수( 상태의 변화 -> 렌더링 -> 함수)
        + class component lifecycle(componentDidMount, componentDidUpdate)
            + Mount : VDOM 만든게 -> DOM 으로 반영하는 것
                + DOM이 비워져있는 상태에 component가 DOM에 반영되는 것 
                + render를 해야 Mount되는 것
            ```js
            useEffect(() => {
                console.log('After Rendering');
            });
            ```
    3. 어떤 특정 상태(boxColor)의 변화에 반응하는 After Rendering 함수       
        ```js
        useEffect(() => {
            console.log('Update Color(DB) Using APIs...');
        }, [boxColor]);
        ```
    
    4. Alternative 02: componentDidMount & componentWillUnmount
        + componentDidMount & componentWillUnmount 대체함
        + Mount가 된 다음에 첫번째 데이터를 가지고 올 때
        + return 해주면 unmount될 때 
        ```js
         useEffect(() => {
            console.log('After Mount(componentDidMount)');
            return (function(){
                console.log('After Unmount(componentWillUnmount)');
            });
        }, []);
        ```

3. Clock Component (Class Component Lifecycle 이용) : src/03
4. Clock Component (useEffect Hook 이용) : src/04 [과제]




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
