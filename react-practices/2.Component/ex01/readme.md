# ex01 : Property

### [01. props(property)](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex01/src/01)
1. 컴포넌트의 데이터
2. 부모에서 자식으로 전달된다.
    + Component Communication(컴포넌트간의 통신), Data Flow
    + Top -> Down
3. 자식 컴포넌트에서 변경 불가
4. 부모가 소유한다.
### [02. FoodList src/01 : 클래스 컴포넌트](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex01/src/02)
### [03. FoodList src/02 : Data Flow(Top -> Down) : 클래스 컴포넌트](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex01/src/03)

### 04. FoodList src/03 : Data Flow : 함수 컴포넌트
### 05. FoodList src/04 : validation

1. 설치 
    ```bash
    $ npm init -y
    $ npm i -D webpack-cli webpack-dev-server sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react

    $ npm i react react-dom
    ```
2. 설정 
    + babel.config.json
    + webpack.config.js
3. 스크립트 추가하기
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