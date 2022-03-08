## webpack.config.js : 번들링 환경 설정
1. 설치 패키지
    ```bash
    $ npm i -D webpack webpack-cli express
    ```
2. 번들링 환경 설정 (webpack.config.js)
    + entry
    + output

3. package.json build 바꾸기 - 스크립팅
    ```bash
    "build":"npx webpack"
    ```
4. webpack.config.js 만들기
    + webpack은 es6 지원 안 함

5. index.html
    ```html
    <script src="bundle.js"></script>
    ```
    + bundle.js로 번들링
6. build
    ```
    npm run bild
    ```
