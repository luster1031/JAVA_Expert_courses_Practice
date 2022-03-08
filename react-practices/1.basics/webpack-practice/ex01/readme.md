### JS Module만 번들링 하기
1. 설치 패키지
    ```bash
    $ npm i -D webpack webpack-cli express
    ```
2. 스크립팅
    > package.json
    ```json
    "scripts": {
        "build":"npx webpack ./src/index.js -o ./public"
    },
    ```
3. 번들링
    ```bash
    $npm run build
    ```