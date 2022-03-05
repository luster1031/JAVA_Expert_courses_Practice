1. package.json build 바꾸기
    ```bash
    "build":"npx webpack"
    ```
2. webpack.config.js 만들기
    + webpack은 es6 지원 안 함
3. index.html
    ```html
    <script src="bundle.js"></script>
    ```
    + bundle.js로 번들링
4. build
    ```
    npm run bild
    ```
