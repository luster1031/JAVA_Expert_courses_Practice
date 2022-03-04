# 4. ex03 : 애플리케이션2 : ES6 모듈 시스템 기반으로 분리 - ES6 모듈 시스템
1. index.js
    + App.js에 의존성 가지게끔 모듈 분리
    ```js
    //  의존성 가지게끔 모듈로 분리한 것
    import { App } from './App.js';
    ```
2. App.js
    ```js
    export { App }
    ```
3. 이렇게 합쳐진다고 브라우저에게 알려줘야한다.
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="root"><!--js가 내용 리턴해줌--> </div>
        <script src="module"></script>
        <script src="App.js"></script>
    </body>
    </html>
    ```
    + browser에서도 es6 시스템 지원함
    + 바로 import 안하고, 밑에 있는거 다운 로드 해서 실행 시킴
        + App.js 먼저 다운로드 하는 것을 보장해줌

+ 문제점
    1. 애플리케이션이 커지면, 100개를 다 나열하는게 문제
    2. 자바스크립트만 돌아가는게 아니고, css도 있음
        + 클래스 이름대로 가져와야할 때, 
        + 이미지파일들에 대한 제어를 해줄 수가 없다.
